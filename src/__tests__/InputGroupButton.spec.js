import React from 'react';
import { shallow } from 'enzyme';
import { InputGroupButton, Button, InputGroupAddon } from '../';

describe('InputGroupButton', () => {
  it('should render InputGroupAddon', () => {
    const wrapper = shallow(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

    expect(wrapper.type()).toBe(InputGroupAddon);
  });

  describe('Standard usage', () => {
    it('should render children provided', () => {
      const wrapper = shallow(<InputGroupButton addonType="append"><span>Yo!</span></InputGroupButton>);

      expect(wrapper.childAt(0).type()).toBe('span');
    });
  });

  describe('Shorthand usage', () => {
    it('should render a child Button', () => {
      const wrapper = shallow(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).type()).toBe(Button);
    });

    it('should render the string provided in the child Button', () => {
      const wrapper = shallow(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).prop('children')).toBe('Yo!');
    });

    it('should render additional props on the child Button', () => {
      const wrapper = shallow(<InputGroupButton addonType="append" color="rad">Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).prop('color')).toBe('rad');
    });

    it('should render additional classes on the child Button', () => {
      const wrapper = shallow(<InputGroupButton addonType="append" className="yo">Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).hasClass('yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-btn wrapper', () => {
      const wrapper = shallow(<InputGroupButton addonType="append" groupClassName="other">Yo!</InputGroupButton>);

      expect(wrapper.hasClass('other')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-btn wrapper', () => {
      const wrapper = shallow(<InputGroupButton addonType="append" groupAttributes={{ style: { textAlign: 'left' } }}>Yo!</InputGroupButton>);

      expect(wrapper.prop('style').textAlign).toBe('left');
    });
  });
});
