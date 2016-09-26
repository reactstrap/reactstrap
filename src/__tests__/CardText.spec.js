import React from 'react';
import { shallow } from 'enzyme';
import { CardText } from '../';

describe('CardText', () => {
  it('should render with "card-text" class', () => {
    const wrapper = shallow(<CardText>Yo!</CardText>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-text')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardText className="other">Yo!</CardText>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-text')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardText tag="span">Yo!</CardText>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-text')).toBe(true);
    expect(wrapper.find('span').length).toBe(1);
  });
});
