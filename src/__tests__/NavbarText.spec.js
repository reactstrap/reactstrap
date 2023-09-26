import { NavbarText } from '..';
import {
  testForDefaultClass,
  testForCustomTag,
  testForChildrenInComponent,
  testForCustomClass,
} from '../testUtils';

describe('NavbarText', () => {
  it('should render .navbar-text markup', () => {
    testForDefaultClass(NavbarText, 'navbar-text');
  });

  it('should render custom tag', () => {
    testForCustomTag(NavbarText);
  });

  it('should render children', () => {
    testForChildrenInComponent(NavbarText);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(NavbarText);
  });
});
