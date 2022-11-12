import { ListInlineItem } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('ListInlineItem', () => {
  it('should render children', () => {
    testForChildrenInComponent(ListInlineItem);
  });

  it('should render with "list-inline-item" class', () => {
    testForDefaultClass(ListInlineItem, 'list-inline-item');
  });

  it('should render additional classes', () => {
    testForCustomClass(ListInlineItem);
  });

  it('should render custom tag', () => {
    testForCustomTag(ListInlineItem);
  });
});
