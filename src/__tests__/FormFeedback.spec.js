import React from 'react';
import { shallow } from 'enzyme';
import { FormFeedback } from '..';

describe('FormFeedback', () => {
  it('should render with "form" tag by default', () => {
    const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render children', () => {
    const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "invalid-feedback" class', () => {
    const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);
    expect(wrapper.hasClass('invalid-feedback')).toBe(true);
  });

  it('should render with "valid-feedback" class', () => {
    const wrapper = shallow(<FormFeedback valid>Yo!</FormFeedback>);

    expect(wrapper.hasClass('valid-feedback')).toBe(true);
  });

  it('should render with "valid-tooltip" class', () => {
    const wrapper = shallow(
      <FormFeedback valid tooltip>
        Yo!
      </FormFeedback>,
    );

    expect(wrapper.hasClass('valid-tooltip')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<FormFeedback className="other">Yo!</FormFeedback>);

    expect(wrapper.hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<FormFeedback tag="main">Yo!</FormFeedback>);

    expect(wrapper.type()).toBe('main');
  });
});
