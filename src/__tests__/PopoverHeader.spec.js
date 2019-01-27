import React from 'react';
import { shallow, mount } from 'enzyme';
import { PopoverHeader } from '../';

describe('PopoverHeader', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverHeader>Ello world</PopoverHeader>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('popover-header')).toBe(true);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    mount(<><PopoverHeader ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
