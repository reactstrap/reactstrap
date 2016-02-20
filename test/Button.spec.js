/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from '../lib';

describe('Button', () => {
  it('should render children', () => {
    const wrapper = shallow(<Button>Ello world</Button>);

    expect(wrapper.text()).toBe('Ello world');
  });

  it('should render custom element', () => {
    const Link = (props) => <a href="/home" {...props}>{props.children}</a>;
    const wrapper = mount(<Button El={Link}>Home</Button>);

    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.text()).toBe('Home');
  });

  it('should render buttons with default color', () => {
    const wrapper = shallow(<Button>Default Button</Button>);

    expect(wrapper.hasClass('btn-primary')).toBe(true);
  });

  it('should render buttons with other colors', () => {
    const wrapper = shallow(<Button color="danger">Default Button</Button>);

    expect(wrapper.hasClass('btn-danger')).toBe(true);
  });

  it('should render buttons at different sizes', () => {
    const small = shallow(<Button size="sm">Small Button</Button>);
    const large = shallow(<Button size="lg">Large Button</Button>);

    expect(small.hasClass('btn-sm')).toBe(true);
    expect(large.hasClass('btn-lg')).toBe(true);
  });

  describe('onClick', () => {
    it('is called when passed as property', () => {
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<Button onClick={onClick}>Testing Click</Button>);

      wrapper.find('button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    });

    it('is not called when disabled', () => {
      const e = jasmine.createSpyObj('e', ['preventDefault']);
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<Button onClick={onClick} disabled>Testing Click</Button>);

      wrapper.instance().onClick(e);
      expect(onClick).not.toHaveBeenCalled();
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });
});
