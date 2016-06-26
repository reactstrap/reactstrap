import React from 'react';
import { shallow } from 'enzyme';
import { CardImgOverlay } from 'reactstrap';

describe('CardImgOverlay', () => {
  it('should render with "card-img-overlay" class', () => {
    const wrapper = shallow(<CardImgOverlay>Yo!</CardImgOverlay>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-img-overlay')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardImgOverlay className="other">Yo!</CardImgOverlay>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-img-overlay')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardImgOverlay tag="main">Yo!</CardImgOverlay>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-img-overlay')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});
