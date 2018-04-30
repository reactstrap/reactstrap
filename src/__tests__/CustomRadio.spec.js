import React from 'react';
import { mount } from 'enzyme';
import { CustomRadio } from '../';

describe('CustomRadio', () => {
  it('should render an optional description', () => {
    const radio = mount(<CustomRadio description="Yo!" />);
    expect(radio.find('label').text()).toBe('Yo!');
  });

  it('should render children in the outer div', () => {
    const radio = mount(<CustomRadio><h1>Yo!</h1></CustomRadio>);
    expect(radio.find('h1').parent().type()).toBe('div');
  });

  it('should pass id to both the input and label nodes', () => {
    const radio = mount(<CustomRadio id="yo" />);
    expect(radio.find('input').prop('id')).toBe('yo');
    expect(radio.find('label').prop('htmlFor')).toBe('yo');
  });

  it('should pass classNames to the outer div', () => {
    const radio = mount(<CustomRadio className="yo" />);
    expect(radio.find('.custom-control').prop('className')).toBe(
      'yo custom-control custom-radio');
  });

  it('should pass all other props to the input node', () => {
    const radio = mount(<CustomRadio data-testprop="yo" />);
    expect(radio.find('input').prop('data-testprop')).toBe('yo');
  });
});
