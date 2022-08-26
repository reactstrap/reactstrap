import { CardText } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardText', () => {
  it('should render with "card-text" class', () => {
    testForDefaultClass(CardText, 'card-text');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardText);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardText);
  });
});
