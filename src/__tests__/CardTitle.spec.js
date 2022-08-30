import { CardTitle } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('CardTitle', () => {
  it('should render with "card-title" class', () => {
    testForDefaultClass(CardTitle, 'card-title');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardTitle);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardTitle);
  });

  it('should render a "div" tag by default', () => {
    testForDefaultTag(CardTitle, 'div');
  });
});
