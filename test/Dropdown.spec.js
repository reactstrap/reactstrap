/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, TetherContent } from 'reactstrap';


describe('Dropdown', () => {
  let isOpen;
  let toggle;
  let element;

  beforeEach(() => {
    isOpen = false;
    toggle = () => isOpen = !isOpen;
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
    element = null;
  });

  it('should render a single child', () => {
    const wrapper = mount(<Dropdown isOpen={isOpen} toggle={toggle}>Ello world</Dropdown>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('.dropdown').length).toBe(1);
  });

  it('should render multiple children when isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    expect(wrapper.find('.btn').text()).toBe('Toggle');
    expect(wrapper.find('.dropdown').length).toBe(1);
    expect(wrapper.find('.dropdown-item').length).toBe(1);
    expect(wrapper.children().length).toBe(2);
  });

  it('should not call props.toggle when disabled ', () => {
    isOpen = true;
    let props = jasmine.createSpyObj('props', ['toggle']);
    const wrapper = mount(
      <Dropdown isOpen={isOpen} toggle={props.toggle} disabled>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    const instance = wrapper.instance();

    instance.toggle({ preventDefault: () => { } });
    expect(props.toggle).not.toHaveBeenCalled();
  });

  describe('handleProps', () => {
    it('should be called on componentDidUpdate when isOpen changed', () => {
      spyOn(Dropdown.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(Dropdown.prototype, 'handleProps').and.callThrough();
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      const instance = wrapper.instance();

      expect(Dropdown.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(Dropdown.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);

      isOpen = true;
      wrapper.setProps({ isOpen: isOpen });

      expect(Dropdown.prototype.componentDidUpdate.calls.count()).toBe(1);
      expect(Dropdown.prototype.handleProps.calls.count()).toBe(2);
      expect(instance.props.isOpen).toBe(true);
    });

    it('should not be called on componentDidUpdate when isOpen did not change', () => {
      spyOn(Dropdown.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(Dropdown.prototype, 'handleProps').and.callThrough();
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
      const instance = wrapper.instance();

      expect(Dropdown.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(Dropdown.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);

      wrapper.setProps({ 'data-foo': 'bar' });

      expect(Dropdown.prototype.componentDidUpdate.calls.count()).toBe(1);
      expect(Dropdown.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);
    });
  });

  describe('removeEvents', () => {
    it('should be called on componentWillUnmount', () => {
      spyOn(Dropdown.prototype, 'componentWillUnmount').and.callThrough();
      spyOn(Dropdown.prototype, 'removeEvents').and.callThrough();
      isOpen = true;
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle} tether>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(Dropdown.prototype.componentWillUnmount.calls.count()).toBe(0);
      expect(Dropdown.prototype.removeEvents.calls.count()).toBe(0);

      wrapper.unmount();

      expect(Dropdown.prototype.componentWillUnmount.calls.count()).toBe(1);
      expect(Dropdown.prototype.removeEvents.calls.count()).toBe(1);
    });
  });

  describe('getTetherConfig', () => {
    it('should be called when tether is enabled', () => {
      isOpen = true;
      spyOn(Dropdown.prototype, 'getTetherConfig').and.callThrough();
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle} tether>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(Dropdown.prototype.getTetherConfig).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should apply dropup tether values', () => {
      isOpen = true;
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle} tether dropup>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.find(TetherContent).props().tether.attachment).toBe('bottom right');
      expect(wrapper.find(TetherContent).props().tether.targetAttachment).toBe('top right');
      wrapper.unmount();
    });
  });

  describe('handleDocumentClick', () => {
    it('should call toggle on document click', () => {
      isOpen = true;
      spyOn(Dropdown.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(Dropdown.prototype, 'toggle').and.callThrough();

      mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(Dropdown.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(Dropdown.prototype.toggle.calls.count()).toBe(0);

      document.body.click();

      expect(Dropdown.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(Dropdown.prototype.toggle.calls.count()).toBe(1);
    });

    it('should call toggle on container click', () => {
      isOpen = true;
      spyOn(Dropdown.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(Dropdown.prototype, 'toggle').and.callThrough();

      const wrapper = mount(
        <Dropdown id="test" isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(Dropdown.prototype.toggle.calls.count()).toBe(0);

      document.getElementById('test').click();

      expect(Dropdown.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(Dropdown.prototype.toggle.calls.count()).toBe(1);

      wrapper.detach();
    });

    it('should not call toggle on inner container click', () => {
      isOpen = true;
      spyOn(Dropdown.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(Dropdown.prototype, 'toggle').and.callThrough();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(Dropdown.prototype.toggle.calls.count()).toBe(0);

      document.getElementById('divider').click();

      expect(Dropdown.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(Dropdown.prototype.toggle.calls.count()).toBe(0);

      wrapper.detach();
    });
  });

  it('should render different size classes', () => {
    const small = mount(
      <Dropdown group isOpen={isOpen} size="sm" toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    const large = mount(
      <Dropdown group isOpen={isOpen} size="lg" toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    expect(small.find('.btn-group-sm').length).toBe(1);
    expect(large.find('.btn-group-lg').length).toBe(1);
  });
});
