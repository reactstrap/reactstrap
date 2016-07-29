import React from 'react';
import { shallow } from 'enzyme';
import { FormText } from 'reactstrap';

describe('FormText', () => {
  it('should render with "form" tag', () => {
    const wrapper = shallow(<FormText>Yo!</FormText>);

    expect(wrapper.type()).toBe('small');
  });

  it('should render children', () => {
    const wrapper = shallow(<FormText>Yo!</FormText>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "form-text" class when not inline', () => {
    const wrapper = shallow(<FormText>Yo!</FormText>);

    expect(wrapper.hasClass('form-text')).toBe(true);
  });

  it('should not render with "form-text" class when inline', () => {
    const wrapper = shallow(<FormText inline>Yo!</FormText>);

    expect(wrapper.hasClass('form-text')).toBe(false);
  });

  it('should render with "text-${color}" class when color is provided', () => {
    const wrapper = shallow(<FormText color="yoyo">Yo!</FormText>);

    expect(wrapper.hasClass('text-yoyo')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<FormText className="other">Yo!</FormText>);

    expect(wrapper.hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<FormText tag="main">Yo!</FormText>);
    
    expect(wrapper.type()).toBe('main');
  });
});
