import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AlertWrapper, { Alert } from '../Alert';

describe('Alert', () => {
  it('should render children', () => {
    const alert = shallow(<Alert>Yo!</Alert>);
    expect(alert.text()).toBe('Yo!');
  });

  it('should have "warning" as default color', () => {
    const alert = shallow(<Alert>Yo!</Alert>);
    expect(alert.hasClass('alert-warning')).toBe(true);
  });

  it('should accept color prop', () => {
    const alert = shallow(<Alert color="success">Yo!</Alert>);
    expect(alert.hasClass('alert-success')).toBe(true);
  });

  it('should use a div tag by default', () => {
    const alert = shallow(<Alert>Yo!</Alert>);
    expect(alert.type()).toBe('div');
  });

  it('should be non dismissible by default', () => {
    const alert = shallow(<Alert>Yo!</Alert>);
    expect(alert.find('button').length).toEqual(0);
    expect(alert.hasClass('alert-dismissible')).toBe(false);
  });

  it('should show dismiss button if passed onDismiss', () => {
    const alert = shallow(<Alert color="danger" onDismiss={() => {}}>Yo!</Alert>);
    expect(alert.find('button').length).toEqual(1);
    expect(alert.hasClass('alert-dismissible')).toBe(true);
  });

  it('should support custom tag', () => {
    const alert = shallow(<Alert tag="p">Yo!</Alert>);
    expect(alert.type()).toBe('p');
  });

  it('should not pass onDismiss when not dismissible', () => {
    const alertWrapper = shallow(<AlertWrapper color="warning">Yo!</AlertWrapper>);
    expect(alertWrapper.prop('onDismiss')).toBeFalsy();
    expect(alertWrapper.find(ReactCSSTransitionGroup).length).toEqual(0);
  });

  it('should be dismissible', () => {
    jasmine.clock().install();

    const alertWrapper = mount(<AlertWrapper dismissible color="info">Yo!</AlertWrapper>);
    expect(alertWrapper.find(ReactCSSTransitionGroup).length).toEqual(1);
    expect(alertWrapper.state('visible')).toBe(true);

    alertWrapper.find('button').simulate('click');
    expect(alertWrapper.state('visible')).toBe(false);

    jasmine.clock().tick(300);
    expect(alertWrapper.text()).toBe('');

    jasmine.clock().uninstall();
  });
});
