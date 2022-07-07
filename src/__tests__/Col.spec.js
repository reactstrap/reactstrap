import React from 'react';
import { shallow } from 'enzyme';
import { Col } from '..';

describe('Col', () => {
  it('should render default .col markup', () => {
    const wrapper = shallow(<Col />);

    expect(wrapper.html()).toBe('<div class="col"></div>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Col>Children</Col>);

    expect(wrapper.text()).toBe('Children');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Col className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(true);
  });

  it('should allow custom columns to be defined', () => {
    const wrapper = shallow(
      <Col widths={['base', 'jumbo']} base="4" jumbo="6" />,
    );

    expect(wrapper.hasClass('col-4')).toBe(true);
    expect(wrapper.hasClass('col-jumbo-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });

  it('should allow custom columns to be defined with objects', () => {
    const wrapper = shallow(
      <Col
        widths={['base', 'jumbo', 'wtf']}
        wtf={{ size: 1, order: 2, offset: 4 }}
      />,
    );

    expect(wrapper.hasClass('col-wtf-1')).toBe(true);
    expect(wrapper.hasClass('order-wtf-2')).toBe(true);
    expect(wrapper.hasClass('offset-wtf-4')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });

  it('should pass col size specific classes as Strings', () => {
    const wrapper = shallow(<Col sm="6" />);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });

  it('should pass col size specific classes as Numbers', () => {
    const wrapper = shallow(<Col sm={6} />);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });

  it('should pass col size as flex with values "auto" or without value', () => {
    const wrapper = shallow(<Col xs="auto" sm />);

    expect(wrapper.hasClass('col')).toBe(false);
    expect(wrapper.hasClass('col-auto')).toBe(true);
    expect(wrapper.hasClass('col-sm')).toBe(true);
  });

  it('should pass col size specific classes via Objects', () => {
    const wrapper = shallow(<Col sm={{ size: 6, order: 2, offset: 2 }} />);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
    expect(wrapper.hasClass('order-sm-2')).toBe(true);
    expect(wrapper.hasClass('offset-sm-2')).toBe(true);
  });

  it('should pass col size specific classes via Objects including 0', () => {
    const wrapper = shallow(<Col sm={{ size: 6, order: 0, offset: 0 }} />);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
    expect(wrapper.hasClass('order-sm-0')).toBe(true);
    expect(wrapper.hasClass('offset-sm-0')).toBe(true);
  });

  it('should pass col size when passing via object with size "auto"', () => {
    const wrapper = shallow(<Col sm={{ size: 'auto', offset: 2 }} />);

    expect(wrapper.hasClass('col')).toBe(false);
    expect(wrapper.hasClass('col-sm-auto')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Col tag="main">Yo!</Col>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.type()).toBe('main');
    expect(wrapper.hasClass('col')).toBe(true);
  });
});
