import React from 'react';
import { shallow } from 'enzyme';
import { Col } from '../';

describe('Col', () => {
  it('should render default .col-* markup', () => {
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

  it('should pass col size specific classes as Strings', () => {
    const wrapper = shallow(<Col sm="6" />);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(true);
  });

  it('should pass col size specific classes as Numbers', () => {
    const wrapper = shallow(<Col sm={6} />);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(true);
  });

  it('should pass col size as flex with values "auto" or without value', () => {
    const wrapper = shallow(<Col xs="auto" sm />);

    expect(wrapper.hasClass('col-auto')).toBe(true);
    expect(wrapper.hasClass('col-sm')).toBe(true);
  });

  it('should pass col size specific classes via Objects', () => {
    const wrapper = shallow(<Col sm={{ size: 6, push: 2, pull: 2, offset: 2 }} />);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(true);
    expect(wrapper.hasClass('push-sm-2')).toBe(true);
    expect(wrapper.hasClass('pull-sm-2')).toBe(true);
    expect(wrapper.hasClass('offset-sm-2')).toBe(true);
  });

  it('should pass col size when passing via object with size "auto"', () => {
    const wrapper = shallow(<Col
      sm={{ size: 'auto', push: 2, pull: 2, offset: 2 }}
    />);

    expect(wrapper.hasClass('col-sm-auto')).toBe(true);
  });
});
