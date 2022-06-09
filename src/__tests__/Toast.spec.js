import React from 'react';
import { shallow, mount } from 'enzyme';
import { Toast } from '..';

describe('Toast', () => {
  it('should render children', () => {
    const toast = mount(<Toast>Yo!</Toast>);
    expect(toast.text()).toBe('Yo!');
  });

  it('should pass className down', () => {
    const toast = mount(<Toast className="test-class-name">Yo!</Toast>);
    expect(toast.find('.toast').hostNodes().prop('className')).toContain('test-class-name');
  });

  it('should pass other props down', () => {
    const toast = mount(<Toast data-testprop="testvalue">Yo!</Toast>);
    expect(toast.find('.toast').hostNodes().prop('data-testprop')).toContain('testvalue');
  });

  it('should have default transitionTimeouts', () => {
    const toast = mount(<Toast>Yo!</Toast>);

    const transition = toast.find('Transition');
    expect(transition.prop('timeout')).toEqual(150);
    expect(transition.prop('appear')).toBe(true);
    expect(transition.prop('enter')).toBe(true);
    expect(transition.prop('exit')).toBe(true);
  });

  it('should have support configurable transitionTimeouts', () => {
    const toast = mount(
      <Toast transition={{
        timeout: 0, appear: false, enter: false, exit: false
      }}
      >
        Yo!
      </Toast>
    );

    const transition = toast.find('Transition');
    expect(transition.prop('timeout')).toEqual(0);
    expect(transition.prop('appear')).toBe(false);
    expect(transition.prop('enter')).toBe(false);
    expect(transition.prop('exit')).toBe(false);
  });

  it('should use a div tag by default', () => {
    const toast = mount(<Toast>Yo!</Toast>);
    expect(toast.find('div').hostNodes().length).toBe(1);
  });

  it('should support custom tag', () => {
    const toast = mount(<Toast tag="p">Yo!</Toast>);
    expect(toast.find('p').hostNodes().length).toBe(1);
  });

  it('should be empty if not isOpen', () => {
    const toast = shallow(<Toast isOpen={false}>Yo!</Toast>);
    expect(toast.html()).toBe('');
  });
});
