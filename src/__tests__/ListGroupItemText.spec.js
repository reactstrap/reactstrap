import React from 'react';
import { shallow, mount } from 'enzyme';
import { ListGroupItemText } from '../';

describe('ListGroupItem', () => {
  it('should render children', () => {
    const listGroupItem = shallow(<ListGroupItemText>Yo!</ListGroupItemText>).find('p');
    expect(listGroupItem.text()).toBe('Yo!');
  });

  it('should render with "list-group-item-text" class', () => {
    const wrapper = shallow(<ListGroupItemText>Yo!</ListGroupItemText>);
    expect(wrapper.hasClass('list-group-item-text')).toBe(true);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    mount(<><ListGroupItemText ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
