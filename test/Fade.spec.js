/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Fade } from '../lib';

describe('Fade', () => {
  it('should render with "fade" class', () => {
    const wrapper = shallow(<Fade>Yo!</Fade>);

    expect(wrapper.hasClass('fade')).toBe(true);
    expect(wrapper.hasClass('in')).toBe(false);
    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Fade className="other">Yo!</Fade>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('fade')).toBe(true);
    expect(wrapper.hasClass('in')).toBe(false);
  });

  it('should toggle "in" class with fadeIn & fadeOut', () => {
    const wrapper = mount(<Fade>Yo!</Fade>);
    const instance = wrapper.instance();

    expect(wrapper.hasClass('in')).toBe(false);

    instance.fadeIn();
    // hasClass does not pick up updates
    // maybe related https://github.com/airbnb/enzyme/issues/134
    expect(ReactDOM.findDOMNode(instance).className).toBe('fade in');

    instance.fadeOut();

    expect(ReactDOM.findDOMNode(instance).className).toBe('fade');
  });

  it('should call fadeIn & fadeOut with delayed callbacks', () => {
    jasmine.clock().install();

    const fadeInCallback = jasmine.createSpy('spy');
    const fadeOutCallback = jasmine.createSpy('spy');
    const wrapper = mount(<Fade>Yo!</Fade>);
    const instance = wrapper.instance();

    expect(wrapper.hasClass('in')).toBe(false);

    instance.fadeIn(fadeInCallback, 250);
    expect(fadeInCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(250);
    expect(fadeInCallback).toHaveBeenCalled();

    instance.fadeOut(fadeOutCallback, 250);
    expect(fadeOutCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(250);
    expect(fadeOutCallback).toHaveBeenCalled();

    jasmine.clock().uninstall();
  });
});
