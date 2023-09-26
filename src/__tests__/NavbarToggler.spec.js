import { NavbarToggler } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('NavbarToggler', () => {
  it('should have .navbar-toggler class', () => {
    testForDefaultClass(NavbarToggler, 'navbar-toggler');
  });

  it('should render custom tag', () => {
    testForCustomTag(NavbarToggler);
  });

  it('should render children instead of navbar-toggler-icon ', () => {
    testForChildrenInComponent(NavbarToggler);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(NavbarToggler);
  });
});
