import { InputGroupText } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('InputGroupText', () => {
  it('should render with "input-group-text" class', () => {
    testForDefaultClass(InputGroupText, 'input-group-text');
  });

  it('should render additional classes', () => {
    testForCustomClass(InputGroupText);
  });

  it('should render with "span" tag by default', () => {
    testForDefaultTag(InputGroupText, 'span');
  });

  it('should render custom tag', () => {
    testForCustomTag(InputGroupText);
  });
});
