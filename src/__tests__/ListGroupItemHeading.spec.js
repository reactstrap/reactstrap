import React from 'react';
import { shallow, mount } from 'enzyme';
import { ListGroupItemHeading } from '../';

describe('ListGroupItem', () => {
  it('should render children', () => {
    const listGroupItem = shallow(<ListGroupItemHeading>Yo!</ListGroupItemHeading>).find('h5');
    expect(listGroupItem.text()).toBe('Yo!');
  });

  it('should render with "list-group-item-heading" class', () => {
    const wrapper = shallow(<ListGroupItemHeading>Yo!</ListGroupItemHeading>);
    expect(wrapper.hasClass('list-group-item-heading')).toBe(true);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><ListGroupItemHeading ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});
