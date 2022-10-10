import React from 'react';
import { mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { TransitionGroup } from 'react-transition-group';
import { Fade } from '..';
import { testForCustomTag } from '../testUtils';

class Helper extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showItem: props.showItem,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      showItem: !prevState.showItem,
    }));
  }

  render() {
    return (
      <div>
        <div className="trigger" onClick={this.toggle}>
          Toggle
        </div>
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
    const { debug } = render(
      <Helper showItem>
        <Fade>Yo!</Fade>
        <Fade appear={false}>
          Yo 2!
        </Fade>
      </Helper>,
    );

    expect(screen.getByText('Yo!')).toHaveClass('fade');
    expect(screen.getByText('Yo!')).not.toHaveClass('show');
    expect(screen.getByText('Yo 2!')).toHaveClass('fade');
    expect(screen.getByText('Yo 2!')).toHaveClass('show');

    jest.advanceTimersByTime(300);

    expect(screen.getByText('Yo!')).toHaveClass('fade');
    expect(screen.getByText('Yo!')).toHaveClass('show');
    expect(screen.getByText('Yo 2!')).toHaveClass('fade');
    expect(screen.getByText('Yo 2!')).toHaveClass('show');

    user.click(document.getElementsByClassName('trigger')[0]);

    expect(screen.getByText('Yo!')).toHaveClass('fade');
    expect(screen.getByText('Yo!')).not.toHaveClass('show');
    expect(screen.getByText('Yo 2!')).toHaveClass('fade');
    expect(screen.getByText('Yo 2!')).not.toHaveClass('show');
  });

  it('should transition classes from "fade" to "fade show" on enter', () => {
    const onEnter = jest.fn();
    const onExit = jest.fn();
    render(
      <Helper showItem={false}>
        <Fade onEnter={onEnter} onExit={onExit} key={Math.random()}>
          Yo 3!
        </Fade>
        <Fade appear={false} enter={false} exit={false} key={Math.random()}>
          Yo 4!
        </Fade>
      </Helper>,
    );

    expect(document.getElementsByClassName('fade').length).toBe(0);
    expect(document.getElementsByClassName('fade show').length).toBe(0);

    user.click(document.getElementsByClassName('trigger')[0]);

    expect(onEnter).toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();
    expect(document.getElementsByClassName('fade').length).toBe(2);
    expect(document.getElementsByClassName('fade show').length).toBe(1);

    jest.advanceTimersByTime(300);

    expect(onEnter).toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();
    expect(document.getElementsByClassName('fade show').length).toBe(2);

    user.click(document.getElementsByClassName('trigger')[0]);

    expect(onExit).toHaveBeenCalled();
    expect(document.getElementsByClassName('fade show').length).toBe(0);
  });

  it('should pass className down', () => {
    render(<Fade className="test-class-name">Yo!</Fade>);
    expect(screen.getByText(/yo/i)).toHaveClass('test-class-name');
  });

  it('should pass other props down', () => {
    render(<Fade data-testprop="testvalue">Yo</Fade>);

    expect(screen.getByText(/yo/i)).toHaveAttribute('data-testprop', 'testvalue');
  });

  it('should support custom tag', () => {
    testForCustomTag(Fade)
  });
});
