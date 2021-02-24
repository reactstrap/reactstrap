import React from 'react';
import { mount } from 'enzyme';
import { UncontrolledAccordion } from '../';

describe('Accordion', () => {
  it('should render with "accordion" class', () => {
    const wrapper = mount(<UncontrolledAccordion />);

    expect(wrapper.find('.accordion').length).toBe(1);
  });

  it('should render additional classes', () => {
    const wrapper = mount(<UncontrolledAccordion className="other" />);

    expect(wrapper.find('.accordion').hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<UncontrolledAccordion tag="main" />);

    expect(wrapper.find('main.accordion').length).toBe(1);
  });
});
