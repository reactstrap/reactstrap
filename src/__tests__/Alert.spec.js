import React from 'react';
import { shallow } from 'enzyme';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Alert from '../Alert';

describe('Alert', () => {
  it('should render children', () => {
    const alert = shallow(<Alert>Yo!</Alert>).find('div');
    expect(alert.text()).toBe('Yo!');
  });

  it('should have "success" as default color', () => {
    const alert = shallow(<Alert>Yo!</Alert>).find('div');
    expect(alert.hasClass('alert-success')).toBe(true);
  });

  it('should accept color prop', () => {
    const alert = shallow(<Alert color="warning">Yo!</Alert>).find('div');
    expect(alert.hasClass('alert-warning')).toBe(true);
  });

  it('should use a div tag by default', () => {
    const alert = shallow(<Alert>Yo!</Alert>).children().first();
    expect(alert.type()).toBe('div');
  });

  it('should be non dismissible by default', () => {
    const alert = shallow(<Alert>Yo!</Alert>).find('div');
    expect(alert.find('button').length).toEqual(0);
    expect(alert.hasClass('alert-dismissible')).toBe(false);
  });

  it('should show dismiss button if passed toggle', () => {
    const alert = shallow(<Alert color="danger" toggle={() => {}}>Yo!</Alert>).find('div');
    expect(alert.find('button').length).toEqual(1);
    expect(alert.hasClass('alert-dismissible')).toBe(true);
  });

  it('should support custom tag', () => {
    const alert = shallow(<Alert tag="p">Yo!</Alert>).children().first();
    expect(alert.type()).toBe('p');
  });

  it('should be empty if not isOpen', () => {
    const alert = shallow(<Alert isOpen={false}>Yo!</Alert>);
    expect(alert.html()).toBe('');
  });

  it('should be dismissible', () => {
    const onClick = jasmine.createSpy('onClick');
    const alert = shallow(<Alert color="danger" toggle={onClick}>Yo!</Alert>);

    alert.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
