import { CardLink } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardLink', () => {
  it('should render with "card-link" class', () => {
    testForDefaultClass(CardLink, 'card-link');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardLink);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardLink);
  });
});
