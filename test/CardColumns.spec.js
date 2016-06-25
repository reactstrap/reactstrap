import React from 'react';
import { shallow } from 'enzyme';
import { CardColumns } from 'reactstrap';

describe('CardColumns', () => {
  it('should render with "card-columns" class', () => {
    const wrapper = shallow(<CardColumns>Yo!</CardColumns>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-columns')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardColumns className="other">Yo!</CardColumns>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-columns')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardColumns tag="main">Yo!</CardColumns>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-columns')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});
