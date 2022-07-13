/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasFooter,
  Button,
} from '..';
import { keyCodes } from '../utils';

describe('Offcanvas', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => {
      isOpen = !isOpen;
    };

    jest.useFakeTimers();
  });

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';

    // fast forward time for offcanvas to fade out
    jest.runTimersToTime(300);
    jest.clearAllTimers();
  });

  it('should render offcanvas portal into DOM', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(wrapper.childAt(0).children().length).not.toBe(0);
    wrapper.unmount();
  });

  it('should render with the class "offcanvas"', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the backdrop with the class "offcanvas-backdrop" by default', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('offcanvas-backdrop').length).toBe(
      1,
    );
    wrapper.unmount();
  });

  it('should not render with the backdrop with the class "offcanvas-backdrop" when backdrop is "false"', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle} backdrop={false}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);
    expect(document.getElementsByClassName('offcanvas-backdrop').length).toBe(
      0,
    );
    wrapper.unmount();
  });

  it('should render with class "offcanvas" and have custom class name if provided', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas
        isOpen={isOpen}
        toggle={toggle}
        className="my-custom-offcanvas"
      >
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);
    expect(document.getElementsByClassName('my-custom-offcanvas').length).toBe(
      1,
    );
    wrapper.unmount();
  });

  it('should render with additional props if provided', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle} style={{ maxWidth: '95%' }}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);
    expect(document.getElementsByClassName('offcanvas')[0].style.maxWidth).toBe(
      '95%',
    );
    wrapper.unmount();
  });

  it('should render without fade transition if provided with fade={false}', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas
        isOpen={isOpen}
        toggle={toggle}
        fade={false}
        className="fadeless-offcanvas"
      >
        Howdy!
      </Offcanvas>,
    );

    // Offcanvas should appear instantaneously
    jest.runTimersToTime(1);

    const matchedOffcanvass =
      document.getElementsByClassName('fadeless-offcanvas');
    const matchedOffcanvas = matchedOffcanvass[0];

    expect(matchedOffcanvass.length).toBe(1);
    // Offcanvas should not have the 'fade' class
    expect(matchedOffcanvas.className.split(' ').indexOf('fade') < 0).toBe(
      true,
    );

    wrapper.unmount();
  });

  it('should render when expected when passed offcanvasTransition and backdropTransition props', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas
        isOpen={isOpen}
        toggle={toggle}
        offcanvasTransition={{ timeout: 2 }}
        backdropTransition={{ timeout: 10 }}
        className="custom-timeout-offcanvas"
      >
        Hello, world!
      </Offcanvas>,
    );

    jest.runTimersToTime(20);

    const matchedOffcanvass = document.getElementsByClassName(
      'custom-timeout-offcanvas',
    );

    expect(matchedOffcanvass.length).toBe(1);

    wrapper.unmount();
  });

  it('should render with class "offcanvas-backdrop" and have custom class name if provided with backdropClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas
        isOpen={isOpen}
        toggle={toggle}
        backdropClassName="my-custom-offcanvas"
      >
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(
      document.querySelectorAll('.offcanvas-backdrop.my-custom-offcanvas')
        .length,
    ).toBe(1);
    wrapper.unmount();
  });

  it('should render with the class "offcanvas-${direction}" when direction is passed', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle} direction="top">
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);
    expect(document.getElementsByClassName('offcanvas-top').length).toBe(1);
    wrapper.unmount();
  });

  it('should render offcanvas when isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);
    expect(document.getElementsByClassName('offcanvas-backdrop').length).toBe(
      1,
    );
    wrapper.unmount();
  });

  it('should render offcanvas with default role of "dialog"', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(
      document.getElementsByClassName('offcanvas')[0].getAttribute('role'),
    ).toBe('dialog');
    wrapper.unmount();
  });

  it('should render offcanvas with provided role', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle} role="alert">
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(
      document.getElementsByClassName('offcanvas')[0].getAttribute('role'),
    ).toBe('alert');
    wrapper.unmount();
  });

  it('should render offcanvas with aria-labelledby provided labelledBy', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle} labelledBy="myOffcanvasTitle">
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(
      document
        .getElementsByClassName('offcanvas')[0]
        .getAttribute('aria-labelledby'),
    ).toBe('myOffcanvasTitle');
    wrapper.unmount();
  });

  it('should not render offcanvas when isOpen is false', () => {
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(wrapper.childAt(0).children().length).toBe(0);
    expect(document.getElementsByClassName('offcanvas').length).toBe(0);
    expect(document.getElementsByClassName('offcanvas-backdrop').length).toBe(
      0,
    );
    wrapper.unmount();
  });

  it('should toggle offcanvas', () => {
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(isOpen).toBe(false);
    expect(wrapper.childAt(0).children().length).toBe(0);
    expect(document.getElementsByClassName('offcanvas').length).toBe(0);
    expect(document.getElementsByClassName('offcanvas-backdrop').length).toBe(
      0,
    );

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });

    jest.runTimersToTime(300);
    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);
    expect(document.getElementsByClassName('offcanvas-backdrop').length).toBe(
      1,
    );
    wrapper.unmount();
  });

  it('should call onClosed & onOpened', () => {
    jest.spyOn(Offcanvas.prototype, 'onOpened');
    jest.spyOn(Offcanvas.prototype, 'onClosed');
    const onOpened = jest.fn();
    const onClosed = jest.fn();
    const wrapper = mount(
      <Offcanvas
        isOpen={isOpen}
        onOpened={onOpened}
        onClosed={onClosed}
        toggle={toggle}
      >
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(Offcanvas.prototype.onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    expect(Offcanvas.prototype.onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(onOpened).toHaveBeenCalled();
    expect(Offcanvas.prototype.onOpened).toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    expect(Offcanvas.prototype.onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(onClosed).toHaveBeenCalled();
    expect(Offcanvas.prototype.onClosed).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should call onClosed & onOpened when fade={false}', () => {
    const onOpened = jest.fn();
    const onClosed = jest.fn();
    const wrapper = mount(
      <Offcanvas
        isOpen={isOpen}
        onOpened={onOpened}
        onClosed={onClosed}
        toggle={toggle}
        fade={false}
      >
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(1);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(1);

    expect(isOpen).toBe(true);
    expect(onOpened).toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(1);

    expect(isOpen).toBe(false);
    expect(onClosed).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should not call init when isOpen does not change', () => {
    jest.spyOn(Offcanvas.prototype, 'init');
    jest.spyOn(Offcanvas.prototype, 'componentDidUpdate');
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    jest.runTimersToTime(300);
    expect(isOpen).toBe(false);
    expect(Offcanvas.prototype.init).not.toHaveBeenCalled();
    expect(Offcanvas.prototype.componentDidUpdate).not.toHaveBeenCalled();

    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(Offcanvas.prototype.init).not.toHaveBeenCalled();
    expect(Offcanvas.prototype.componentDidUpdate).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should close offcanvas when escape key pressed', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);

    instance.handleEscape({ keyCode: 13 });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);

    const escapeKeyUpEvent = {
      keyCode: keyCodes.esc,
      preventDefault: jest.fn(() => {}),
      stopPropagation: jest.fn(() => {}),
    };

    instance.handleEscape(escapeKeyUpEvent);
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(escapeKeyUpEvent.preventDefault.mock.calls.length).toBe(1);
    expect(escapeKeyUpEvent.stopPropagation.mock.calls.length).toBe(1);

    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(document.getElementsByClassName('offcanvas').length).toBe(0);

    wrapper.unmount();
  });

  it('should not close offcanvas when escape key pressed when keyboard is false', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle} keyboard={false}>
        Yo!
      </Offcanvas>,
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);

    instance.handleEscape({ keyCode: 13 });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('offcanvas').length).toBe(1);

    instance.handleEscape({ keyCode: 27 });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);

    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(document.getElementsByClassName('offcanvas').length).toBe(1);

    wrapper.unmount();
  });

  it('should close offcanvas when clicking backdrop', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Offcanvas>,
    );

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('offcanvas-backdrop').length).toBe(
      1,
    );

    document.getElementById('clicker').click();
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);

    const backdrop = document.getElementsByClassName('offcanvas-backdrop')[0];

    const mouseDownEvent = document.createEvent('MouseEvents');
    mouseDownEvent.initEvent('mousedown', true, true);
    backdrop.dispatchEvent(mouseDownEvent);

    const clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent('click', true, true);
    backdrop.dispatchEvent(clickEvent);

    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);

    wrapper.unmount();
  });

  it('should destroy this._element', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Offcanvas>,
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);
    expect(instance._element).toBeTruthy();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(instance._element).toBe(null);

    wrapper.unmount();
  });

  it('should destroy this._element when unmountOnClose prop set to true', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle} unmountOnClose>
        <button id="clicker">Does Nothing</button>
      </Offcanvas>,
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);
    expect(instance._element).toBeTruthy();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(instance._element).toBe(null);

    wrapper.unmount();
  });

  it('should not destroy this._element when unmountOnClose prop set to false', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle} unmountOnClose={false}>
        <button id="clicker">Does Nothing</button>
      </Offcanvas>,
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);
    expect(instance._element).toBeTruthy();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(instance._element).toBeTruthy();

    wrapper.unmount();
  });

  it('should destroy this._element on unmount', () => {
    isOpen = true;
    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Offcanvas>,
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);
    expect(instance._element).toBeTruthy();

    wrapper.unmount();
    jest.runTimersToTime(300);

    expect(instance._element).toBe(null);
  });

  it('should remove exactly visibility styles from body', () => {
    // set a body class which includes offcanvas-open
    document.body.style.background = 'blue';

    const wrapper = mount(
      <Offcanvas isOpen={false} toggle={toggle}>
        Yo!
      </Offcanvas>,
    );

    // assert that the offcanvas is closed and the body class is what was set initially
    jest.runTimersToTime(300);
    expect(isOpen).toBe(false);
    expect(document.body.style.background).toBe('blue');
    expect(document.body.style.overflow).toBe('');

    toggle();
    wrapper.setProps({
      isOpen: true,
    });

    // assert that the offcanvas is open and the body class is what was set initially + offcanvas-open
    jest.runTimersToTime(300);
    expect(isOpen).toBe(true);
    wrapper.update();
    expect(document.body.style.background).toBe('blue');
    expect(document.body.style.overflow).toBe('hidden');

    // append another body class which includes offcanvas-open
    // using this to test if replace will leave a space when removing offcanvas-open
    document.body.style.color = 'red';
    expect(document.body.style.background).toBe('blue');
    expect(document.body.style.color).toBe('red');
    expect(document.body.style.overflow).toBe('hidden');

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });

    // assert that the offcanvas is closed and the body class is what was set initially
    jest.runTimersToTime(301);
    expect(isOpen).toBe(false);
    expect(document.body.style.background).toBe('blue');
    expect(document.body.style.color).toBe('red');
    expect(document.body.style.overflow).toBe('');

    wrapper.unmount();
  });

  it('should call onEnter & onExit props if provided', () => {
    const onEnter = jest.fn();
    const onExit = jest.fn();
    const wrapper = mount(
      <Offcanvas
        isOpen={isOpen}
        onEnter={onEnter}
        onExit={onExit}
        toggle={toggle}
      >
        Yo!
      </Offcanvas>,
    );

    expect(isOpen).toBe(false);
    expect(onEnter).toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();

    onEnter.mockReset();
    onExit.mockReset();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(onEnter).not.toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();

    onEnter.mockReset();
    onExit.mockReset();

    toggle();
    wrapper.setProps({
      isOpen: isOpen,
    });
    jest.runTimersToTime(300);

    wrapper.unmount();
    expect(onEnter).not.toHaveBeenCalled();
    expect(onExit).toHaveBeenCalled();
  });

  it('should update element z index when prop changes', () => {
    const wrapper = shallow(
      <Offcanvas isOpen zIndex={0}>
        Yo!
      </Offcanvas>,
    );
    expect(wrapper.instance()._element.style.zIndex).toBe('0');
    wrapper.setProps({ zIndex: 1 });
    expect(wrapper.instance()._element.style.zIndex).toBe('1');
  });

  it('should allow focus on only focusable elements', () => {
    isOpen = true;

    const wrapper = mount(
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        <OffcanvasHeader toggle={toggle}>Offcanvas title</OffcanvasHeader>
        <OffcanvasBody>
          <a alt="test" href="/">
            Test
          </a>
          <map name="test">
            <area alt="test" href="/" coords="200,5,200,30" />
          </map>
          <input type="text" />
          <input type="hidden" />
          <input type="text" disabled value="Test" />
          <select name="test" id="select_test">
            <option>Test item</option>
          </select>
          <select name="test" id="select_test_disabled" disabled>
            <option>Test item</option>
          </select>
          <textarea
            name="textarea_test"
            id="textarea_test"
            cols="30"
            rows="10"
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
        </OffcanvasBody>
      </Offcanvas>,
    );

    const instance = wrapper.instance();
    expect(instance.getFocusableChildren().length).toBe(9);
    wrapper.unmount();
  });

  it('should return the focus to the last focused element before the offcanvas has opened', () => {
    function MockComponent({ isOpen = false }) {
      return (
        <>
          <button className="focus">Focused</button>
          <Offcanvas isOpen={isOpen}>
            <OffcanvasBody>Whatever</OffcanvasBody>
          </Offcanvas>
        </>
      );
    }
    const wrapper = mount(<MockComponent />);
    const button = wrapper.find('.focus').hostNodes().getDOMNode();
    button.focus();
    wrapper.setProps({ isOpen: true });
    wrapper.setProps({ isOpen: false });
    jest.runAllTimers();

    expect(document.activeElement === button).toEqual(true);
    wrapper.unmount();
  });

  it('should not return the focus to the last focused element before the offcanvas has opened when "returnFocusAfterClose" is false', () => {
    function MockComponent({ isOpen = false }) {
      return (
        <>
          <button className="focus">Focused</button>
          <Offcanvas isOpen={isOpen} returnFocusAfterClose={false}>
            <OffcanvasBody>Whatever</OffcanvasBody>
          </Offcanvas>
        </>
      );
    }
    const wrapper = mount(<MockComponent />);
    const button = wrapper.find('.focus').hostNodes().getDOMNode();
    button.focus();
    wrapper.setProps({ isOpen: true });
    wrapper.setProps({ isOpen: false });
    jest.runAllTimers();

    expect(document.activeElement === button).toEqual(false);
    wrapper.unmount();
  });

  it('should return the focus to the last focused element before the offcanvas has opened when "unmountOnClose" is false', () => {
    function MockComponent({ isOpen = false }) {
      return (
        <>
          <button className="focus">Focused</button>
          <Offcanvas isOpen={isOpen} unmountOnClose={false}>
            <OffcanvasBody>Whatever</OffcanvasBody>
          </Offcanvas>
        </>
      );
    }
    const wrapper = mount(<MockComponent />);
    const button = wrapper.find('.focus').hostNodes().getDOMNode();
    button.focus();
    wrapper.setProps({ isOpen: true });
    wrapper.setProps({ isOpen: false });
    jest.runAllTimers();

    expect(document.activeElement === button).toEqual(true);
    wrapper.unmount();
  });

  it('should not return the focus to the last focused element before the offcanvas has opened when "returnFocusAfterClose" is false and "unmountOnClose" is false', () => {
    function MockComponent({ isOpen = false }) {
      return (
        <>
          <button className="focus" />
          <Offcanvas
            isOpen={isOpen}
            returnFocusAfterClose={false}
            unmountOnClose={false}
          >
            <OffcanvasBody>Whatever</OffcanvasBody>
          </Offcanvas>
        </>
      );
    }
    const wrapper = mount(<MockComponent />);
    const button = wrapper.find('.focus').hostNodes().getDOMNode();
    button.focus();
    wrapper.setProps({ isOpen: true });
    wrapper.setProps({ isOpen: false });
    jest.runAllTimers();

    expect(document.activeElement === button).toEqual(false);
    wrapper.unmount();
  });

  it('should attach/detach trapFocus for dialogs', () => {
    const addEventListenerFn = document.addEventListener;
    const removeEventListenerFn = document.removeEventListener;
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    function MockComponent() {
      return (
        <Offcanvas isOpen>
          <OffcanvasBody>
            <Button className="focus">focusable element</Button>
          </OffcanvasBody>
        </Offcanvas>
      );
    }
    const wrapper = mount(<MockComponent />);
    const offcanvas_instance = wrapper.find(Offcanvas).instance();

    expect(document.addEventListener.mock.calls.length).toBe(1);
    expect(document.addEventListener.mock.calls[0]).toEqual([
      'focus',
      offcanvas_instance.trapFocus,
      true,
    ]);

    wrapper.unmount();

    expect(document.removeEventListener.mock.calls.length).toBe(1);
    expect(document.removeEventListener.mock.calls[0]).toEqual([
      'focus',
      offcanvas_instance.trapFocus,
      true,
    ]);

    // restore global document mock
    document.addEventListener = addEventListenerFn;
    document.removeEventListener = removeEventListenerFn;
  });

  it('should trap focus inside the open dialog', () => {
    function MockComponent() {
      return (
        <>
          <Button className="first">Focused</Button>
          <Offcanvas isOpen trapFocus>
            <OffcanvasBody>
              Something else to see
              <Button className="focus">focusable element</Button>
            </OffcanvasBody>
          </Offcanvas>
        </>
      );
    }
    const wrapper = mount(<MockComponent />);
    const button = wrapper.find('.first').hostNodes().getDOMNode();
    const offcanvas_instance = wrapper.find(Offcanvas).instance();
    const ev_mock = {
      target: button,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };
    button.focus();
    offcanvas_instance.trapFocus(ev_mock);
    jest.runAllTimers();

    expect(document.activeElement).not.toBe(button);
    expect(ev_mock.preventDefault.mock.calls.length).toBe(1);
    expect(ev_mock.stopPropagation.mock.calls.length).toBe(1);
    wrapper.unmount();
  });
});
