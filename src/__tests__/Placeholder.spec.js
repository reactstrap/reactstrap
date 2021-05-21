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

  it('should render different widths for different breakpoints', () => {
    const wrapper = shallow(<Placeholder size="lg" xs={12} lg={8}/>);
    expect(wrapper.hasClass('col-lg-8')).toBe(true)
    expect(wrapper.hasClass('col-12')).toBe(true)
  })

  it('should allow custom columns to be defined', () => {
    const wrapper = shallow(<Placeholder widths={['base', 'jumbo']} base="4" jumbo="6" />);
    expect(wrapper.hasClass('col-4')).toBe(true);
    expect(wrapper.hasClass('col-jumbo-6')).toBe(true);
  });


  it('should allow custom columns to be defined with objects', () => {
    const wrapper = shallow(<Placeholder widths={['base', 'jumbo', 'custom']} custom={{ size: 1, order: 2, offset: 4 }} />);

    expect(wrapper.hasClass('col-custom-1')).toBe(true);
    expect(wrapper.hasClass('order-custom-2')).toBe(true);
    expect(wrapper.hasClass('offset-custom-4')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });
})
