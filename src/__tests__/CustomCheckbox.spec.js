import React from 'react';
import { mount } from 'enzyme';
import { CustomCheckbox } from '../';

describe('CustomCheckbox', () => {
  it('should render an optional description', () => {
    const checkbox = mount(<CustomCheckbox description="Yo!" />);
    expect(checkbox.find('label').text()).toBe('Yo!');
  });

  it('should render children in the outer div', () => {
    const checkbox = mount(<CustomCheckbox><h1>Yo!</h1></CustomCheckbox>);
    expect(checkbox.find('h1').parent().type()).toBe('div');
  });

  it('should pass id to both the input and label nodes', () => {
    const checkbox = mount(<CustomCheckbox id="yo" />);
    expect(checkbox.find('input').prop('id')).toBe('yo');
    expect(checkbox.find('label').prop('htmlFor')).toBe('yo');
  });

  it('should pass classNames to the outer div', () => {
    const checkbox = mount(<CustomCheckbox className="yo" />);
    expect(checkbox.find('.custom-control').prop('className')).toBe(
      'yo custom-control custom-checkbox');
  });

  it('should pass all other props to the input node', () => {
    const checkbox = mount(<CustomCheckbox data-testprop="yo" />);
    expect(checkbox.find('input').prop('data-testprop')).toBe('yo');
  });
});
