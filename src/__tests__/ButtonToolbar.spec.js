import { ButtonToolbar } from '..';
import {
  testForChildrenInComponent,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('ButtonToolbar', () => {
  it('should render children', () => {
    testForChildrenInComponent(ButtonToolbar);
  });

  it('should render with the "btn-toolbar" class', () => {
    testForDefaultClass(ButtonToolbar, 'btn-toolbar');
  });

  it('should render custom tag', () => {
    testForCustomTag(ButtonToolbar);
  });
});
