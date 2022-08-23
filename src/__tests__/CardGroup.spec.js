import { CardGroup } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardGroup', () => {
  it('should render with "card-group" class', () => {
    testForDefaultClass(CardGroup, 'card-group');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardGroup);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardGroup);
  });
});
