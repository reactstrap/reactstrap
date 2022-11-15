import { ListGroupItemHeading } from '..';
import { testForChildrenInComponent, testForDefaultClass } from '../testUtils';

describe('ListGroupItem', () => {
  it('should render children', () => {
    testForChildrenInComponent(ListGroupItemHeading);
  });

  it('should render with "list-group-item-heading" class', () => {
    testForDefaultClass(ListGroupItemHeading, 'list-group-item-heading');
  });
});
