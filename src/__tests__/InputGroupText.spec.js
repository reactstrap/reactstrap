import React from 'react';
import { shallow, mount } from 'enzyme';
import { InputGroupText } from '../';

describe('InputGroupText', () => {
  it('should render with "input-group-text" class', () => {
    const wrapper = shallow(<InputGroupText>Yo!</InputGroupText>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('input-group-text')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<InputGroupText className="other">Yo!</InputGroupText>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('input-group-text')).toBe(true);
  });

  it('should render with "span" tag by default', () => {
    const wrapper = shallow(<InputGroupText>Yo!</InputGroupText>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('input-group-text')).toBe(true);
    expect(wrapper.find('span').length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<InputGroupText tag="p">Yo!</InputGroupText>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('input-group-text')).toBe(true);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><InputGroupText ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});
