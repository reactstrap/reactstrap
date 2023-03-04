import { OffcanvasBody } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('OffcanvasBody', () => {
  it('should render with "offcanvas-body" class', () => {
    testForDefaultClass(OffcanvasBody, 'offcanvas-body  ');
  });

  it('should render additional classes', () => {
    testForCustomClass(OffcanvasBody);
  });

  it('should render custom tag', () => {
    testForCustomTag(OffcanvasBody);
  });
});
