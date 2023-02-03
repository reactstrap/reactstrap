import React from 'react';
import { render } from '@testing-library/react';
import { Placeholder } from '..';

describe('Placeholder', () => {
  it('should render with "placeholder" class', () => {
    render(<Placeholder />);
    expect(document.querySelector('.placeholder')).toBeTruthy();
  });

  it('should render column size', () => {
    render(<Placeholder xs={7} />);
    expect(document.querySelector('.col-7')).toBeTruthy();
  });

  it('should render animation', () => {
    render(<Placeholder tag="p" animation="glow" />);
    expect(document.querySelector('.placeholder-glow')).toBeTruthy();
  });

  it('should render color', () => {
    render(<Placeholder xs={12} color="primary" />);
    expect(document.querySelector('.bg-primary')).toBeTruthy();
  });

  it('should render size', () => {
    render(<Placeholder size="lg" xs={12} />);
    expect(document.querySelector('.placeholder-lg')).toBeTruthy();
  });

  it('should render different widths for different breakpoints', () => {
    render(<Placeholder size="lg" xs={12} lg={8} />);
    expect(document.querySelector('.col-lg-8')).toBeTruthy();
    expect(document.querySelector('.col-12')).toBeTruthy();
  });

  it('should allow custom columns to be defined', () => {
    render(
      <Placeholder widths={['base', 'jumbo']} base="4" jumbo="6" />,
    );
    expect(document.querySelector('.col-4')).toBeTruthy();
    expect(document.querySelector('.col-jumbo-6')).toBeTruthy();
  });

  it('should allow custom columns to be defined with objects', () => {
    render(
      <Placeholder
        widths={['base', 'jumbo', 'custom']}
        custom={{ size: 1, order: 2, offset: 4 }}
      />,
    );

    expect(document.querySelector('.col-custom-1')).toBeTruthy();
    expect(document.querySelector('.order-custom-2')).toBeTruthy();
    expect(document.querySelector('.offset-custom-4')).toBeTruthy();
    expect(document.querySelector('.col')).toBeFalsy();
  });
});
