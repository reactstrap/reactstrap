import { CardDeck } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardDeck', () => {
  it('should render with "card-deck" class', () => {
    testForDefaultClass(CardDeck, 'card-deck');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardDeck);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardDeck);
  });
});
