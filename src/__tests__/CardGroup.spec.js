import React from 'react';
import { shallow, mount } from 'enzyme';
import { CardGroup } from '../';

describe('CardGroup', () => {
  it('should render with "card-group" class', () => {
    const wrapper = shallow(<CardGroup>Yo!</CardGroup>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-group')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardGroup className="other">Yo!</CardGroup>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardGroup tag="main">Yo!</CardGroup>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-group')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><CardGroup ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});
