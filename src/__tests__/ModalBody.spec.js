import { ModalBody } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('ModalBody', () => {
  it('should render with "modal-body" class', () => {
    testForDefaultClass(ModalBody, 'modal-body');
  });

  it('should render additional classes', () => {
    testForCustomClass(ModalBody, {});
  });

  it('should render custom tag', () => {
    testForCustomTag(ModalBody);
  });
});
