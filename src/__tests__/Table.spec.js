import React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../';

describe('Table', () => {
  it('should render with "table" class', () => {
    const wrapper = shallow(<Table>Yo!</Table>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('table')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Table className="other">Yo!</Table>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('table')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Table tag="div">Yo!</Table>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should render modifier classes', () => {
    const wrapper = shallow(<Table size="sm" bordered striped dark hover>Yo!</Table>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('table-sm')).toBe(true);
    expect(wrapper.hasClass('table-bordered')).toBe(true);
    expect(wrapper.hasClass('table-striped')).toBe(true);
    expect(wrapper.hasClass('table-hover')).toBe(true);
    expect(wrapper.hasClass('table-dark')).toBe(true);
  });

  it('should render responsive wrapper class', () => {
    const wrapper = shallow(<Table responsive>Yo!</Table>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('table-responsive')).toBe(true);
    expect(wrapper.find('.table').length).toBe(1);
  });

  it('should render responsive wrapper class for md', () => {
    const wrapper = shallow(<Table responsive="md">Yo!</Table>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('table-responsive-md')).toBe(true);
    expect(wrapper.find('.table').length).toBe(1);
  });
});
