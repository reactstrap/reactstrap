import React from 'react';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '..';
import { keyCodes } from '../utils';
import { testForChildrenInComponent } from '../testUtils';

describe('Dropdown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  function imitateDropdownFocus(toggle) {
    // this is needed to make the focus on the correct element
    // by following the default user behaviour
    // needed in particular for keyboard based tests
    // setting focus on the toggle element with code
    // is causing tab to cycle through elements.
    const { rerender } = render(
      <Dropdown isOpen={false} toggle={toggle} data-testid="drpdwn">
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>First item</DropdownItem>
          <DropdownItem>Second item</DropdownItem>
          <DropdownItem id="divider" divider />
        </DropdownMenu>
      </Dropdown>,
    );

    user.click(screen.getByText('Toggle'));
    toggle.mockClear();

    rerender(
      <Dropdown isOpen toggle={toggle} data-testid="drpdwn">
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>First item</DropdownItem>
          <DropdownItem>Second item</DropdownItem>
          <DropdownItem id="divider" divider />
        </DropdownMenu>
      </Dropdown>,
    );

    return { rerender };
  }

  it('should render a single child', () => {
    render(<Dropdown isOpen>Ello world</Dropdown>);

    expect(screen.getByText(/ello world/i)).toHaveClass('dropdown');
  });

  it('should render menu when isOpen is true', () => {
    render(
      <Dropdown isOpen>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.getByText(/toggle/i)).toHaveClass('btn');
    expect(screen.getByText(/test/i)).toHaveClass('dropdown-item');
  });

  it('should not call props.toggle when disabled ', () => {
    const toggle = jest.fn();
    render(
      <Dropdown isOpen toggle={toggle} disabled>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    user.click(screen.getByText(/toggle/i));
    expect(toggle).not.toHaveBeenCalled();
  });

  it('should call toggle when DropdownToggle is clicked ', () => {
    const toggle = jest.fn();
    render(
      <Dropdown isOpen toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    user.click(screen.getByText(/toggle/i));
    expect(toggle).toHaveBeenCalledTimes(1);
  });

  it('should call toggle when DropdownToggle with non string children is clicked ', () => {
    const toggle = jest.fn();
    render(
      <Dropdown isOpen toggle={toggle}>
        <DropdownToggle>
          <div>Toggle</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    user.click(screen.getByText(/toggle/i));
    expect(toggle).toHaveBeenCalledTimes(1);
  });

  describe('handleProps', () => {
    it('should not pass custom props to html attrs', () => {
      const toggle = jest.fn();
      render(
        <Dropdown a11y isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      const dropdown = document.getElementsByClassName('dropdown')[0];
      expect(dropdown).not.toHaveAttribute('inNavbar');
      expect(dropdown).not.toHaveAttribute('toggle');
      expect(dropdown).not.toHaveAttribute('a11y');
      expect(dropdown).not.toHaveAttribute('isOpen');
    });

    it('should add event listeners when isOpen changed to true', () => {
      const addEventListener = jest.spyOn(document, 'addEventListener');
      const { rerender } = render(
        <Dropdown isOpen={false}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      expect(addEventListener).not.toHaveBeenCalled();

      rerender(
        <Dropdown isOpen>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      // called three times because we have click, touchstart and keyup
      expect(addEventListener).toHaveBeenCalledTimes(3);
    });

    it('should not be called on componentDidUpdate when isOpen did not change', () => {
      const addEventListener = jest.spyOn(document, 'addEventListener');
      const { rerender } = render(
        <Dropdown isOpen>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      expect(addEventListener).toHaveBeenCalled();
      addEventListener.mockClear();

      rerender(
        <Dropdown isOpen size="lg">
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      expect(addEventListener).not.toHaveBeenCalled();
    });
  });

  describe('removeEvents', () => {
    it('should remove event listeners on componentWillUnmount', () => {
      const removeEventListener = jest.spyOn(document, 'removeEventListener');
      const { unmount } = render(
        <Dropdown isOpen>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      unmount();

      expect(removeEventListener).toHaveBeenCalled();
    });
  });

  describe('handleDocumentClick', () => {
    it('should call toggle on document click', () => {
      const toggle = jest.fn(() => {});

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.click(document.body);

      expect(toggle).toHaveBeenCalled();
    });

    it('should call toggle on container click', () => {
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle} data-testid="dropdown">
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.click(screen.getByTestId('dropdown'));

      expect(toggle).toHaveBeenCalled();
    });

    it('should call toggle on container click', () => {
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle} data-testid="dropdown">
          <DropdownToggle>
            <div>Toggle</div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.click(screen.getByTestId('dropdown'));

      expect(toggle).toHaveBeenCalled();
    });

    it('should not call toggle on inner container click', () => {
      const toggle = jest.fn();
      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>,
      );

      user.click(document.getElementById('divider'));

      expect(toggle).not.toHaveBeenCalled();
    });

    it('should not call toggle when right-clicked', () => {
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle} data-testid="dropdown">
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>,
      );

      user.click(screen.getByTestId('dropdown'), { button: 2 });

      expect(toggle).not.toHaveBeenCalled();
    });

    it('should go through first dropdown item and close when tab is pressed multiple times', async () => {
      const toggle = jest.fn();

      imitateDropdownFocus(toggle);

      user.tab();
      expect(screen.getByText(/first item/i)).toHaveFocus();

      user.tab();
      expect(toggle).toHaveBeenCalledTimes(1);
    });
  });

  describe('keyboard events', () => {
    it('should call toggle on ESC keydown when it isOpen is true', () => {
      const toggle = jest.fn();

      imitateDropdownFocus(toggle);

      user.keyboard('{esc}');

      expect(toggle).toHaveBeenCalledTimes(1);
    });

    it('should call toggle on down arrow keydown when it isOpen is false', () => {
      const toggle = jest.fn();
      render(
        <Dropdown isOpen={false} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      expect(screen.getByText('Toggle')).toHaveFocus();

      user.keyboard('{arrowdown}');
      expect(toggle).toHaveBeenCalledTimes(1);
    });

    it('should call toggle on up arrow keydown when it isOpen is false', () => {
      const toggle = jest.fn();
      render(
        <Dropdown isOpen={false} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      expect(screen.getByText('Toggle')).toHaveFocus();

      user.keyboard('{arrowup}');
      expect(toggle).toHaveBeenCalledTimes(1);
    });

    it('should focus the first menuitem when toggle is triggered by enter keydown', () => {
      const toggle = jest.fn();
      const focus = jest.fn();
      render(
        <Dropdown isOpen={false} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem onFocus={focus}>Test</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      expect(screen.getByText('Toggle')).toHaveFocus();

      expect(focus).not.toHaveBeenCalled();

      user.keyboard('{enter}');
      expect(toggle).toHaveBeenCalled();

      jest.runAllTimers();
      expect(focus).toHaveBeenCalled();
    });

    it('should focus the first menuitem when toggle is triggered by up arrow keydown', () => {
      const toggle = jest.fn();
      const focus = jest.fn();
      render(
        <Dropdown isOpen={false} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem onFocus={focus}>Test</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      expect(screen.getByText('Toggle')).toHaveFocus();

      expect(focus).not.toHaveBeenCalled();

      user.keyboard('{arrowdown}');
      expect(toggle).toHaveBeenCalled();

      jest.runAllTimers();
      expect(focus).toHaveBeenCalled();
    });

    it('should focus the first menuitem when toggle is triggered by down arrow keydown', () => {
      const toggle = jest.fn();
      const focus = jest.fn();
      render(
        <Dropdown isOpen={false} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem onFocus={focus}>Test</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      expect(screen.getByText('Toggle')).toHaveFocus();

      expect(focus).not.toHaveBeenCalled();

      user.keyboard('{arrowup}');
      expect(toggle).toHaveBeenCalled();

      jest.runAllTimers();
      expect(focus).toHaveBeenCalled();
      expect(screen.getByText('Test')).toHaveFocus();
    });

    it('should focus the next menuitem on down arrow keydown when isOpen is true', () => {
      const toggle = jest.fn();
      const focus = jest.fn();
      const focus2 = jest.fn();
      const { rerender } = render(
        <Dropdown isOpen={false} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem onFocus={focus}>Test</DropdownItem>
            <DropdownItem>i am focused</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      expect(screen.getByText('Toggle')).toHaveFocus();
      expect(focus).not.toHaveBeenCalled();

      user.keyboard('{arrowup}');
      expect(toggle).toHaveBeenCalled();

      rerender(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem onFocus={focus}>Test</DropdownItem>
            <DropdownItem onFocus={focus2}>i am focused</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      jest.runAllTimers();
      expect(focus).toHaveBeenCalled();
      expect(screen.getByText('Test')).toHaveFocus();

      user.keyboard('{arrowdown}');
      expect(focus2).toHaveBeenCalled();
      expect(screen.getByText('i am focused')).toHaveFocus();
    });

    it('should focus the next menuitem on ctrl + n keydown when isOpen is true', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="first" onFocus={focus1}>
              Test1
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus2}>Test2</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      screen.getByText('Test1').focus();
      expect(screen.getByText('Test1')).toHaveFocus();
      user.keyboard('{ctrl>}N');
      expect(screen.getByText('Test2')).toHaveFocus();
    });

    it('should focus the first menu item matching the character pressed when isOpen is true', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      render(
        <Dropdown isOpen>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem id="first" onFocus={focus1}>
              Reactstrap
            </DropdownItem>
            <DropdownItem onFocus={focus2}>4</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus3}> Lyfe</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      user.tab();
      expect(screen.getByText('Reactstrap')).toHaveFocus();

      focus1.mockClear();

      user.keyboard('4');
      expect(screen.getByText('4')).toHaveFocus();

      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(1);
      expect(focus3.mock.calls.length).toBe(0);
    });

    it('should skip non-menu items focus the next menu item on down arrow keydown when it isOpen is true and anther item is focused', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem id="first" onFocus={focus1}>
              Test1
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus2}>Test2</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      user.tab();
      expect(screen.getByText('Test1')).toHaveFocus();
      user.keyboard('{arrowdown}');
      expect(screen.getByText('Test2')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(1);
      expect(focus2).toBeCalledTimes(1);
    });

    it('should focus the previous menu item on up arrow keydown when isOpen is true and another item is focused', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem id="first" onFocus={focus1}>
              Test1
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus2}>Test2</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      user.tab();
      expect(screen.getByText('Test1')).toHaveFocus();
      user.keyboard('{arrowdown}');
      expect(screen.getByText('Test2')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(1);
      expect(focus2).toBeCalledTimes(1);
      user.keyboard('{arrowup}');
      expect(screen.getByText('Test1')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(2);
    });

    it('should focus the previous menuitem on ctrl + p keydown when isOpen is true and another item is focused', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="first" onFocus={focus1}>
              Test1
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus2}>Test2</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      screen.getByText('Test1').focus();
      expect(screen.getByText('Test1')).toHaveFocus();
      user.keyboard('{arrowdown}');
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(1);
      expect(focus2).toBeCalledTimes(1);
      expect(screen.getByText('Test2')).toHaveFocus();
      user.keyboard('{ctrl>}P');
      expect(screen.getByText('Test1')).toHaveFocus();
    });

    it('should wrap focus with down arrow keydown', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem id="first" onFocus={focus1}>
              Test1
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus2}>Test2</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      user.tab();
      expect(screen.getByText('Test1')).toHaveFocus();
      user.keyboard('{arrowdown}');
      expect(screen.getByText('Test2')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(1);
      expect(focus2).toBeCalledTimes(1);
      user.keyboard('{arrowdown}');
      expect(screen.getByText('Test1')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(2);
    });

    it('should wrap focus with up arrow keydown', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem id="first" onFocus={focus1}>
              Test1
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus2}>Test2</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      user.tab();
      expect(screen.getByText('Test1')).toHaveFocus();
      user.keyboard('{arrowup}');
      expect(screen.getByText('Test2')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(1);
      expect(focus2).toBeCalledTimes(1);
    });

    it('should focus the 1st item on home key keyDown', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem id="first" onFocus={focus1}>
              Test1
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus2}>Test2</DropdownItem>
            <DropdownItem onFocus={focus3}>Test3</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      user.tab();
      expect(screen.getByText('Test1')).toHaveFocus();
      user.keyboard('{arrowdown}');
      user.keyboard('{arrowdown}');
      expect(screen.getByText('Test3')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(1);
      expect(focus2).toBeCalledTimes(1);
      expect(focus3).toBeCalledTimes(1);
      user.keyboard('{home}');
      expect(screen.getByText('Test1')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(2);
    });

    it('should focus the last item on end key keyDown', () => {
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem id="first" onFocus={focus1}>
              Test1
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus2}>Test2</DropdownItem>
            <DropdownItem onFocus={focus3}>Test3</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      user.tab();
      expect(screen.getByText('Test1')).toHaveFocus();
      user.keyboard('{end}');
      expect(screen.getByText('Test3')).toHaveFocus();
      expect(toggle).not.toHaveBeenCalled();
      expect(focus1).toBeCalledTimes(1);
      expect(focus2).toBeCalledTimes(0);
      expect(focus3).toBeCalledTimes(1);
    });

    it('should trigger a click on links when an item is focused and space[bar] it pressed', () => {
      const click = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem href="#" id="first" onClick={click}>
              Test1
            </DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      user.tab();
      user.tab();
      expect(screen.getByText('Test1')).toHaveFocus();

      user.keyboard('{space}');

      expect(click).toHaveBeenCalled();
    });

    it('should trigger a click on buttons when an item is focused and space[bar] it pressed (override browser defaults for focus management)', () => {
      const toggle = jest.fn();
      const click = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="first" onClick={click}>
              Test1
            </DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      screen.getByText('Test1').focus();
      expect(toggle).not.toHaveBeenCalled();
      expect(screen.getByText('Test1')).toHaveFocus();

      user.keyboard('{space}');

      expect(toggle).toHaveBeenCalledTimes(1);
      expect(click).toHaveBeenCalledTimes(1);
    });

    it('should not trigger anything when within an input', () => {
      const click = jest.fn();
      const focus = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}>
              <input id="input" placeholder="name" />
            </DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );
      screen.getByPlaceholderText('name').focus();
      expect(screen.getByPlaceholderText(/name/i)).toHaveFocus();

      focus.mockClear();
      click.mockClear();

      user.keyboard('{arrowdown}');
      user.keyboard('{arrowup}');
      user.keyboard('{space}');

      expect(toggle).not.toHaveBeenCalled();

      expect(screen.getByPlaceholderText(/name/i)).toHaveFocus();

      expect(focus).not.toHaveBeenCalled();
      expect(click).not.toHaveBeenCalled();
    });

    it('should not trigger anything when within a textarea', () => {
      const click = jest.fn();
      const focus = jest.fn();
      const toggle = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}>
              <textarea id="input" placeholder="placeholder" />
            </DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      screen.getByPlaceholderText(/placeholder/i).focus();
      expect(screen.getByPlaceholderText(/placeholder/i)).toHaveFocus();

      focus.mockClear();
      click.mockClear();

      user.keyboard('{arrowdown}');
      user.keyboard('{arrowup}');
      user.keyboard('{space}');

      expect(toggle).not.toHaveBeenCalled();

      expect(screen.getByPlaceholderText(/placeholder/i)).toHaveFocus();

      expect(focus).not.toHaveBeenCalled();
      expect(click).not.toHaveBeenCalled();
    });

    it('should toggle when isOpen is true and tab keyDown on menuitem', () => {
      const toggle = jest.fn();
      const focus = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="first">First</DropdownItem>
            <DropdownItem id="second" onFocus={focus}>
              Second
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      screen.getByText(/first/i).focus();

      user.tab();

      expect(toggle).toHaveBeenCalledTimes(1);
    });

    it('should not trigger anything when disabled', () => {
      const toggle = jest.fn();
      const click = jest.fn();
      const focus = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle} disabled>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}>
              Test1
            </DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      screen.getByText(/test1/i).focus();

      focus.mockClear();

      user.keyboard('{arrowdown}');
      user.keyboard('{arrowup}');
      user.keyboard('{space}');

      expect(toggle).not.toHaveBeenCalled();
      expect(click).not.toHaveBeenCalled();
      expect(focus).not.toHaveBeenCalled();
    });

    it('should not focus anything when all items disabled', () => {
      const toggle = jest.fn();
      const click = jest.fn();
      const focus = jest.fn();

      render(
        <Dropdown isOpen toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              disabled
              tag="div"
              id="first"
              onClick={click}
              onFocus={focus}
            >
              Test
            </DropdownItem>
            <DropdownItem disabled id="second">
              Test
            </DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem disabled id="third">
              Test
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      screen.getByText(/toggle/i).focus();

      user.keyboard('{arrowdown}');
      user.keyboard('{arrowup}');
      user.keyboard('{space}');

      expect(toggle).not.toHaveBeenCalled();
      expect(click).not.toHaveBeenCalled();
      expect(focus).not.toHaveBeenCalled();
    });

    it('should not call preventDefault when dropdown has focus and f5 key is pressed', () => {
      const toggle = jest.fn();

      render(
        <Dropdown isOpen={false} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>,
      );

      expect(toggle).not.toHaveBeenCalled();

      const button = screen.getByText(/toggle/i);

      const keyEvent1 = createEvent.keyDown(button, {
        keyCode: 116,
      });
      fireEvent(button, keyEvent1);
      expect(keyEvent1.defaultPrevented).toBe(false);

      const keyEvent2 = createEvent.keyDown(button, {
        keyCode: 16,
      });
      fireEvent(button, keyEvent2);
      expect(keyEvent2.defaultPrevented).toBe(false);
    });

    it('should call preventDefault when dropdown has focus and any key(up, down, esc, enter, home, end or any alphanumeric key) is pressed', () => {
      const toggle = jest.fn();

      render(
        <Dropdown isOpen={false} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>,
      );

      expect(toggle).not.toHaveBeenCalled();

      const button = screen.getByText(/toggle/i);
      [
        keyCodes.down,
        keyCodes.up,
        keyCodes.end,
        keyCodes.home,
        keyCodes.enter,
        90, // for 'a'
        65, // for 'A'
      ].forEach((keyCode) => {
        const keyEvent = createEvent.keyDown(button, {
          keyCode,
        });
        fireEvent(button, keyEvent);
        expect(keyEvent.defaultPrevented).toBe(true);
      });
    });
  });

  it('should render different size classes', () => {
    const { rerender } = render(
      <Dropdown group isOpen size="sm">
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.getByText(/toggle/i).parentElement).toHaveClass(
      'btn-group-sm',
    );

    rerender(
      <Dropdown group isOpen size="lg">
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.getByText(/toggle/i).parentElement).toHaveClass(
      'btn-group-lg',
    );
  });

  describe('Dropdown with nav', () => {
    it('should render a single child', () => {
      testForChildrenInComponent(Dropdown);
    });

    it('should render multiple children when isOpen', () => {
      render(
        <Dropdown nav isOpen>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      expect(screen.getByText(/test/i)).toBeInTheDocument();
      expect(screen.getByText(/toggle/i)).toBeInTheDocument();
    });
  });

  describe('Dropdown in navbar', () => {
    it('should open without popper with inNavbar prop', () => {
      render(
        <Dropdown nav inNavbar>
          <DropdownToggle caret nav>
            Toggle
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      expect(screen.getByText(/toggle/i).tagName).toBe('A');
      expect(screen.getByText(/test/i).parentElement.tagName).toBe('DIV');
    });
  });

  describe('active', () => {
    it('should render an active class', () => {
      render(<Dropdown active nav />);

      expect(screen.getByRole('listitem')).toHaveClass('active');
    });

    it('should render an active class when a child DropdownItem is active IF setActiveFromChild is true', () => {
      render(
        <Dropdown nav inNavbar setActiveFromChild>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem active>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      expect(screen.getByRole('listitem')).toHaveClass('active');
    });
  });

  it('should render with correct class when direction is set', () => {
    const { rerender } = render(<Dropdown direction="up" nav />);
    expect(screen.getByRole('listitem')).toHaveClass('dropup');
    rerender(<Dropdown direction="start" nav />);
    expect(screen.getByRole('listitem')).toHaveClass('dropstart');
    rerender(<Dropdown direction="end" nav />);
    expect(screen.getByRole('listitem')).toHaveClass('dropend');
  });

  describe('menuRole prop', () => {
    it('should set correct roles for children when menuRole is menu', () => {
      render(
        <Dropdown menuRole="menu" isOpen>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem active>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      expect(screen.getByText(/options/i)).toHaveAttribute(
        'aria-haspopup',
        'menu',
      );
      expect(screen.getByRole('menu')).toBeInTheDocument();
      expect(screen.getByRole('menuitem')).toBeInTheDocument();
    });

    it('should set correct roles for children when menuRole is menu', () => {
      render(
        <Dropdown menuRole="listbox" isOpen>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem active>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
      );

      expect(screen.getByText(/options/i)).toHaveAttribute(
        'aria-haspopup',
        'listbox',
      );
      expect(screen.getByRole('option')).toBeInTheDocument();
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
  });
});
