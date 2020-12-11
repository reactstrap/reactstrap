import React from 'react';
import { shallow } from 'enzyme';
import { Accordion } from '../';

describe('Accordion', () => {
  it('should render with "accordion" class', () => {
    const wrapper = shallow(<Accordion />);

    expect(wrapper.hasClass('accordion')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Accordion className="other" />);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('accordion')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Accordion tag="main" />);

    expect(wrapper.hasClass('accordion')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});
