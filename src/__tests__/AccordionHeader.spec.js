import React from 'react';
import { shallow } from 'enzyme';
import { AccordionHeader } from '../';

describe('AccordionHeader', () => {
  it('should render with "accordion-header" class', () => {
    const wrapper = shallow(<AccordionHeader />);

    expect(wrapper.hasClass('accordion-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<AccordionHeader className="other" />);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('accordion-header')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<AccordionHeader tag="div" />);

    expect(wrapper.hasClass('accordion-header')).toBe(true);
    expect(wrapper.find('div').length).toBe(1);
  });
});
