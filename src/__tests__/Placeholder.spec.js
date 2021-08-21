import React from 'react';
import { shallow } from 'enzyme'
import { Placeholder } from '../';

describe('Placeholder', () => {
  it('should render with "placeholder" class', () => {
    const wrapper = shallow(<Placeholder></Placeholder>)
    expect(wrapper.hasClass('placeholder')).toBe(true);
  })

  it('should render column size', () => {
    const wrapper = shallow(<Placeholder xs={7} />);
    expect(wrapper.hasClass('col-7')).toBe(true);
  })

  it('should render animation', () => {
    const wrapper = shallow(<Placeholder tag="p" animation="glow" />);
    expect(wrapper.hasClass('placeholder-glow')).toBe(true);
  })

  it('should render color', () => {
    const wrapper = shallow(<Placeholder xs={12} color="primary" />);
    expect(wrapper.hasClass('bg-primary')).toBe(true);
  })

  it('should render size', () => {
    const wrapper = shallow(<Placeholder size="lg" xs={12} />);
    expect(wrapper.hasClass('placeholder-lg')).toBe(true);
  })
})
