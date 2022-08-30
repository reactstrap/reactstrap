import { CardHeader } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardHeader', () => {
  it('should render with "card-header" class', () => {
    testForDefaultClass(CardHeader, 'card-header');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardHeader);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardHeader);
  });
});
