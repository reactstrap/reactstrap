/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'reactstrap';

describe('Modal', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
    jasmine.clock().install();
  });

  afterEach(() => {
    // fast forward time for modal to fade out
    jasmine.clock().tick(300);
    jasmine.clock().uninstall();
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

  it('should call onExit & onEnter', () => {
    spyOn(Modal.prototype, 'onEnter').and.callThrough();
    spyOn(Modal.prototype, 'onExit').and.callThrough();
    const onEnter = jasmine.createSpy('spy');
    const onExit = jasmine.createSpy('spy');
    const wrapper = mount(
      <Modal isOpen={isOpen} onEnter={onEnter} onExit={onExit} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(onEnter).not.toHaveBeenCalled();
    expect(Modal.prototype.onEnter).not.toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();
    expect(Modal.prototype.onExit).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(onEnter).toHaveBeenCalled();
    expect(Modal.prototype.onEnter).toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();
    expect(Modal.prototype.onExit).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(false);
    expect(onExit).toHaveBeenCalled();
    expect(Modal.prototype.onExit).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should not call handleProps when isOpen does not change', () => {
    spyOn(Modal.prototype, 'handleProps').and.callThrough();
    spyOn(Modal.prototype, 'componentDidUpdate').and.callThrough();
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(Modal.prototype.handleProps).not.toHaveBeenCalled();
    expect(Modal.prototype.componentDidUpdate).not.toHaveBeenCalled();

    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(isOpen).toBe(false);
    expect(Modal.prototype.handleProps).not.toHaveBeenCalled();
    expect(Modal.prototype.componentDidUpdate).toHaveBeenCalled();

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

    instance.handleEscape({keyCode: 13});
    jasmine.clock().tick(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    instance.handleEscape({keyCode: 27});
    jasmine.clock().tick(300);

    expect(isOpen).toBe(false);

    wrapper.setProps({
      isOpen: isOpen
    });
    jasmine.clock().tick(300);

    expect(document.getElementsByClassName('modal').length).toBe(0);

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

    document.getElementsByClassName('modal-backdrop')[0].click();
    jasmine.clock().tick(300);

    expect(isOpen).toBe(false);

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
    expect(instance._element).toBeTruthy()

    instance.destroy();

    expect(instance._element).toBe(null)

    instance.destroy();
    wrapper.unmount();
  });
});
