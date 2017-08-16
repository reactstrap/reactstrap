import React from 'react';
import { shallow } from 'enzyme';
import { CardBlock, CardBody } from '../';

describe('CardBody', () => {
  it('should render CardBody', () => {
    const wrapper = shallow(<CardBlock>Yo!</CardBlock>);

    expect(wrapper.type()).toBe(CardBody);
  });
});
