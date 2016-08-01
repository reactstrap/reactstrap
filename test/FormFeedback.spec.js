import React from 'react';
import { shallow } from 'enzyme';
import { FormFeedback } from 'reactstrap';

describe('FormFeedback', () => {
  it('should render with "form" tag by default', () => {
    const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render children', () => {
    const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "form-control-feedback" class', () => {
    const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);

    expect(wrapper.hasClass('form-control-feedback')).toBe(true);
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
