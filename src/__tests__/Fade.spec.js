import React from 'react';
import { mount } from 'enzyme';
import { TransitionGroup } from 'react-transition-group';
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
          {this.state.showItem ? this.props.children : null}
        </TransitionGroup>
      </div>
    );
  }
}

describe('Fade', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should transition classes from "fade" to "fade show" on appear', () => {
    let isOpen = true;
    const wrapper = mount(
      <Helper showItem={isOpen} >
        <Fade key={Math.random()}>Yo!</Fade>
        <Fade appear={false} key={Math.random()}>Yo 2!</Fade>
      </Helper>
    );

    expect(wrapper.update().find('div.fade').hostNodes().length).toBe(2);
    expect(wrapper.update().find('div.fade.show').hostNodes().length).toBe(1);

    jest.runTimersToTime(300);

    expect(wrapper.update().find('div.fade.show').hostNodes().length).toBe(2);

    wrapper.find('.trigger').hostNodes().simulate('click');
    expect(wrapper.update().find('div.fade.show').hostNodes().length).toBe(0);
  });

  it('should transition classes from "fade" to "fade show" on enter', () => {
    const onEnter = jest.fn();
    const onExit = jest.fn();
    let isOpen = false;
    const wrapper = mount(
      <Helper showItem={isOpen} >
        <Fade onEnter={onEnter} onExit={onExit} key={Math.random()}>Yo 3!</Fade>
        <Fade appear={false} enter={false} exit={false} key={Math.random()}>Yo 4!</Fade>
      </Helper>
    );

    expect(wrapper.update().find('div.fade').hostNodes().length).toBe(0);
    expect(wrapper.update().find('div.fade.show').hostNodes().length).toBe(0);

    wrapper.find('.trigger').hostNodes().simulate('click');

    expect(wrapper.update().find('div.fade').hostNodes().length).toBe(2);
    expect(wrapper.update().find('div.fade.show').hostNodes().length).toBe(1);
    expect(onEnter).toHaveBeenCalled();

    jest.runTimersToTime(300);

    expect(onEnter).toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();
    expect(wrapper.update().find('div.fade.show').hostNodes().length).toBe(2);

    wrapper.find('.trigger').hostNodes().simulate('click');
    expect(wrapper.update().find('div.fade.show').hostNodes().length).toBe(0);
    expect(onExit).toHaveBeenCalled();
  });

  it('should pass className down', () => {
    const alert = mount(<Fade className="test-class-name">Yo!</Fade>);
    expect(alert.find('.fade').hostNodes().prop('className')).toContain('test-class-name');
  });

  it('should pass other props down', () => {
    const alert = mount(<Fade data-testprop="testvalue">Yo!</Fade>);
    expect(alert.find('.fade').hostNodes().prop('data-testprop')).toContain('testvalue');
  });

  it('should support custom tag', () => {
    const alert = mount(<Fade tag="p">Yo!</Fade>);
    expect(alert.find('p').hostNodes().length).toBe(1);
  });
});
