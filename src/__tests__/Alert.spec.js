import React from 'react';
import { shallow, mount } from 'enzyme';
import { Alert } from '../';

describe('Alert', () => {
  it('should render children', () => {
    const alert = shallow(<Alert>Yo!</Alert>).find('div');
    expect(alert.text()).toBe('Yo!');
  });

  it('should transition on appear, enter, and leave using fade', () => {
    const alert = mount(<Alert>Yo!</Alert>);
    expect(alert.find('CSSTransition').prop('classNames')).toEqual({
      appear: 'fade',
      appearActive: 'show',
      enter: 'fade',
      enterActive: 'show',
      exit: 'fade',
      exitActive: 'out'
    });
  });

  it('should have default transitionTimeouts', () => {
    const alert = mount(<Alert>Yo!</Alert>);

    const transition = alert.find('CSSTransition');
    expect(transition.prop('timeout')).toEqual({ enter: 150, exit: 150 });
    expect(transition.prop('appear')).toBe(true);
    expect(transition.prop('enter')).toBe(true);
    expect(transition.prop('exit')).toBe(true);
  });

  it('should have support configurable transitionTimeouts', () => {
    const alert = shallow(
      <Alert
        transitionAppear={false}
        transitionEnterTimeout={0}
        transitionExitTimeout={0}
      >
        Yo!
      </Alert>
    );

    const transition = alert.find('CSSTransition');
    expect(transition.prop('timeout')).toEqual({ enter: 0, exit: 0 });
    expect(transition.prop('appear')).toBe(false);
    expect(transition.prop('enter')).toBe(false);
    expect(transition.prop('exit')).toBe(false);
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
    const alert = shallow(<Alert>Yo!</Alert>).children().first().children()
      .first();
    expect(alert.type()).toBe('div');
  });

  it('should be non dismissible by default', () => {
    const alert = shallow(<Alert>Yo!</Alert>).find('div');
    expect(alert.find('button').length).toEqual(0);
    expect(alert.hasClass('alert-dismissible')).toBe(false);
  });

  it('should show dismiss button if passed toggle', () => {
    const alert = shallow(<Alert color="danger" toggle={() => { }}>Yo!</Alert>).find('div');
    expect(alert.find('button').length).toEqual(1);
    expect(alert.hasClass('alert-dismissible')).toBe(true);
  });

  it('should support custom tag', () => {
    const alert = shallow(<Alert tag="p">Yo!</Alert>).children().first().children()
      .first();
    expect(alert.type()).toBe('p');
  });

  it('should be empty if not isOpen', () => {
    const alert = shallow(<Alert isOpen={false}>Yo!</Alert>);
    expect(alert.html()).toBe('');
  });

  it('should be dismissible', () => {
    const onClick = jest.fn();
    const alert = shallow(<Alert color="danger" toggle={onClick}>Yo!</Alert>);

    alert.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should render close button with custom aria-label', () => {
    const alert = shallow(<Alert toggle={() => { }} closeAriaLabel="oseclay">Yo!</Alert>).find('div');
    const closeButton = alert.find('button').first();
    expect(closeButton.prop('aria-label')).toBe('oseclay');
  });
});
