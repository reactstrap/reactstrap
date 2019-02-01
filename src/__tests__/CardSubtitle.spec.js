import React from 'react';
import { shallow, mount } from 'enzyme';
import { CardSubtitle } from '../';

describe('CardSubtitle', () => {
  it('should render with "card-subtitle" class', () => {
    const wrapper = shallow(<CardSubtitle>Yo!</CardSubtitle>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-subtitle')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardSubtitle className="other">Yo!</CardSubtitle>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-subtitle')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardSubtitle tag="h3">Yo!</CardSubtitle>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-subtitle')).toBe(true);
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('should render a "div" tag by default', () => {
    const wrapper = shallow(<CardSubtitle>Yo!</CardSubtitle>);

    expect(wrapper.find('div').length).toBe(1);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><CardSubtitle ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});
