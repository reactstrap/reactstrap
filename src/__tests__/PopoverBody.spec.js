import React from 'react';
import { shallow, mount } from 'enzyme';
import { PopoverBody } from '../';

describe('PopoverBody', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverBody>Ello world</PopoverBody>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('popover-body')).toBe(true);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><PopoverBody ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});
