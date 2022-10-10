import { Form } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultTag,
} from '../testUtils';

describe('Form', () => {
  it('should render with "form" tag', () => {
    testForDefaultTag(Form, 'form');
  });

  it('should render children', () => {
    testForChildrenInComponent(Form);
  });

  it('should render additional classes', () => {
    testForCustomClass(Form);
  });

  it('should render custom tag', () => {
    testForCustomTag(Form);
  });
});
