import React from 'react';
import { mount } from 'enzyme';
import { Manager, Popper } from 'react-popper';
import { Dropdown, DropdownMenu } from '../';
import { omit } from './../utils';



class ContextDefineWrapper extends React.Component {
  static childContextTypes = Dropdown.childContextTypes;

  getChildContext = () => ({
    isOpen: false,
    inNavbar: false,
    direction: 'down',
    ...omit(this.props, ['children'])
  })

  render = () => <Manager>{this.props.children}</Manager>
}

const mountWithContext = (node, context) => {
  return mount(
    <ContextDefineWrapper {...context}>{node}</ContextDefineWrapper>
  ).find(node.type);
};

describe('DropdownMenu', () => {
  it('should render children', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      { isOpen: true }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().text()).toBe('Content');
    expect(wrapper.find('.dropdown-menu').hostNodes().length).toBe(1);
  });

  it('should not have the class "show" when isOpen context is false', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      { isOpen: false }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('show')).toBe(false);
    expect(wrapper.find('.show').hostNodes().length).toBe(0);
  });

  it('should have the class "show" when isOpen context is true', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      { isOpen: true }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('show')).toBe(true);
    expect(wrapper.find('.show').hostNodes().length).toBe(1);
  });

  it('should render left aligned menus by default', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>Ello world</DropdownMenu>,
      { isOpen: true }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-right')).toBe(false);
  });

  it('should render right aligned menus', () => {
    const wrapper = mountWithContext(
      <DropdownMenu right>Ello world</DropdownMenu>,
      { isOpen: true }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-right')).toBe(true);
  });

  it('should render down when direction is unknown on the context', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>Ello world</DropdownMenu>,
      { isOpen: true, direction: 'unknown' }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('bottom-start');
  });

  it('should render down when direction is "down" on the context', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>Ello world</DropdownMenu>,
      { isOpen: true }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('bottom-start');
  });

  it('should render up when direction is "up" on the context', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>Ello world</DropdownMenu>,
      { isOpen: true, direction: 'up' }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('top-start');
  });

  it('should render left when direction is "left" on the context', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>Ello world</DropdownMenu>,
      { isOpen: true, direction: 'left' }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('left-start');
  });

  it('should render right when direction is "right" on the context', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>Ello world</DropdownMenu>,
      { isOpen: true, direction: 'right' }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('right-start');
  });

  it('should not disable flip modifier by default', () => {
    const wrapper = mountWithContext(
      <DropdownMenu>Ello world</DropdownMenu>,
      { isOpen: true }
    );

    expect(wrapper.find(Popper).prop('modifiers')).toBe(undefined);
  });

  it('should disable flip modifier when flip is false', () => {
    const wrapper = mountWithContext(
      <DropdownMenu flip={false}>Ello world</DropdownMenu>,
      { isOpen: true }
    );

    expect(wrapper.find(Popper).prop('modifiers')).toEqual({ flip: { enabled: false } });
  });

  it('should not render multiple children when isOpen is false', () => {
    const wrapper = mountWithContext(
      <DropdownMenu right>Ello world</DropdownMenu>,
      { isOpen: false }
    );
    expect(wrapper.childAt(0).children().length).toBe(0);
  });

  it('should render custom tag', () => {
    const wrapper = mountWithContext(
      <DropdownMenu tag="main">Yo!</DropdownMenu>
    );

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.childAt(0).hasClass('dropdown-menu')).toBe(true);
    expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe('main');
  });
});
