import React from 'react';
import { shallow, mount } from 'enzyme';
import { InputGroupAddon, InputGroupText } from '../';

describe('InputGroupAddon', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render children provided', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append"><button>Yo!</button></InputGroupAddon>);

    expect(wrapper.childAt(0).type()).toBe('button');
  });

  it('should render the string provided in the child InputGroupText', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(wrapper.childAt(0).type()).toBe(InputGroupText);
    expect(wrapper.childAt(0).prop('children')).toBe('Yo!');
  });

  it('should render with "input-group-*" classes', () => {
    const wrapperPrepend = shallow(<InputGroupAddon addonType="prepend">Yo!</InputGroupAddon>);
    const wrapperAppend = shallow(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(wrapperPrepend.hasClass('input-group-prepend')).toBe(true);
    expect(wrapperAppend.hasClass('input-group-append')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append" className="other">Yo!</InputGroupAddon>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('input-group-append')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append" tag="main">Yo!</InputGroupAddon>);

    expect(wrapper.type()).toBe('main');
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    mount(<><InputGroupAddon ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
