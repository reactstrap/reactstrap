import React from 'react';
import { mount } from 'enzyme';
import TransitionGroup from 'react-addons-transition-group';
import { Fade } from '../';

class Helper extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showItem: props.showItem
    };
  }

  toggle() {
    this.setState({
      showItem: !this.state.showItem
    });
  }

  render() {
    return (
      <div>
        <div className="trigger" onClick={this.toggle}>Toggle</div>
        <TransitionGroup component="div">
          { this.state.showItem ? this.props.children : null }
        </TransitionGroup>
      </div>
    );
  }
}

describe('Fade', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should transition classes from "fade" to "fade show" on appear', () => {
    let isOpen = true;
    const wrapper = mount(
      <Helper showItem={isOpen} >
        <Fade key={Math.random()}>Yo!</Fade>
        <Fade transitionAppear={false} transitionEnter={false} transitionLeave={false} key={Math.random()}>Yo 2!</Fade>
      </Helper>
    );

    expect(wrapper.find('div.fade').length).toBe(2);
    expect(wrapper.find('div.fade.show').length).toBe(1);

    jasmine.clock().tick(300);

    expect(wrapper.find('div.fade.show').length).toBe(2);

    wrapper.find('.trigger').simulate('click');
    expect(wrapper.find('div.fade.show').length).toBe(0);
  });

  it('should transition classes from "fade" to "fade show" on enter', () => {
    const onEnter = jasmine.createSpy('spy');
    const onLeave = jasmine.createSpy('spy');
    let isOpen = false;
    const wrapper = mount(
      <Helper showItem={isOpen} >
        <Fade onEnter={onEnter} onLeave={onLeave} key={Math.random()}>Yo!</Fade>
        <Fade transitionAppear={false} transitionEnter={false} transitionLeave={false} key={Math.random()}>Yo 2!</Fade>
      </Helper>
    );

    expect(wrapper.find('div.fade').length).toBe(0);
    expect(wrapper.find('div.fade.show').length).toBe(0);

    wrapper.find('.trigger').simulate('click');

    expect(wrapper.find('div.fade').length).toBe(2);
    expect(wrapper.find('div.fade.show').length).toBe(1);
    expect(onEnter).not.toHaveBeenCalled();

    jasmine.clock().tick(300);

    expect(onEnter).toHaveBeenCalled();
    expect(onLeave).not.toHaveBeenCalled();
    expect(wrapper.find('div.fade.show').length).toBe(2);

    wrapper.find('.trigger').simulate('click');
    expect(wrapper.find('div.fade.show').length).toBe(0);
  });
});
