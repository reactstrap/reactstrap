import { ModalFooter } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('ModalFooter', () => {
  it('should render with "modal-footer" class', () => {
    testForDefaultClass(ModalFooter, 'modal-footer');
  });

  it('should render additional classes', () => {
    testForCustomClass(ModalFooter);
  });

  it('should render custom tag', () => {
    testForCustomTag(ModalFooter);
  });
});
