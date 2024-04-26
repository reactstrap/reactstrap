import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';
import { Progress } from '..';

describe('Progress', () => {
  it('should render with "div" tag by default', () => {
    testForDefaultTag(Progress, 'div');
  });

  it('should render with "progress" class', () => {
    testForDefaultClass(Progress, 'progress');
  });

  it('should render with "value" 0 by default', () => {
    render(<Progress />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0',
    );
  });

  it('should render with "max" 100 by default', () => {
    render(<Progress />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemax',
      '100',
    );
  });

  it('should render with "style" on the parent element', () => {
    render(<Progress style={{ height: '20px' }} data-testid="sandman" />);
    expect(
      getComputedStyle(screen.getByTestId('sandman')).getPropertyValue(
        'height',
      ),
    ).toBe('20px');
  });

  it('should render with "style" on the progress bar element if bar=true', () => {
    render(<Progress bar style={{ height: '20px' }} />);

    expect(
      getComputedStyle(screen.getByRole('progressbar')).getPropertyValue(
        'height',
      ),
    ).toBe('20px');
  });

  it('should render "barStyle" on the progress bar element', () => {
    render(
      <Progress style={{ height: '20px' }} barStyle={{ height: '10px' }} />,
    );

    expect(
      getComputedStyle(screen.getByRole('progressbar')).getPropertyValue(
        'height',
      ),
    ).toBe('10px');
  });

  it('should render with the given "value" when passed as string prop', () => {
    render(<Progress value="10" />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '10',
    );
  });

  it('should render with the given "value" when passed as number prop', () => {
    render(<Progress value={10} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '10',
    );
  });

  it('should render with the given "max" when passed as string prop', () => {
    render(<Progress max="10" />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemax',
      '10',
    );
  });

  it('should render with the given "max" when passed as number prop', () => {
    render(<Progress max={10} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemax',
      '10',
    );
  });

  it('should render with "progress-bar-striped" class when striped prop is truthy', () => {
    render(<Progress striped />);

    expect(screen.getByRole('progressbar')).toHaveClass('progress-bar-striped');
  });

  it('should render with "progress-bar-striped" and "progress-bar-animated" classes when animated prop is truthy', () => {
    render(<Progress animated />);

    expect(screen.getByRole('progressbar')).toHaveClass('progress-bar-striped');
    expect(screen.getByRole('progressbar')).toHaveClass(
      'progress-bar-animated',
    );
  });

  it('should render with "bg-${color}" class when color prop is defined', () => {
    render(<Progress color="yo" />);

    expect(screen.getByRole('progressbar')).toHaveClass('bg-yo');
  });

  it('should render additional classes', () => {
    render(<Progress className="other" data-testid="sandman" />);
    expect(screen.getByTestId('sandman')).toHaveClass('other');
    expect(screen.getByTestId('sandman')).toHaveClass('progress');
  });

  it('should render additional classes on the inner progress bar', () => {
    render(<Progress barClassName="other" data-testid="sandman" />);
    expect(screen.getByTestId('sandman')).toHaveClass('progress');
    expect(screen.getByTestId('sandman')).not.toHaveClass('other');
    expect(screen.getByRole('progressbar')).toHaveClass('other');
  });

  it('should render custom tag', () => {
    testForCustomTag(Progress);
  });

  it('should render only the .progress when "multi" is passed', () => {
    render(<Progress multi data-testid="sandman" />);

    expect(screen.getByTestId('sandman')).toHaveClass('progress');
    expect(screen.getByTestId('sandman')).not.toHaveClass('progress-bar');
  });

  it('should render only the .progress-bar when "bar" is passed', () => {
    render(<Progress bar />);

    expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
    expect(screen.getByRole('progressbar')).not.toHaveClass('progress');
  });

  it('should render additional classes', () => {
    render(<Progress bar className="yo" data-testid="sandman" />);

    expect(screen.getByTestId('sandman')).toHaveClass('progress-bar');
    expect(screen.getByTestId('sandman')).toHaveClass('yo');
    expect(screen.getByTestId('sandman')).not.toHaveClass('progress');
  });

  it('should render additional classes using the barClassName', () => {
    render(<Progress bar barClassName="yo" data-testid="sandman" />);

    expect(screen.getByTestId('sandman')).toHaveClass('progress-bar');
    expect(screen.getByTestId('sandman')).toHaveClass('yo');
    expect(screen.getByTestId('sandman')).not.toHaveClass('progress');
  });

  it('should render the children (label)', () => {
    render(<Progress>0%</Progress>);

    expect(screen.getByText('0%')).toBeInTheDocument();
    // expect(wrapper.text()).toBe('0%');
  });

  it('should render the children (label) (multi)', () => {
    render(
      <Progress multi>
        <Progress bar value="15">
          15%
        </Progress>
        <Progress bar color="success" value="30">
          30%
        </Progress>
        <Progress bar color="info" value="25">
          25%
        </Progress>
        <Progress bar color="warning" value="20">
          20%
        </Progress>
        <Progress bar color="danger" value="5">
          5%
        </Progress>
      </Progress>,
    );

    expect(screen.getByText('15%')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
    expect(screen.getByText('25%')).toBeInTheDocument();
    expect(screen.getByText('20%')).toBeInTheDocument();
    expect(screen.getByText('5%')).toBeInTheDocument();
  });

  it('should render nested progress bars', () => {
    render(
      <Progress multi data-testid="sandman">
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>,
    );

    expect(screen.getByTestId('sandman')).toHaveClass('progress');
    expect(screen.getAllByRole('progressbar').length).toBe(5);
  });

  it('should render nested progress bars and id attribute', () => {
    render(
      <Progress multi data-testid="sandman">
        <Progress bar id="ruh-roh" />
      </Progress>,
    );

    expect(screen.getByRole('progressbar')).toHaveAttribute('id', 'ruh-roh');
    expect(screen.getByTestId('sandman')).toHaveClass('progress');
  });
});
