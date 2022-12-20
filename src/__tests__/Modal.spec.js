/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from '..';

describe('Modal', () => {
  const toggle = () => {};

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    // rtl doesn't clear attributes added to body, so manually clearing them
    document.body.removeAttribute('style');
    document.body.removeAttribute('class');
  });

  it('should render modal portal into DOM', () => {
    render(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(screen.getByText(/yo/i)).toBeInTheDocument();
  });

  it('should render with the class "modal-dialog"', () => {
    render(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(screen.getByText(/yo/i).parentElement).toHaveClass('modal-dialog');
  });

  it('should render external content when present', () => {
    render(
      <Modal
        isOpen
        toggle={toggle}
        external={<button className="cool-close-button">crazy button</button>}
      >
        Yo!
      </Modal>,
    );

    expect(screen.getByText(/crazy button/i)).toBeInTheDocument();
    expect(
      screen
        .getByText(/crazy button/i)
        .nextElementSibling.className.split(' ')
        .indexOf('modal-dialog') > -1,
    ).toBe(true);
  });

  it('should render with the backdrop with the class "modal-backdrop" by default', () => {
    render(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
  });

  it('should render with the backdrop with the class "modal-backdrop" when backdrop is "static"', () => {
    render(
      <Modal isOpen toggle={toggle} backdrop="static">
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
  });

  it('should not render with the backdrop with the class "modal-backdrop" when backdrop is "false"', () => {
    render(
      <Modal isOpen toggle={toggle} backdrop={false}>
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
  });

  it('should render with the class "modal-dialog-scrollable" when scrollable is "true"', () => {
    render(
      <Modal isOpen toggle={toggle} scrollable>
        Yo!
      </Modal>,
    );

    expect(
      document.getElementsByClassName('modal-dialog-scrollable').length,
    ).toBe(1);
  });

  it('should render with class "modal-dialog" and have custom class name if provided', () => {
    render(
      <Modal isOpen toggle={toggle} className="my-custom-modal">
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
  });

  it('should render with class "modal-dialog" w/o centered class if not provided', () => {
    render(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    jest.advanceTimersByTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(
      document.getElementsByClassName('modal-dialog-centered').length,
    ).toBe(0);
  });

  it('should render with class "modal-dialog" and centered class if provided', () => {
    render(
      <Modal isOpen toggle={toggle} centered>
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(
      document.getElementsByClassName('modal-dialog-centered').length,
    ).toBe(1);
  });

  describe('fullscreen', () => {
    it('should render non fullscreen by default', () => {
      render(
        <Modal isOpen toggle={toggle}>
          Yo!
        </Modal>,
      );

      expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
      expect(document.getElementsByClassName('modal-fullscreen').length).toBe(
        0,
      );
    });

    it('should always render fullscreen if true', () => {
      render(
        <Modal isOpen toggle={toggle} fullscreen>
          Yo!
        </Modal>,
      );

      expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
      expect(document.getElementsByClassName('modal-fullscreen').length).toBe(
        1,
      );
    });

    it('should render fullscreen below breakpoint if breakpoint is provided', () => {
      render(
        <Modal isOpen toggle={toggle} fullscreen="lg">
          Yo!
        </Modal>,
      );

      expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
      expect(document.getElementsByClassName('modal-fullscreen').length).toBe(
        0,
      );
      expect(
        document.getElementsByClassName('modal-fullscreen-lg-down').length,
      ).toBe(1);
    });
  });

  it('should render with additional props if provided', () => {
    render(
      <Modal isOpen toggle={toggle} style={{ maxWidth: '95%' }}>
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(
      document.getElementsByClassName('modal-dialog')[0].style.maxWidth,
    ).toBe('95%');
  });

  it('should render without fade transition if provided with fade={false}', () => {
    render(
      <Modal
        isOpen
        toggle={toggle}
        fade={false}
        modalClassName="fadeless-modal"
      >
        Howdy!
      </Modal>,
    );

    const matchedModals = document.getElementsByClassName('fadeless-modal');
    const matchedModal = matchedModals[0];

    expect(matchedModals.length).toBe(1);
    // Modal should not have the 'fade' class
    expect(matchedModal.className.split(' ').indexOf('fade') < 0).toBe(true);
  });

  it('should render when expected when passed modalTransition and backdropTransition props', () => {
    render(
      <Modal
        isOpen
        toggle={toggle}
        modalTransition={{ timeout: 2 }}
        backdropTransition={{ timeout: 10 }}
        modalClassName="custom-timeout-modal"
      >
        Hello, world!
      </Modal>,
    );

    expect(document.getElementsByClassName('custom-timeout-modal').length).toBe(
      1,
    );
  });

  it('should render with class "modal" and have custom class name if provided with modalClassName', () => {
    render(
      <Modal isOpen toggle={toggle} modalClassName="my-custom-modal">
        Yo!
      </Modal>,
    );

    expect(document.querySelectorAll('.modal.my-custom-modal').length).toBe(1);
  });

  it('should render with custom class name if provided with wrapClassName', () => {
    render(
      <Modal isOpen toggle={toggle} wrapClassName="my-custom-modal">
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
  });

  it('should render with class "modal-content" and have custom class name if provided with contentClassName', () => {
    render(
      <Modal isOpen toggle={toggle} contentClassName="my-custom-modal">
        Yo!
      </Modal>,
    );

    expect(
      document.querySelectorAll('.modal-content.my-custom-modal').length,
    ).toBe(1);
  });

  it('should render with class "modal-backdrop" and have custom class name if provided with backdropClassName', () => {
    render(
      <Modal isOpen toggle={toggle} backdropClassName="my-custom-modal">
        Yo!
      </Modal>,
    );

    expect(
      document.querySelectorAll('.modal-backdrop.my-custom-modal').length,
    ).toBe(1);
  });

  it('should render with the class "modal-${size}" when size is passed', () => {
    render(
      <Modal isOpen toggle={toggle} size="crazy">
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-crazy').length).toBe(1);
  });

  it('should render modal when isOpen is true', () => {
    render(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
  });

  it('should render modal with default role of "dialog"', () => {
    render(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(
      document.getElementsByClassName('modal')[0].getAttribute('role'),
    ).toBe('dialog');
  });

  it('should render modal with provided role', () => {
    render(
      <Modal isOpen toggle={toggle} role="alert">
        Yo!
      </Modal>,
    );

    expect(
      document.getElementsByClassName('modal')[0].getAttribute('role'),
    ).toBe('alert');
  });

  it('should render modal with aria-labelledby provided labelledBy', () => {
    render(
      <Modal isOpen toggle={toggle} labelledBy="myModalTitle">
        Yo!
      </Modal>,
    );

    expect(
      document
        .getElementsByClassName('modal')[0]
        .getAttribute('aria-labelledby'),
    ).toBe('myModalTitle');
  });

  it('should not render modal when isOpen is false', () => {
    render(
      <Modal isOpenfalse toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
  });

  it('should toggle modal', () => {
    const { rerender } = render(
      <Modal isOpen={false} toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);

    rerender(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
  });

  it('should call onClosed & onOpened', () => {
    const onOpened = jest.fn();
    const onClosed = jest.fn();
    const { rerender } = render(
      <Modal
        isOpen={false}
        onOpened={onOpened}
        onClosed={onClosed}
        toggle={toggle}
      >
        Yo!
      </Modal>,
    );

    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    rerender(
      <Modal isOpen onOpened={onOpened} onClosed={onClosed} toggle={toggle}>
        Yo!
      </Modal>,
    );
    jest.advanceTimersByTime(300);
    expect(onOpened).toHaveBeenCalledTimes(1);

    rerender(
      <Modal
        isOpen={false}
        onOpened={onOpened}
        onClosed={onClosed}
        toggle={toggle}
      >
        Yo!
      </Modal>,
    );

    jest.advanceTimersByTime(300);
    expect(onOpened).toHaveBeenCalledTimes(1);
    expect(onClosed).toHaveBeenCalledTimes(1);
  });

  it('should call onClosed & onOpened when fade={false}', () => {
    const onOpened = jest.fn();
    const onClosed = jest.fn();
    const { rerender } = render(
      <Modal
        isOpen={false}
        onOpened={onOpened}
        onClosed={onClosed}
        toggle={toggle}
        fade={false}
      >
        Yo!
      </Modal>,
    );

    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    rerender(
      <Modal
        isOpen
        onOpened={onOpened}
        onClosed={onClosed}
        toggle={toggle}
        fade={false}
      >
        Yo!
      </Modal>,
    );
    jest.advanceTimersByTime(1);

    expect(onOpened).toHaveBeenCalledTimes(1);
    expect(onClosed).not.toHaveBeenCalled();

    rerender(
      <Modal
        isOpen={false}
        onOpened={onOpened}
        onClosed={onClosed}
        toggle={toggle}
        fade={false}
      >
        Yo!
      </Modal>,
    );
    jest.advanceTimersByTime(1);

    expect(onClosed).toHaveBeenCalledTimes(1);
    expect(onOpened).toHaveBeenCalledTimes(1);
  });

  it('should call toggle when escape key pressed and not for enter key', () => {
    const toggle = jest.fn();
    render(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    user.keyboard('{enter}');
    expect(toggle).not.toHaveBeenCalled();

    user.keyboard('{esc}');
    expect(toggle).toHaveBeenCalled();
  });

  it('should not call toggle when escape key pressed when keyboard is false', () => {
    const toggle = jest.fn();
    render(
      <Modal isOpen toggle={toggle} keyboard={false}>
        Yo!
      </Modal>,
    );

    user.keyboard('{esc}');
    expect(toggle).not.toHaveBeenCalled();
  });

  it('should call toggle when clicking backdrop', () => {
    const toggle = jest.fn();
    render(
      <Modal isOpen toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    user.click(screen.getByText(/does nothing/i));
    expect(toggle).not.toHaveBeenCalled();

    user.click(document.body.getElementsByClassName('modal')[0]);
    expect(toggle).toHaveBeenCalled();
  });

  it('should not call toggle when clicking backdrop and backdrop is "static"', () => {
    const toggle = jest.fn();
    render(
      <Modal isOpen toggle={toggle} backdrop="static">
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    user.click(document.getElementsByClassName('modal-backdrop')[0]);
    expect(toggle).not.toHaveBeenCalled();
  });

  it('should not call toggle when escape key pressed and backdrop is "static" and keyboard=false', () => {
    const toggle = jest.fn();
    const { debug } = render(
      <Modal isOpen toggle={toggle} backdrop="static" keyboard={false}>
        Yo!
      </Modal>,
    );

    user.keyboard('{esc}');
    expect(toggle).not.toHaveBeenCalled();
  });

  it('should call toggle when escape key pressed and backdrop is "static" and keyboard=true', () => {
    const toggle = jest.fn();
    render(
      <Modal isOpen toggle={toggle} backdrop="static" keyboard>
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    user.keyboard('{esc}');
    expect(toggle).toHaveBeenCalled();
  });

  it('should animate when backdrop is "static" and escape key pressed and keyboard=false', () => {
    render(
      <Modal
        isOpen
        toggle={toggle}
        backdrop="static"
        keyboard={false}
        data-testid="mandalorian"
      >
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    user.keyboard('{esc}');

    expect(screen.getByTestId('mandalorian').parentElement).toHaveClass(
      'modal-static',
    );

    jest.advanceTimersByTime(300);

    expect(screen.getByTestId('mandalorian').parentElement).not.toHaveClass(
      'modal-static',
    );
  });

  it('should animate when backdrop is "static" and backdrop is clicked', () => {
    render(
      <Modal isOpen toggle={toggle} backdrop="static" data-testid="mandalorian">
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    user.click(document.getElementsByClassName('modal')[0]);

    expect(screen.getByTestId('mandalorian').parentElement).toHaveClass(
      'modal-static',
    );

    jest.advanceTimersByTime(300);

    expect(screen.getByTestId('mandalorian').parentElement).not.toHaveClass(
      'modal-static',
    );
  });

  it('should not animate when backdrop is "static" and modal is clicked', () => {
    render(
      <Modal isOpen toggle={toggle} backdrop="static" data-testid="mandalorian">
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    user.click(document.getElementsByClassName('modal-dialog')[0]);

    expect(screen.getByTestId('mandalorian').parentElement).not.toHaveClass(
      'modal-static',
    );
  });

  it('should destroy this._element', () => {
    const { rerender, debug } = render(
      <Modal isOpen toggle={toggle} wrapClassName="weird-class">
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    const element =
      document.getElementsByClassName('weird-class')[0].parentElement;
    expect(element).toBeInTheDocument();

    rerender(
      <Modal isOpen={false} toggle={toggle} wrapClassName="weird-class">
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );
    jest.advanceTimersByTime(300);
    expect(element).not.toBeInTheDocument();
  });

  it('should destroy this._element when unmountOnClose prop set to true', () => {
    const { rerender, debug } = render(
      <Modal isOpen toggle={toggle} unmountOnClose wrapClassName="weird-class">
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    const element =
      document.getElementsByClassName('weird-class')[0].parentElement;
    expect(element).toBeInTheDocument();

    rerender(
      <Modal
        isOpen={false}
        toggle={toggle}
        unmountOnClose
        wrapClassName="weird-class"
      >
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );
    jest.advanceTimersByTime(300);
    expect(element).not.toBeInTheDocument();
  });

  it('should not destroy this._element when unmountOnClose prop set to false', () => {
    const { rerender } = render(
      <Modal
        isOpen
        toggle={toggle}
        unmountOnClose={false}
        wrapClassName="weird-class"
      >
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );

    const element =
      document.getElementsByClassName('weird-class')[0].parentElement;
    expect(element).toBeInTheDocument();

    rerender(
      <Modal
        isOpen={false}
        toggle={toggle}
        unmountOnClose={false}
        wrapClassName="weird-class"
      >
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );
    expect(element).toBeInTheDocument();
  });

  it('should destroy this._element on unmount', () => {
    const { unmount } = render(
      <Modal isOpen toggle={toggle} wrapClassName="weird-class">
        <button id="clicker">Does Nothing</button>
      </Modal>,
    );
    unmount();
    jest.advanceTimersByTime(300);
    expect(document.getElementsByClassName('modal').length).toBe(0);
  });

  it('should render nested modals', () => {
    const { unmount } = render(
      <Modal isOpen toggle={toggle}>
        <ModalBody>
          <Modal isOpen toggle={() => {}}>
            Yo!
          </Modal>
        </ModalBody>
      </Modal>,
    );

    expect(document.getElementsByClassName('modal-dialog').length).toBe(2);
    expect(document.body.className).toBe('modal-open');

    unmount();

    expect(document.getElementsByClassName('modal-dialog').length).toBe(0);
  });

  it('should remove exactly modal-open class from body', () => {
    // set a body class which includes modal-open
    document.body.className = 'my-modal-opened';

    const { rerender } = render(
      <Modal isOpen={false} toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(document.body.className).toBe('my-modal-opened');

    rerender(
      <Modal isOpen toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(document.body.className).toBe('my-modal-opened modal-open');

    // using this to test if replace will leave a space when removing modal-open
    document.body.className += ' modal-opened';
    expect(document.body.className).toBe(
      'my-modal-opened modal-open modal-opened',
    );

    rerender(
      <Modal isOpen={false} toggle={toggle}>
        Yo!
      </Modal>,
    );

    jest.advanceTimersByTime(300);
    expect(document.body.className).toBe('my-modal-opened modal-opened');
  });

  it('should call onEnter & onExit props if provided', () => {
    const onEnter = jest.fn();
    const onExit = jest.fn();
    const { rerender, unmount } = render(
      <Modal isOpen={false} onEnter={onEnter} onExit={onExit} toggle={toggle}>
        Yo!
      </Modal>,
    );

    expect(onEnter).toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();

    onEnter.mockReset();
    onExit.mockReset();

    rerender(
      <Modal isOpen onEnter={onEnter} onExit={onExit} toggle={toggle}>
        Yo!
      </Modal>,
    );
    expect(onEnter).not.toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();

    onEnter.mockReset();
    onExit.mockReset();

    rerender(
      <Modal isOpen={false} onEnter={onEnter} onExit={onExit} toggle={toggle}>
        Yo!
      </Modal>,
    );
    unmount();
    expect(onEnter).not.toHaveBeenCalled();
    expect(onExit).toHaveBeenCalled();
  });

  it('should update element z index when prop changes', () => {
    const { debug, rerender } = render(
      <Modal isOpen zIndex={0} wrapClassName="sandman">
        Yo!
      </Modal>,
    );

    expect(
      document.getElementsByClassName('sandman')[0].parentElement.style.zIndex,
    ).toBe('0');

    rerender(
      <Modal isOpen zIndex={1} wrapClassName="sandman">
        Yo!
      </Modal>,
    );

    expect(
      document.getElementsByClassName('sandman')[0].parentElement.style.zIndex,
    ).toBe('1');
  });

  it('should allow focus on only focusable elements and tab through them', () => {
    render(
      <Modal isOpen toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <a alt="test" href="/">
            First Test
          </a>
          <map name="test">
            <area alt="test" href="/" coords="200,5,200,30" />
          </map>
          <input type="text" aria-label="test text input" />
          <input type="hidden" />
          <input type="text" disabled value="Test" />
          <select name="test" id="select_test">
            <option>Second item</option>
          </select>
          <select name="test" id="select_test_disabled" disabled>
            <option>Third item</option>
          </select>
          <textarea
            name="textarea_test"
            id="textarea_test"
            cols="30"
            rows="10"
            aria-label="test text area"
          />
          <textarea
            name="textarea_test_disabled"
            id="textarea_test_disabled"
            cols="30"
            rows="10"
            disabled
          />
          <object>Test</object>
          <span tabIndex="0">test tab index</span>
        </ModalBody>
        <ModalFooter>
          <Button disabled color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>,
    );

    user.tab();
    expect(screen.getByLabelText(/close/i)).toHaveFocus();
    user.tab();
    expect(screen.getByText(/first test/i)).toHaveFocus();
    user.tab();
    expect(screen.getByLabelText(/test text input/i)).toHaveFocus();
    user.tab();
    expect(screen.getByText(/second item/i).parentElement).toHaveFocus();
    user.tab();
    expect(screen.getByLabelText(/test text area/i)).toHaveFocus();
    user.tab();
    expect(screen.getByText(/test tab index/i)).toHaveFocus();
    user.tab();
    expect(screen.getByText(/cancel/i)).toHaveFocus();
    user.tab();
    expect(screen.getByLabelText(/close/i)).toHaveFocus();
  });

  it('should return the focus to the last focused element before the modal has opened', () => {
    const { rerender } = render(
      <>
        <button className="focus">Focused</button>
        <Modal isOpen={false}>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    user.tab();
    expect(screen.getByText(/focused/i)).toHaveFocus();

    rerender(
      <>
        <button className="focus">Focused</button>
        <Modal isOpen>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    rerender(
      <>
        <button className="focus">Focused</button>
        <Modal isOpen={false}>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    jest.runAllTimers();
    expect(screen.getByText(/focused/i)).toHaveFocus();
  });

  it('should not return the focus to the last focused element before the modal has opened when "returnFocusAfterClose" is false', () => {
    const { rerender } = render(
      <>
        <button className="focus">Focused</button>
        <Modal returnFocusAfterClose={false} isOpen={false}>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    user.tab();
    expect(screen.getByText(/focused/i)).toHaveFocus();

    rerender(
      <>
        <button className="focus">Focused</button>
        <Modal returnFocusAfterClose={false} isOpen>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    rerender(
      <>
        <button className="focus">Focused</button>
        <Modal returnFocusAfterClose={false} isOpen={false}>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    jest.runAllTimers();
    expect(screen.getByText(/focused/i)).not.toHaveFocus();
  });

  it('should return the focus to the last focused element before the modal has opened when "unmountOnClose" is false', () => {
    const { rerender } = render(
      <>
        <button className="focus">Focused</button>
        <Modal unmountOnClose={false} isOpen={false}>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    user.tab();
    expect(screen.getByText(/focused/i)).toHaveFocus();

    rerender(
      <>
        <button className="focus">Focused</button>
        <Modal unmountOnClose={false} isOpen>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    rerender(
      <>
        <button className="focus">Focused</button>
        <Modal unmountOnClose={false} isOpen={false}>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    jest.runAllTimers();
    expect(screen.getByText(/focused/i)).toHaveFocus();
  });

  it('should not return the focus to the last focused element before the modal has opened when "returnFocusAfterClose" is false and "unmountOnClose" is false', () => {
    const { rerender } = render(
      <>
        <button className="focus">Focused</button>
        <Modal
          unmountOnClose={false}
          returnFocusAfterClose={false}
          isOpen={false}
        >
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    user.tab();
    expect(screen.getByText(/focused/i)).toHaveFocus();

    rerender(
      <>
        <button className="focus">Focused</button>
        <Modal unmountOnClose={false} returnFocusAfterClose={false} isOpen>
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    rerender(
      <>
        <button className="focus">Focused</button>
        <Modal
          unmountOnClose={false}
          returnFocusAfterClose={false}
          isOpen={false}
        >
          <ModalBody>Whatever</ModalBody>
        </Modal>
      </>,
    );

    jest.runAllTimers();
    expect(screen.getByText(/focused/i)).not.toHaveFocus();
  });

  it('should attach/detach trapFocus for dialogs', () => {
    const addEventListener = jest.spyOn(document, 'addEventListener');
    const removeEventListener = jest.spyOn(document, 'removeEventListener');

    const { unmount } = render(
      <Modal isOpen>
        <ModalBody>
          <Button className="focus">focusable element</Button>
        </ModalBody>
      </Modal>,
    );

    expect(addEventListener).toHaveBeenCalledTimes(1);
    expect(addEventListener).toHaveBeenCalledWith(
      'focus',
      expect.any(Function),
      true,
    );

    unmount();

    expect(removeEventListener).toHaveBeenCalledTimes(1);
    expect(removeEventListener).toHaveBeenCalledWith(
      'focus',
      expect.any(Function),
      true,
    );

    addEventListener.mockRestore();
    removeEventListener.mockRestore();
  });

  it('should trap focus inside the open dialog', () => {
    const { rerender } = render(
      <>
        <Button className="first">Focused</Button>
        <Modal isOpen={false} trapFocus>
          <ModalBody>
            Something else to see
            <Button className="focus">focusable element</Button>
          </ModalBody>
        </Modal>
      </>,
    );

    screen.getByText(/focused/i).focus();

    expect(screen.getByText(/focused/i)).toHaveFocus();

    rerender(
      <>
        <Button className="first">Focused</Button>
        <Modal isOpen trapFocus data-testid="modal">
          <ModalBody>
            Something else to see
            <Button className="focus">focusable element</Button>
          </ModalBody>
        </Modal>
      </>,
    );

    jest.runAllTimers();
    expect(screen.getByText(/focused/i)).not.toHaveFocus();

    expect(screen.getByTestId('modal').parentElement).toHaveFocus();
    // pressing tab shouldn't move focus outside the modal
    user.tab();
    expect(screen.getByText(/focusable element/i)).toHaveFocus();
    user.tab();
    expect(screen.getByText(/focusable element/i)).toHaveFocus();
  });

  it('tab should focus on inside modal children for nested modal', () => {
    render(
      <Modal isOpen toggle={toggle}>
        <ModalBody>
          <Button className="b0" onClick={toggle}>
            Cancel
          </Button>
          <Modal isOpen>
            <ModalBody>
              <Button className="b1">Click 1</Button>
            </ModalBody>
          </Modal>
        </ModalBody>
      </Modal>,
    );

    user.tab();
    expect(screen.getByText(/click 1/i)).toHaveFocus();
    // pressing tab doesn't take focus out of inside modal
    user.tab();
    expect(screen.getByText(/click 1/i)).toHaveFocus();
  });

  it('works with strict mode', () => {
    const spy = jest.spyOn(console, 'error');
    render(
      <React.StrictMode>
        <Modal isOpen>Hello</Modal>
      </React.StrictMode>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
