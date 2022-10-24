import React from 'react';
import { render, screen } from '@testing-library/react';
import { Media } from '..';
import {
  testForChildrenInComponent,
  testForDefaultTag,
  testForCustomTag
} from '../testUtils';

describe('Media', () => {

  it('should render a div tag by default', () => {
    testForDefaultTag(Media, 'div');
  });

  it('should render an h4 tag by default for heading', () => {
    render(<Media heading data-testid="media"/>);
    expect(screen.getByTestId('media').tagName.toLowerCase()).toBe('h4');
  });


  it('should render an a tag by default Media with an href', () => {
    render(<Media href="#" data-testid="media"/>);
    expect(screen.getByTestId('media').tagName.toLowerCase()).toBe('a');
  });

  it('should render an img tag by default for object', () => {
    render(<Media object data-testid="media"/>);
    expect(screen.getByTestId('media').tagName.toLowerCase()).toBe('img');
  });

  it('should render an img tag by default Media with a src', () => {
    render(<Media src="#" data-testid="media"/>);
    expect(screen.getByTestId('media').tagName.toLowerCase()).toBe('img');
  });

  it('should render a ul tag by default for list', () => {
    render(<Media list data-testid="media"/>);
    expect(screen.getByTestId('media').tagName.toLowerCase()).toBe('ul');
  });

  it('should pass additional classNames', () => {
    render(<Media className="extra" data-testid="media" />);
    expect(screen.getByTestId('media')).toHaveClass('extra');
  });

  it('should render custom tag', () => {
    testForCustomTag(Media);
  });

  it('should render body', () => {
    render(<Media body data-testid="media"/>);
    expect(screen.getByTestId('media')).toHaveClass('media-body');
  });

  it('should render heading', () => {
    render(<Media heading data-testid="media"/>);
    expect(screen.getByTestId('media')).toHaveClass('media-heading');
  });

  it('should render left', () => {
    render(<Media left data-testid="media" />);
    expect(screen.getByTestId('media')).toHaveClass('media-left');
  });

  it('should render right', () => {
    render(<Media right data-testid="media" />);
    expect(screen.getByTestId('media')).toHaveClass('media-right');
  });

  it('should render top', () => {
    render(<Media top data-testid="media" />);
    expect(screen.getByTestId('media')).toHaveClass('media-top');
  });

  it('should render bottom', () => {
    render(<Media bottom data-testid="media" />);
    expect(screen.getByTestId('media')).toHaveClass('media-bottom');
  });

  it('should render middle', () => {
    render(<Media middle data-testid="media" />);
    expect(screen.getByTestId('media')).toHaveClass('media-middle');
  });

  it('should render object', () => {
    render(<Media object data-testid="media" />);
    expect(screen.getByTestId('media')).toHaveClass('media-object');
  });

  it('should render media', () => {
    render(<Media data-testid="media" />);
    expect(screen.getByTestId('media')).toHaveClass('media');
  });

  it('should render list', () => {
    render(
      <Media list data-testid="media">
        <Media tag="li" role="listitem"/>
        <Media tag="li" role="listitem"/>
        <Media tag="li" role="listitem"/>
      </Media>,
    );

    const listItems = screen.getAllByRole('listitem');

    expect(screen.getByTestId('media')).toHaveClass('media-list');
    expect(listItems).toHaveLength(3);
  
    listItems.forEach((element) => {
      expect(element.tagName.toLowerCase()).toBe("li");
    });

  });

  it('should render children', () => {
    testForChildrenInComponent(Media);
  });

});
