import React from 'react';
import { render, screen } from '@testing-library/react';
import { Media } from '..';
import {
  testForChildrenInComponent,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('Media', () => {
  it('should render a div tag by default', () => {
    testForDefaultTag(Media, 'div');
  });

  it('should render an h4 tag by default for heading', () => {
    render(<Media data-testid="test" heading />);
    expect(screen.getByTestId('test').tagName.toLowerCase()).toBe('h4');
  });

  it('should render an a tag by default Media with an href', () => {
    render(<Media href="#" data-testid="test" />);
    expect(screen.getByTestId('test').tagName.toLowerCase()).toBe('a');
  });

  it('should render an img tag by default for object', () => {
    render(<Media object data-testid="test" />);

    expect(screen.getByTestId('test').tagName.toLowerCase()).toBe('img');
  });

  it('should render an img tag by default Media with a src', () => {
    render(<Media src="#" data-testid="test" />);

    expect(screen.getByTestId('test').tagName.toLowerCase()).toBe('img');
  });

  it('should render a ul tag by default for list', () => {
    render(<Media list data-testid="test" />);

    expect(screen.getByTestId('test').tagName.toLowerCase()).toBe('ul');
  });

  it('should pass additional classNames', () => {
    render(<Media className="extra" data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('extra');
  });

  it('should render custom tag', () => {
    testForCustomTag(Media);
  });

  it('should render body', () => {
    render(<Media body data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('media-body');
  });

  it('should render heading', () => {
    render(<Media heading data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('media-heading');
  });

  it('should render left', () => {
    render(<Media left data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('media-left');
  });

  it('should render right', () => {
    render(<Media right data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('media-right');
  });

  it('should render top', () => {
    render(<Media top data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('media-top');
  });

  it('should render bottom', () => {
    render(<Media bottom data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('media-bottom');
  });

  it('should render middle', () => {
    render(<Media middle data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('media-middle');
  });

  it('should render object', () => {
    render(<Media object data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('media-object');
  });

  it('should render media', () => {
    testForDefaultClass(Media, 'media');
  });

  it('should render list', () => {
    render(
      <Media list data-testid="test">
        <Media tag="li" />
        <Media tag="li" />
        <Media tag="li" />
      </Media>,
    );

    expect(screen.getByTestId('test').querySelectorAll('li').length).toBe(3);
  });

  it('should render children', () => {
    testForChildrenInComponent(Media);
  });
});
