import React from 'react';
import { mount } from 'enzyme';
import { Modal, ModalBody } from '../';

describe('Modal', () => {
  let isOpen;
  let toggle;

  let isOpenNested;
  let toggleNested;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };

    isOpenNested = false;
    toggleNested = () => { isOpenNested = !isOpenNested; };

    jasmine.clock().install();
  });

  afterEach(() => {
    // fast forward time for modal to fade out
    jasmine.clock().tick(300);
    jasmine.clock().uninstall();
  });

  it('should render with the class "modal-dialog"', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the backdrop with the class "modal-backdrop" by default', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the backdrop with the class "modal-backdrop" when backdrop is "static"', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should not render with the backdrop with the class "modal-backdrop" when backdrop is "false"', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop={false}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  it('should render with class "modal-dialog" and have custom class name if provided', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} className="my-custom-modal">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with additional props if provided', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} style={{ maxWidth: '95%' }}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-dialog')[0].style.maxWidth).toBe('95%');
    wrapper.unmount();
  });

  it('should render without fade transition if provided with fade={false}', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} fade={false} modalClassName="fadeless-modal">
        Howdy!
      </Modal>
    );

    // Modal should appear instantaneously
    jasmine.clock().tick(1);
    expect(wrapper.children().length).toBe(0);

    const matchedModals = document.getElementsByClassName('fadeless-modal');
    const matchedModal = matchedModals[0];

    expect(matchedModals.length).toBe(1);
    // Modal should not have the 'fade' class
    expect(matchedModal.className.split(' ').indexOf('fade') < 0).toBe(true);

    wrapper.unmount();
  });

  it('should render when expected when passed modalTransitionTimeout and backdropTransitionTimeout props', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} modalTransitionTimeout={20} backdropTransitionTimeout={10} modalClassName="custom-timeout-modal">
        Hello, world!
      </Modal>
    );

    jasmine.clock().tick(20);
    expect(wrapper.children().length).toBe(0);

    const matchedModals = document.getElementsByClassName('custom-timeout-modal');

    expect(matchedModals.length).toBe(1);

    wrapper.unmount();
  });

  it('should render with class "modal" and have custom class name if provided with modalClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} modalClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with custom class name if provided with wrapClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} wrapClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-content" and have custom class name if provided with contentClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} contentClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal-content.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-backdrop" and have custom class name if provided with backdropClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} backdropClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal-backdrop.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the class "modal-${size}" when size is passed', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} size="crazy">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-crazy').length).toBe(1);
    wrapper.unmount();
  });


  it('should render modal when isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should render modal with default role of "dialog"', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal')[0].getAttribute('role')).toBe('dialog');
    wrapper.unmount();
  });

  it('should render modal with provided role', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} role="alert">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal')[0].getAttribute('role')).toBe('alert');
    wrapper.unmount();
  });

  it('should render modal with aria-labelledby provided labelledBy', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} labelledBy="myModalTitle">
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal')[0].getAttribute('aria-labelledby')).toBe('myModalTitle');
    wrapper.unmount();
  });

  it('should not render modal when isOpen is false', () => {
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  it('should toggle modal', () => {
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    jasmine.clock().tick(300);
    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should call onClosed & onOpened', () => {
    spyOn(Modal.prototype, 'onOpened').and.callThrough();
    spyOn(Modal.prototype, 'onClosed').and.callThrough();
    const onOpened = jasmine.createSpy('spy');
    const onClosed = jasmine.createSpy('spy');
    const wrapper = mount(
      <Modal isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(Modal.prototype.onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    expect(Modal.prototype.onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(onOpened).toHaveBeenCalled();
    expect(Modal.prototype.onOpened).toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    expect(Modal.prototype.onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(false);
    expect(onClosed).toHaveBeenCalled();
    expect(Modal.prototype.onClosed).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should call onClosed & onOpened when fade={false}', () => {
    spyOn(Modal.prototype, 'onOpened').and.callThrough();
    spyOn(Modal.prototype, 'onClosed').and.callThrough();
    const onOpened = jasmine.createSpy('spy');
    const onClosed = jasmine.createSpy('spy');
    const wrapper = mount(
      <Modal isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} toggle={toggle} fade={false}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(1);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(Modal.prototype.onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    expect(Modal.prototype.onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(1);

    expect(isOpen).toBe(true);
    expect(onOpened).toHaveBeenCalled();
    expect(Modal.prototype.onOpened).toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    expect(Modal.prototype.onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(1);

    expect(isOpen).toBe(false);
    expect(onClosed).toHaveBeenCalled();
    expect(Modal.prototype.onClosed).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should not call togglePortal when isOpen does not change', () => {
    spyOn(Modal.prototype, 'togglePortal').and.callThrough();
    spyOn(Modal.prototype, 'componentDidUpdate').and.callThrough();
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(Modal.prototype.togglePortal).not.toHaveBeenCalled();
    expect(Modal.prototype.componentDidUpdate).not.toHaveBeenCalled();

    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(false);
    expect(Modal.prototype.togglePortal).not.toHaveBeenCalled();
    expect(Modal.prototype.componentDidUpdate).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should renderIntoSubtree when props updated', () => {
    isOpen = true;
    spyOn(Modal.prototype, 'togglePortal').and.callThrough();
    spyOn(Modal.prototype, 'renderIntoSubtree').and.callThrough();
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(isOpen).toBe(true);
    expect(Modal.prototype.togglePortal.calls.count()).toEqual(1);
    expect(Modal.prototype.renderIntoSubtree.calls.count()).toEqual(1);

    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(Modal.prototype.togglePortal.calls.count()).toEqual(1);
    expect(Modal.prototype.renderIntoSubtree.calls.count()).toEqual(2);

    wrapper.unmount();
  });

  it('should close modal when escape key pressed', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );
    const instance = wrapper.instance();

    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    instance.handleEscape({ keyCode: 13 });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    instance.handleEscape({ keyCode: 27 });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(false);

    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(document.getElementsByClassName('modal').length).toBe(0);

    wrapper.unmount();
  });

  it('should not close modal when escape key pressed when keyboard is false', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} keyboard={false}>
        Yo!
      </Modal>
    );
    const instance = wrapper.instance();

    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    instance.handleEscape({ keyCode: 13 });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    instance.handleEscape({ keyCode: 27 });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);

    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(document.getElementsByClassName('modal').length).toBe(1);

    wrapper.unmount();
  });

  it('should close modal when clicking backdrop', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );

    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    //
    document.getElementById('clicker').click();
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);

    document.getElementsByClassName('modal')[0].click();
    jasmine.clock().tick(300);

    expect(isOpen).toBe(false);

    wrapper.unmount();
  });

  it('should not close modal when clicking backdrop and backdrop is "static"', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
        <button id="clicker">Does Nothing</button>
      </Modal>
    );

    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    document.getElementById('clicker').click();
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);

    document.getElementsByClassName('modal-backdrop')[0].click();
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);

    wrapper.unmount();
  });

  it('should destroy this._element', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );
    const instance = wrapper.instance();

    jasmine.clock().tick(300);
    expect(instance._element).toBeTruthy();

    instance.destroy();

    expect(instance._element).toBe(null);

    instance.destroy();
    wrapper.unmount();
  });

  it('should render nested modals', () => {
    isOpen = true;
    isOpenNested = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody>
          <Modal isOpen={isOpenNested} toggle={toggleNested}>
            Yo!
          </Modal>
        </ModalBody>
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(2);
    expect(document.body.className).toBe('modal-open modal-open');

    wrapper.unmount();
    expect(document.getElementsByClassName('modal-dialog').length).toBe(0);
    expect(document.body.className).toBe('');
  });

  it('should remove exactly modal-open class from body', () => {
    // set a body class which includes modal-open
    document.body.className = 'my-modal-opened';

    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    // assert that the modal is closed and the body class is what was set initially
    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(document.body.className).toBe('my-modal-opened');

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    // assert that the modal is open and the body class is what was set initially + modal-open
    jasmine.clock().tick(300);
    expect(isOpen).toBe(true);
    expect(document.body.className).toBe('my-modal-opened modal-open');

    // append another body class which includes modal-open
    // using this to test if replace will leave a space when removing modal-open
    document.body.className += ' modal-opened';
    expect(document.body.className).toBe('my-modal-opened modal-open modal-opened');

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    // assert that the modal is closed and the body class is what was set initially
    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(document.body.className).toBe('my-modal-opened modal-opened');

    wrapper.unmount();
  });

  it('should call onEnter & onExit props if provided', () => {
    const onEnter = jasmine.createSpy('spy');
    const onExit = jasmine.createSpy('spy');
    const wrapper = mount(
      <Modal isOpen={isOpen} onEnter={onEnter} onExit={onExit} toggle={toggle}>
        Yo!
      </Modal>
    );

    expect(isOpen).toBe(false);
    expect(onEnter).toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();

    onEnter.calls.reset();
    onExit.calls.reset();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(onEnter).not.toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();

    onEnter.calls.reset();
    onExit.calls.reset();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    wrapper.unmount();
    expect(onEnter).not.toHaveBeenCalled();
    expect(onExit).toHaveBeenCalled();
  });
});
