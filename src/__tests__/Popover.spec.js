import React from 'react';
import { mount } from 'enzyme';
import Popover from '../Popover';

describe('Tooltip', () => {
  it('should apply popperClassName to popper component', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'tooltip-target');
    document.body.appendChild(div);

    const wrapper = mount(
      <Popover target="tooltip-target" popperClassName="boba-was-here">
        Tooltip Content
      </Popover>,
    );

    const tooltipPopoverWrapper = wrapper.find('TooltipPopoverWrapper');
    expect(
      tooltipPopoverWrapper
        .find({ popperClassName: 'popover show boba-was-here' })
        .exists(),
    ).toBe(true);
  });
});
