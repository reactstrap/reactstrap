import { ToastBody } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('ToastBody', () => {
  it('should render with "toast-body" class', () => {
    testForDefaultClass(ToastBody, 'toast-body');
  });

  it('should render additional classes', () => {
    testForCustomClass(ToastBody);
  });

  it('should render custom tag', () => {
    testForCustomTag(ToastBody);
  });
});
