import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  Alert,
  ButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from '../';
import { keyCodes } from '../utils';

describe('UncontrolledAlert', () => {
  it('should be an Alert', () => {
    const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
    expect(alert.type()).toBe(Alert);
  });

  it('should have isOpen default to true', () => {
    const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
    expect(alert.prop('isOpen')).toBe(true);
  });

  it('should have toggle function', () => {
    const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
    expect(alert.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
    const instance = alert.instance();
    instance.toggle();
    alert.update();
    expect(alert.prop('isOpen')).toBe(false);
  });
});

describe('UncontrolledButtonDropdown', () => {
  it('should be an ButtonDropdown', () => {
    const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
    expect(buttonDropdown.type()).toBe(ButtonDropdown);
  });

  it('should have isOpen default to false', () => {
    const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
    expect(buttonDropdown.prop('isOpen')).toBe(false);
  });

  it('should have toggle function', () => {
    const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
    expect(buttonDropdown.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
    const instance = buttonDropdown.instance();
    instance.toggle();
    buttonDropdown.update();
    expect(buttonDropdown.prop('isOpen')).toBe(true);
  });
});

describe('UncontrolledDropdown', () => {

  it('should be an Dropdown', () => {
    const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
    expect(dropdown.type()).toBe(Dropdown);
  });

  it('should have isOpen default to false', () => {
    const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
    expect(dropdown.prop('isOpen')).toBe(false);
  });

  it('should have toggle function', () => {
    const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
    expect(dropdown.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
    const instance = dropdown.instance();
    instance.toggle();
    dropdown.update();
    expect(dropdown.prop('isOpen')).toBe(true);
  });

  describe('onToggle', () => {
    let handleToggle = jest.fn();
    let element;

    beforeEach(() => {
      element = document.createElement('div');
      document.body.appendChild(element);
    });

    afterEach(() => {
      handleToggle.mockClear();
    });

    it('onToggle should be called on document click', () => {
      mount(<UncontrolledDropdown onToggle={handleToggle} defaultOpen={true}>
        <DropdownToggle id="toggle">Toggle</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Test</DropdownItem>
          <DropdownItem id="divider" divider />
        </DropdownMenu>
      </UncontrolledDropdown>);

      expect(handleToggle.mock.calls.length).toBe(0);

      document.body.click();

      expect(handleToggle.mock.calls.length).toBe(1);
      expect(handleToggle.mock.calls[0].length).toBe(2);
      expect(handleToggle.mock.calls[0][1]).toBe(false);
    });

    it('onToggle should be called on container click', () => {
      const wrapper = mount(<UncontrolledDropdown id="test" onToggle={handleToggle} defaultOpen={true}>
        <DropdownToggle id="toggle">Toggle</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Test</DropdownItem>
          <DropdownItem id="divider" divider />
        </DropdownMenu>
      </UncontrolledDropdown>, { attachTo: element });

      expect(handleToggle.mock.calls.length).toBe(0);

      document.getElementById('test').click();

      expect(handleToggle.mock.calls.length).toBe(1);
      expect(handleToggle.mock.calls[0].length).toBe(2);
      expect(handleToggle.mock.calls[0][1]).toBe(false);

      wrapper.detach();
    });

    it('onToggle should be called on toggler click when closed', () => {
      const wrapper = mount(<UncontrolledDropdown id="test" onToggle={handleToggle} defaultOpen={false}>
        <DropdownToggle id="toggle">Toggle</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Test</DropdownItem>
          <DropdownItem id="divider" divider />
        </DropdownMenu>
      </UncontrolledDropdown>, { attachTo: element });

      expect(handleToggle.mock.calls.length).toBe(0);

      document.getElementById('toggle').click();

      expect(handleToggle.mock.calls.length).toBe(1);
      expect(handleToggle.mock.calls[0].length).toBe(2);
      expect(handleToggle.mock.calls[0][1]).toBe(true);

      wrapper.detach();
    });

    it('onToggle should be called on toggler click when opened', () => {
      const wrapper = mount(<UncontrolledDropdown id="test" onToggle={handleToggle} defaultOpen={true}>
        <DropdownToggle id="toggle">Toggle</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Test</DropdownItem>
          <DropdownItem id="divider" divider />
        </DropdownMenu>
      </UncontrolledDropdown>, { attachTo: element });

      expect(handleToggle.mock.calls.length).toBe(0);

      document.getElementById('toggle').click();

      expect(handleToggle.mock.calls.length).toBe(1);
      expect(handleToggle.mock.calls[0].length).toBe(2);
      expect(handleToggle.mock.calls[0][1]).toBe(false);

      wrapper.detach();
    });

    it('onToggle should be called on key closing', () => {
      const wrapper = mount(<UncontrolledDropdown id="test" onToggle={handleToggle} defaultOpen={true}>
        <DropdownToggle id="toggle">Toggle</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Test</DropdownItem>
          <DropdownItem id="divider" divider />
        </DropdownMenu>
      </UncontrolledDropdown>, { attachTo: element });

      expect(handleToggle.mock.calls.length).toBe(0);

      wrapper.find(Dropdown).instance().handleDocumentClick({ type: 'keyup', which: keyCodes.tab });

      expect(handleToggle.mock.calls.length).toBe(1);
      expect(handleToggle.mock.calls[0].length).toBe(2);
      expect(handleToggle.mock.calls[0][1]).toBe(false);

      wrapper.detach();
    });

    it('onToggle should be called on key opening', () => {
      const wrapper = mount(<UncontrolledDropdown id="test" onToggle={handleToggle} defaultOpen={false}>
        <DropdownToggle id="toggle">Toggle</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Test</DropdownItem>
          <DropdownItem id="divider" divider />
        </DropdownMenu>
      </UncontrolledDropdown>, { attachTo: element });

      expect(handleToggle.mock.calls.length).toBe(0);

      wrapper.find(Dropdown).instance().handleDocumentClick('keydown', { which: keyCodes.down });

      expect(handleToggle.mock.calls.length).toBe(1);
      expect(handleToggle.mock.calls[0].length).toBe(2);
      expect(handleToggle.mock.calls[0][1]).toBe(true);

      wrapper.detach();
    });
  })
});

describe('UncontrolledTooltip', () => {
  it('should be an Tooltip', () => {
    const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
    expect(tooltip.type()).toBe(Tooltip);
  });

  it('should have isOpen default to false', () => {
    const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
    expect(tooltip.prop('isOpen')).toBe(false);
  });

  it('should have toggle function', () => {
    const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
    expect(tooltip.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
    const instance = tooltip.instance();
    instance.toggle();
    tooltip.update();
    expect(tooltip.prop('isOpen')).toBe(true);
  });

  it('should have boundary set to string', () => {
    const tooltip = shallow(<UncontrolledTooltip boundariesElement="window" target="blah">Yo!</UncontrolledTooltip>);
    expect(tooltip.prop('boundariesElement')).toBe('window');
  });

  it('should render correctly with a ref object as the target', () => {
    const target = React.createRef();
    const tooltip = shallow(<UncontrolledTooltip target={target}>Yo!</UncontrolledTooltip>);
    expect(tooltip.exists()).toBe(true);
  });
});
