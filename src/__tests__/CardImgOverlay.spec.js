import { CardImgOverlay } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardImgOverlay', () => {
  it('should render with "card-img-overlay" class', () => {
    testForDefaultClass(CardImgOverlay, 'card-img-overlay');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardImgOverlay);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardImgOverlay);
  });
});
