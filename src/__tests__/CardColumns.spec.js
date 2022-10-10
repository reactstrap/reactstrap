import { CardColumns } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardColumns', () => {
  it('should render with "card-columns" class', () => {
    testForDefaultClass(CardColumns, 'card-columns');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardColumns);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardColumns);
  });
});
