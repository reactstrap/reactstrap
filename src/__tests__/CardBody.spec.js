import { CardBody } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardBody', () => {
  it('should render with "card-body" class', () => {
    testForDefaultClass(CardBody, 'card-body');
  });

  it('should render additional classes', () => {
    testForCustomClass(CardBody);
  });

  it('should render custom tag', () => {
    testForCustomTag(CardBody);
  });
});
