import React from 'react';
import { shallow } from 'enzyme';
import { Media } from '..';

describe('Media', () => {
  it('should render a div tag by default', () => {
    const wrapper = shallow(<Media />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render an h4 tag by default for heading', () => {
    const wrapper = shallow(<Media heading />);

    expect(wrapper.type()).toBe('h4');
  });

  it('should render an a tag by default Media with an href', () => {
    const wrapper = shallow(<Media href="#" />);

    expect(wrapper.type()).toBe('a');
  });

  it('should render an img tag by default for object', () => {
    const wrapper = shallow(<Media object />);

    expect(wrapper.type()).toBe('img');
  });

  it('should render an img tag by default Media with a src', () => {
    const wrapper = shallow(<Media src="#" />);

    expect(wrapper.type()).toBe('img');
  });

  it('should render a ul tag by default for list', () => {
    const wrapper = shallow(<Media list />);

    expect(wrapper.type()).toBe('ul');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Media className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Media tag="main" />);

    expect(wrapper.type()).toBe('main');
  });

  it('should render body', () => {
    const wrapper = shallow(<Media body />);

    expect(wrapper.hasClass('media-body')).toBe(true);
  });

  it('should render heading', () => {
    const wrapper = shallow(<Media heading />);

    expect(wrapper.hasClass('media-heading')).toBe(true);
  });

  it('should render left', () => {
    const wrapper = shallow(<Media left />);

    expect(wrapper.hasClass('media-left')).toBe(true);
  });

  it('should render right', () => {
    const wrapper = shallow(<Media right />);

    expect(wrapper.hasClass('media-right')).toBe(true);
  });

  it('should render top', () => {
    const wrapper = shallow(<Media top />);

    expect(wrapper.hasClass('media-top')).toBe(true);
  });

  it('should render bottom', () => {
    const wrapper = shallow(<Media bottom />);

    expect(wrapper.hasClass('media-bottom')).toBe(true);
  });

  it('should render middle', () => {
    const wrapper = shallow(<Media middle />);

    expect(wrapper.hasClass('media-middle')).toBe(true);
  });

  it('should render object', () => {
    const wrapper = shallow(<Media object />);

    expect(wrapper.hasClass('media-object')).toBe(true);
  });

  it('should render media', () => {
    const wrapper = shallow(<Media />);

    expect(wrapper.hasClass('media')).toBe(true);
  });

  it('should render list', () => {
    const wrapper = shallow(
      <Media list>
        <Media tag="li" />
        <Media tag="li" />
        <Media tag="li" />
      </Media>
    );

    expect(wrapper.hasClass('media-list')).toBe(true);
    expect(wrapper.find({ tag: 'li' }).length).toBe(3);
  });

  it('should render children', () => {
    const wrapper = shallow(
      <Media>
        <Media body />
      </Media>
    );

    expect(wrapper.find({ body: true }).length).toBe(1);
  });
});
