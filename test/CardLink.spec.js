import React from 'react';
import { shallow } from 'enzyme';
import { CardLink } from 'reactstrap';

describe('CardLink', () => {
  it('should render with "card-link" class', () => {
    const wrapper = shallow(<CardLink>Yo!</CardLink>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-link')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardLink className="other">Yo!</CardLink>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-link')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardLink tag="button">Yo!</CardLink>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-link')).toBe(true);
    expect(wrapper.find('button').length).toBe(1);
  });
});
