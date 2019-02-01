import React from 'react';
import { shallow, mount } from 'enzyme';
import { InputGroupButtonDropdown, Dropdown } from '../';

describe('InputGroupButtonDropdown', () => {
  it('should render Dropdown', () => {
    const wrapper = shallow(<InputGroupButtonDropdown>Yo!</InputGroupButtonDropdown>);

    expect(wrapper.type()).toBe(Dropdown);
  });

  it('should forward the ref to the Dropdown component', () => {
    const ref = React.createRef();
    const wrapper = mount(<><InputGroupButtonDropdown ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(Dropdown);
    wrapper.unmount();
  });
});
