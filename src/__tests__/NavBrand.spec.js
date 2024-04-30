import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavbarBrand } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('NavbarBrand', () => {
  it('should render .navbar-brand markup', () => {
    testForDefaultClass(NavbarBrand, 'navbar-brand');
  });

  it('should render custom tag', () => {
    testForDefaultTag(NavbarBrand, 'a');
  });

  it('sholid render children', () => {
    testForChildrenInComponent(NavbarBrand);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(NavbarBrand);
  });
});
