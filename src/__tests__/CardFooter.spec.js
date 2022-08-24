import { CardFooter } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardFooter', () => {
  it('should render with "card-footer" class', () => {
    testForDefaultClass(CardFooter, 'card-footer');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardFooter);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardFooter);
  });
});
