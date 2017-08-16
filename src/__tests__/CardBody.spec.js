import React from 'react';
import { shallow } from 'enzyme';
import { CardBody } from '../';

describe('CardBody', () => {
  it('should render with "card-body" class', () => {
    const wrapper = shallow(<CardBody>Yo!</CardBody>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardBody className="other">Yo!</CardBody>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardBody tag="main">Yo!</CardBody>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-body')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});
