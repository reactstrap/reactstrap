import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from '../';

describe('Spinner', () => {
  it('should render .spinner-border markup', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.html()).toBe(
      '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
    );
  });

  it('should render .spinner-grow markup', () => {
    const wrapper = shallow(<Spinner type="grow" />);

    expect(wrapper.html()).toBe(
      '<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>'
    );
  });

  it('should render children', () => {
    const wrapper = shallow(<Spinner>Waiting...</Spinner>);

    expect(wrapper.html()).toBe(
      '<div class="spinner-border" role="status"><span class="sr-only">Waiting...</span></div>'
    );
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Spinner className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('spinner-border')).toBe(true);
  });
});
