import { ListGroupItemText } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForDefaultClass,
} from '../testUtils';

describe('ListGroupItem', () => {
  it('should render children', () => {
    testForChildrenInComponent(ListGroupItemText);
  });

  it('should render with "list-group-item-text" class', () => {
    testForDefaultClass(ListGroupItemText, 'list-group-item-text');
  });
});
