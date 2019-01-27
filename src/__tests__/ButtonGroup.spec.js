import React from 'react';
import { shallow, mount } from 'enzyme';
import { ButtonGroup } from '../';

describe('ButtonGroup', () => {
  it('should render children', () => {
    const wrapper = shallow(<ButtonGroup>Ello world</ButtonGroup>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('btn-group')).toBe(true);
  });

  it('should render different size classes', () => {
    const small = shallow(<ButtonGroup size="sm">Small Button</ButtonGroup>);
    const large = shallow(<ButtonGroup size="lg">Large Button</ButtonGroup>);

    expect(small.hasClass('btn-group-sm')).toBe(true);
    expect(large.hasClass('btn-group-lg')).toBe(true);
  });

  it('should render vertical class', () => {
    const wrapper = shallow(<ButtonGroup vertical>Vertical Group</ButtonGroup>);

    expect(wrapper.hasClass('btn-group-vertical')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ButtonGroup tag="main">Yo!</ButtonGroup>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('btn-group')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    mount(<><ButtonGroup ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
