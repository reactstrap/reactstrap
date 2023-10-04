import React from 'react';
import { testForChildrenInComponent } from '../testUtils';
import { PopoverHeader } from '..';

describe('PopoverHeader', () => {
  it('should render children', () => {
    testForChildrenInComponent(PopoverHeader);
  });
});
