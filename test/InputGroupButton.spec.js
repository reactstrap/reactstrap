import React from 'react';
import { shallow } from 'enzyme';
import { InputGroupButton, Button } from 'reactstrap';

describe('InputGroupButton', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render with "input-group-btn" class', () => {
    const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

    expect(wrapper.hasClass('input-group-btn')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<InputGroupButton tag="main">Yo!</InputGroupButton>);

    expect(wrapper.type()).toBe('main');
  });

  describe('Standard usage', () => {
    it('should render children provided', () => {
      const wrapper = shallow(<InputGroupButton><span>Yo!</span></InputGroupButton>);

      expect(wrapper.childAt(0).type()).toBe('span');
    });

    it('should render additional classes', () => {
      const wrapper = shallow(<InputGroupButton className="other"><span>Yo!</span></InputGroupButton>);

      expect(wrapper.hasClass('other')).toBe(true);
      expect(wrapper.hasClass('input-group-btn')).toBe(true);
    });
  });

  describe('Shorthand usage', () => {
    it('should render a child Button', () => {
      const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).type()).toBe(Button);
    });

    it('should render the string provided in the child Button', () => {
      const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).prop('children')).toBe('Yo!');
    });

    it('should render additional props on the child Button', () => {
      const wrapper = shallow(<InputGroupButton color="rad">Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).prop('color')).toBe('rad');
    });

    it('should render additional classes on the child Button', () => {
      const wrapper = shallow(<InputGroupButton className="yo">Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).hasClass('yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-btn wrapper', () => {
      const wrapper = shallow(<InputGroupButton groupClassName="other">Yo!</InputGroupButton>);

      expect(wrapper.hasClass('other')).toBe(true);
      expect(wrapper.hasClass('input-group-btn')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-btn wrapper', () => {
      const wrapper = shallow(<InputGroupButton groupAttributes={{ style: { textAlign: 'left' } }}>Yo!</InputGroupButton>);

      expect(wrapper.prop('style').textAlign).toBe('left');
    });
  });
});
