import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  it('should apply popperClassName to popper component', () => {
    const div = document.createElement('div');
    div.setAttribute("id", "tooltip-target");
    document.body.appendChild(div);

    const wrapper = mount(
      <Tooltip target="tooltip-target" popperClassName="boba-was-here">
        Tooltip Content
      </Tooltip>);

    const tooltipPopoverWrapper = wrapper.find('TooltipPopoverWrapper');
    expect(tooltipPopoverWrapper.find({ popperClassName: 'tooltip show boba-was-here' }).exists()).toBe(true);
  });
});
