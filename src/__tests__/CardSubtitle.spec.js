import { CardSubtitle } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('CardSubtitle', () => {
  it('should render with "card-subtitle" class', () => {
    testForDefaultClass(CardSubtitle, 'card-subtitle');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardSubtitle);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardSubtitle);
  });

  it('should render a "div" tag by default', () => {
    testForDefaultTag(CardSubtitle, 'div');
  });
});
