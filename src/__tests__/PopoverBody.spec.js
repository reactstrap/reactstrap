import React from 'react';
import { testForChildrenInComponent } from '../testUtils';
import { PopoverBody } from '..';

describe('PopoverBody', () => {
  it('should render children', () => {
    testForChildrenInComponent(PopoverBody);
  });
});
