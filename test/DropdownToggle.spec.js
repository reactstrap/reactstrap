/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { DropdownToggle, Button } from 'reactstrap';;

describe('DropdownToggle', () => {
  it('should wrap text', () => {
    const wrapper = mount(<DropdownToggle>Ello world</DropdownToggle>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('[data-toggle="dropdown"]').length).toBe(1);
  });

  it('should render elements', () => {
    const wrapper = mount(<DropdownToggle><Button>Click Me</Button></DropdownToggle>);

    expect(wrapper.text()).toBe('Click Me');
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render a caret', () => {
    const wrapper = mount(<DropdownToggle caret>Ello world</DropdownToggle>);

    expect(wrapper.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle')).toBe(true);
  });

  describe('onClick', () => {
    it('should call props.onClick if it exists', () => {
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<DropdownToggle onClick={onClick.bind(this)}>Ello world</DropdownToggle>);
      const instance = wrapper.instance();

      instance.onClick({});
      expect(onClick).toHaveBeenCalled();
    });

    it('should call props.toggle when present ', () => {
      let props = jasmine.createSpyObj('props', ['toggle']);
      const wrapper = mount(<DropdownToggle toggle={props.toggle}>Ello world</DropdownToggle>);
      const instance = wrapper.instance();

      instance.onClick({ preventDefault: () => { } });
      expect(props.toggle).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('should preventDefault when disabled', () => {
      const e = { preventDefault: jasmine.createSpy('preventDefault') };
      const wrapper = mount(<DropdownToggle disabled>Ello world</DropdownToggle>);
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });
});
