/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { TetherContent } from 'reactstrap';

describe('TetherContent', () => {
  let state;
  let toggle;
  let tetherConfig;

  beforeEach(() => {
    state = false;
    toggle = () => state = !state;
    tetherConfig = {
      target: () => document.body,
      attachment: 'middle left',
      targetAttachment: 'middle right'
    };
  });

  it('should not return children', () => {
    const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
    const instance = wrapper.instance();
    expect(wrapper.children().length).toBe(0);
    expect(instance._element).toBe(undefined);
  });

  it('should renderChildren when isOpen is true', () => {
    state = true;
    spyOn(TetherContent.prototype, 'componentDidMount').and.callThrough();
    spyOn(TetherContent.prototype, 'renderChildren').and.callThrough();
    const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
    const instance = wrapper.instance();

    expect(TetherContent.prototype.componentDidMount.calls.count()).toBe(1);
    expect(TetherContent.prototype.renderChildren.calls.count()).toBe(1);
    expect(instance.props.isOpen).toBe(true);
    expect(instance._element.className.indexOf('tether') > -1).toBe(true);
  });

  it('should render an arrow dom node when prop is true', () => {
    state = true;
    const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} arrow="tooltip" toggle={toggle}><p>Content</p></TetherContent>);
    const instance = wrapper.instance();

    expect(instance._element.textContent).toBe('Content');
    expect(instance._tether.enabled).toBe(true);
    expect(instance._element.innerHTML.indexOf('<div class="tooltip-arrow"></div>') > -1).toBe(true);
  });

  it('should not call props.toggle when disabled ', () => {
    state = true;
    let props = jasmine.createSpyObj('props', ['toggle']);
    const wrapper = mount(<TetherContent disabled tether={tetherConfig} isOpen={state} toggle={props.toggle}><p>Content</p></TetherContent>);
    const instance = wrapper.instance();

    instance.toggle({ preventDefault: () => { } });
    expect(props.toggle).not.toHaveBeenCalled();
  });

  describe('hide', () => {
    it('should be called on componentWillUnmount', () => {
      state = true;
      spyOn(TetherContent.prototype, 'componentWillUnmount').and.callThrough();
      spyOn(TetherContent.prototype, 'hide').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentWillUnmount.calls.count()).toBe(0);
      expect(TetherContent.prototype.hide.calls.count()).toBe(0);
      expect(instance._element.textContent).toBe('Content');
      expect(instance._tether.enabled).toBe(true);

      wrapper.unmount();

      expect(TetherContent.prototype.componentWillUnmount.calls.count()).toBe(1);
      expect(TetherContent.prototype.hide.calls.count()).toBe(1);
      expect(instance._element).toBe(null);
      expect(instance._tether).toBe(null);
    });
  });

  describe('show', () => {
    it('should be called on componentDidMount', () => {
      state = true;
      spyOn(TetherContent.prototype, 'componentDidMount').and.callThrough();
      spyOn(TetherContent.prototype, 'show').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentDidMount.calls.count()).toBe(1);
      expect(TetherContent.prototype.show.calls.count()).toBe(1);
      expect(instance._element.textContent).toBe('Content');
      expect(instance._tether.enabled).toBe(true);
    });
  });

  describe('getTarget', () => {
    it('should grab dom node from function', () => {
      state = true;
      spyOn(tetherConfig, 'target').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(instance._element.textContent).toBe('Content');
      expect(instance._tether.enabled).toBe(true);
      expect(tetherConfig.target).toHaveBeenCalled();
    });

    it('should grab dom node from string', () => {
      state = true;
      tetherConfig.target = 'body';
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(instance._element.textContent).toBe('Content');
      expect(instance._tether.enabled).toBe(true);
    });
  });

  describe('handleDocumentClick', () => {
    it('should call toggle on document click', () => {
      state = true;
      spyOn(TetherContent.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(TetherContent.prototype, 'toggle').and.callThrough();

      mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(0);

      document.body.click();

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(1);
    });

    it('should call toggle on container click', () => {
      state = true;
      spyOn(TetherContent.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(TetherContent.prototype, 'toggle').and.callThrough();

      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(0);

      instance._element.click();

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(1);
    });

    it('should not call toggle on tethered element click', () => {
      state = true;
      spyOn(TetherContent.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(TetherContent.prototype, 'toggle').and.callThrough();

      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(0);

      instance._element.childNodes[0].click();

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(0);
    });
  });

  describe('handleProps', () => {
    it('should call .hide when false', () => {
      spyOn(TetherContent.prototype, 'componentDidMount').and.callThrough();
      spyOn(TetherContent.prototype, 'hide').and.callThrough();
      spyOn(TetherContent.prototype, 'handleProps').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentDidMount.calls.count()).toBe(1);
      expect(TetherContent.prototype.hide.calls.count()).toBe(1);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);
    });

    it('should call .show when true', () => {
      state = true;
      spyOn(TetherContent.prototype, 'componentDidMount').and.callThrough();
      spyOn(TetherContent.prototype, 'show').and.callThrough();
      spyOn(TetherContent.prototype, 'handleProps').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentDidMount.calls.count()).toBe(1);
      expect(TetherContent.prototype.show.calls.count()).toBe(1);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(true);
      expect(instance._element.className.indexOf('tether') > -1).toBe(true);
    });

    it('should be called on componentDidUpdate when isOpen changed', () => {
      spyOn(TetherContent.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(TetherContent.prototype, 'handleProps').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);

      state = true;
      wrapper.setProps({ isOpen: state });

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(1);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(2);
      expect(instance.props.isOpen).toBe(true);
    });

    it('should not be called on componentDidUpdate when isOpen did not change', () => {
      spyOn(TetherContent.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(TetherContent.prototype, 'handleProps').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);

      wrapper.setProps({ foo: 'bar' });

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(1);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);
    });
  });

  describe('renderIntoSubtree', () => {
    it('should be called when the content is shown', () => {
      spyOn(TetherContent.prototype, 'renderIntoSubtree').and.callThrough();
      mount(<TetherContent tether={tetherConfig} isOpen toggle={toggle}><p>Content</p></TetherContent>);

      expect(TetherContent.prototype.renderIntoSubtree.calls.count()).toBe(1);
    });

    it('should be called when the content is not shown', () => {
      spyOn(TetherContent.prototype, 'renderIntoSubtree').and.callThrough();
      mount(<TetherContent tether={tetherConfig} isOpen={false} toggle={toggle}><p>Content</p></TetherContent>);

      expect(TetherContent.prototype.renderIntoSubtree.calls.count()).toBe(0);
    });

    it('should be called on componentDidUpdate when isOpen did not change is true', () => {
      spyOn(TetherContent.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(TetherContent.prototype, 'renderIntoSubtree').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(TetherContent.prototype.renderIntoSubtree.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(true);

      wrapper.setProps({ children: <span>something</span> });

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(1);
      expect(TetherContent.prototype.renderIntoSubtree.calls.count()).toBe(2);
      expect(instance.props.isOpen).toBe(true);
    });

    it('should not be called on componentDidUpdate when isOpen changed to false', () => {
      spyOn(TetherContent.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(TetherContent.prototype, 'renderIntoSubtree').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(TetherContent.prototype.renderIntoSubtree.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(true);

      wrapper.setProps({ isOpen: false });

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(1);
      expect(TetherContent.prototype.renderIntoSubtree.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);
    });

    it('should not be called on componentDidUpdate when isOpen did not change and is false', () => {
      spyOn(TetherContent.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(TetherContent.prototype, 'renderIntoSubtree').and.callThrough();
      const wrapper = mount(<TetherContent tether={tetherConfig} isOpen={false} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = wrapper.instance();

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(TetherContent.prototype.renderIntoSubtree.calls.count()).toBe(0);
      expect(instance.props.isOpen).toBe(false);

      wrapper.setProps({ children: <span>something</span> });

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(1);
      expect(TetherContent.prototype.renderIntoSubtree.calls.count()).toBe(0);
      expect(instance.props.isOpen).toBe(false);
    });
  });
});
