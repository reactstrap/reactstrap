import React from 'react';
import { Popper } from 'react-popper';
import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TooltipPopoverWrapper from '../TooltipPopoverWrapper';

describe('Tooltip', () => {
  let element;
  let container;

  beforeEach(() => {
    element = document.createElement('div');
    container = document.createElement('div');
    element.innerHTML =
      '<p id="target">This is the Tooltip <span id="innerTarget">target</span>.</p>';
    element.setAttribute('id', 'testContainer');
    container.setAttribute('id', 'container');
    container.setAttribute('data-testid', 'container');
    element.appendChild(container);
    document.body.appendChild(element);

    jest.useFakeTimers();
    jest.resetModules();
    Popper.mockClear();
  });

  afterEach(() => {
    jest.clearAllTimers();
    document.body.removeChild(element);
    element = null;
    container = null;
  });

  it('should render arrow by default', () => {
    render(
      <TooltipPopoverWrapper target="target" isOpen>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    expect(document.querySelector('.arrow')).toBeInTheDocument();
  });

  it('should render not render arrow if hiderArrow is true', () => {
    render(
      <TooltipPopoverWrapper target="target" isOpen hideArrow>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    expect(document.querySelector('.arrow')).not.toBeInTheDocument();
  });

  it('should not render children if isOpen is false', () => {
    render(
      <TooltipPopoverWrapper target="target" isOpen={false}>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    expect(screen.queryByText(/tooltip content/i)).not.toBeInTheDocument();
  });

  it('should render if isOpen is true', () => {
    render(
      <TooltipPopoverWrapper
        target="target"
        isOpen
        className="tooltip show"
        trigger="hover"
      >
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    expect(screen.queryByText(/tooltip content/i)).toBeInTheDocument();
    expect(document.querySelector('.tooltip.show')).toBeInTheDocument();
  });

  it('should render with target object', () => {
    render(
      <TooltipPopoverWrapper
        target={document.getElementById('target')}
        isOpen
        className="tooltip show"
      >
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    expect(document.getElementsByClassName('tooltip show')).toHaveLength(1);
    expect(screen.queryByText(/tooltip content/i)).toBeInTheDocument();
  });

  it('should toggle isOpen', () => {
    const { rerender } = render(
      <TooltipPopoverWrapper
        target="target"
        isOpen={false}
        className="tooltip show"
      >
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    expect(screen.queryByText(/tooltip content/i)).not.toBeInTheDocument();

    rerender(
      <TooltipPopoverWrapper target="target" isOpen className="tooltip show">
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    expect(screen.queryByText(/tooltip content/i)).toBeInTheDocument();

    rerender(
      <TooltipPopoverWrapper
        target="target"
        isOpen={false}
        className="tooltip show"
      >
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    jest.advanceTimersByTime(150);
    expect(screen.queryByText(/tooltip content/i)).not.toBeInTheDocument();
  });

  it('should handle target clicks', () => {
    const toggle = jest.fn();
    const { rerender } = render(
      <TooltipPopoverWrapper target="target" isOpen={false} toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    user.click(screen.getByText(/this is the Tooltip/i));
    jest.advanceTimersByTime(150);
    expect(toggle).toBeCalled();
    toggle.mockClear();

    rerender(
      <TooltipPopoverWrapper target="target" isOpen toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    user.click(screen.getByText(/this is the Tooltip/i));
    jest.advanceTimersByTime(150);
    expect(toggle).toBeCalled();
  });

  it('should handle inner target clicks', () => {
    const toggle = jest.fn();
    render(
      <TooltipPopoverWrapper target="target" isOpen={false} toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    user.click(screen.getByText(/target/i));
    jest.advanceTimersByTime(150);
    expect(toggle).toBeCalled();
  });

  it('should not do anything when document click outside of target', () => {
    const toggle = jest.fn();
    render(
      <TooltipPopoverWrapper target="target" isOpen={false} toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    user.click(screen.getByTestId('container'));
    expect(toggle).not.toBeCalled();
  });

  it('should open after receiving single touchstart and single click', () => {
    const toggle = jest.fn();
    render(
      <TooltipPopoverWrapper
        target="target"
        isOpen={false}
        toggle={toggle}
        trigger="click"
      >
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    user.click(screen.getByText(/target/i));
    jest.advanceTimersByTime(200);

    expect(toggle).toHaveBeenCalled();

    // TODO: RTL currently doesn't support touch events
  });

  it('should close after receiving single touchstart and single click', () => {
    const toggle = jest.fn();
    render(
      <TooltipPopoverWrapper
        target="target"
        isOpen
        toggle={toggle}
        trigger="click"
      >
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    user.click(screen.getByText(/target/i));
    jest.advanceTimersByTime(200);

    expect(toggle).toHaveBeenCalled();

    // TODO: RTL currently doesn't support touch events
  });

  it('should pass down custom modifiers', () => {
    render(
      <TooltipPopoverWrapper
        isOpen
        target="target"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [2, 2],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
            },
          },
        ]}
      >
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    expect(Popper.mock.calls[0][0].modifiers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'offset',
          options: {
            offset: [2, 2],
          },
        }),
      ]),
    );

    expect(Popper.mock.calls[0][0].modifiers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'preventOverflow',
          options: {
            boundary: 'viewport',
          },
        }),
      ]),
    );
  });

  describe('PopperContent', () => {
    beforeEach(() => {
      jest.doMock('../PopperContent', () => {
        return jest.fn((props) => {
          return props.children({
            update: () => {},
            ref: () => {},
            style: {},
            placement: props.placement,
            arrowProps: { ref: () => {}, style: {} },
            isReferenceHidden: false,
          });
        });
      });
    });

    it('should pass down cssModule', () => {
      // eslint-disable-next-line global-require
      const PopperContent = require('../PopperContent');
      // eslint-disable-next-line global-require
      const TooltipPopoverWrapper = require('../TooltipPopoverWrapper').default;

      const cssModule = {
        a: 'b',
      };

      render(
        <TooltipPopoverWrapper isOpen target="target" cssModule={cssModule}>
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      expect(PopperContent).toBeCalledTimes(1);

      expect(PopperContent.mock.calls[0][0]).toEqual(
        expect.objectContaining({
          cssModule: expect.objectContaining({
            a: 'b',
          }),
        }),
      );
    });

    it('should pass down offset', () => {
      // eslint-disable-next-line global-require
      const PopperContent = require('../PopperContent');
      // eslint-disable-next-line global-require
      const TooltipPopoverWrapper = require('../TooltipPopoverWrapper').default;

      render(
        <TooltipPopoverWrapper isOpen target="target" offset={[0, 12]}>
          Tooltip content
        </TooltipPopoverWrapper>,
      );

      expect(PopperContent).toBeCalledTimes(1);
      expect(PopperContent.mock.calls[0][0].offset).toEqual(
        expect.arrayContaining([0, 12]),
      );
    });

    it('should pass down flip', () => {
      // eslint-disable-next-line global-require
      const PopperContent = require('../PopperContent');
      // eslint-disable-next-line global-require
      const TooltipPopoverWrapper = require('../TooltipPopoverWrapper').default;

      render(
        <TooltipPopoverWrapper isOpen target="target" flip={false}>
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      expect(PopperContent).toBeCalledTimes(1);
      expect(PopperContent.mock.calls[0][0].flip).toBe(false);
    });

    it('should handle inner target click and correct placement', () => {
      const toggle = jest.fn();
      // eslint-disable-next-line global-require
      const PopperContent = require('../PopperContent');
      // eslint-disable-next-line global-require
      const TooltipPopoverWrapper = require('../TooltipPopoverWrapper').default;

      const { rerender } = render(
        <TooltipPopoverWrapper target="target" isOpen={false} toggle={toggle}>
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.click(screen.getByText(/target/i));
      jest.advanceTimersByTime(200);
      expect(toggle).toBeCalled();

      rerender(
        <TooltipPopoverWrapper target="target" isOpen toggle={toggle}>
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      expect(PopperContent.mock.calls[0][0].target.id).toBe('target');
    });
  });

  it('should not call props.toggle when disabled ', () => {
    const toggle = jest.fn();

    render(
      <TooltipPopoverWrapper target="target" disabled isOpen toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    user.click(screen.getByText(/target/i));

    expect(toggle).not.toHaveBeenCalled();
  });

  it('should not throw when props.toggle is not provided ', () => {
    render(
      <TooltipPopoverWrapper target="target" disabled isOpen>
        Tooltip Content
      </TooltipPopoverWrapper>,
    );

    user.click(screen.getByText(/target/i));
  });

  it('should not throw when passed a ref object as the target', () => {
    const targetObj = React.createRef();

    targetObj.current = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    const { unmount } = render(
      <TooltipPopoverWrapper isOpen={false} target={targetObj}>
        Yo!
      </TooltipPopoverWrapper>,
    );

    unmount();

    expect(targetObj.current.addEventListener).toHaveBeenCalled();
    expect(targetObj.current.removeEventListener).toHaveBeenCalled();
  });

  describe('multi target', () => {
    let targets;
    let targetContainer;
    beforeEach(() => {
      targetContainer = document.createElement('div');
      targetContainer.innerHTML =
        "<span class='example first'>Target 1</span><span class='example second'>Target 2<span class='inner_example'>Inner target</span></span>";
      element.appendChild(targetContainer);
      targets = targetContainer.querySelectorAll('.example');
    });

    afterEach(() => {
      element.removeChild(targetContainer);
      targets = null;
    });

    it('should attach tooltip on multiple target when a target selector matches multiple elements', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          target=".example"
          isOpen={false}
          toggle={toggle}
          delay={0}
        >
          Yo!
        </TooltipPopoverWrapper>,
      );

      user.click(targets[0]);
      jest.advanceTimersByTime(200);
      expect(toggle).toHaveBeenCalledTimes(1);

      user.click(targets[1]);
      jest.advanceTimersByTime(200);
      expect(toggle).toHaveBeenCalledTimes(2);
    });

    it('should attach tooltip on second target with correct placement, when inner element is clicked', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          target=".example"
          isOpen={false}
          toggle={toggle}
          delay={0}
        >
          Yo!
        </TooltipPopoverWrapper>,
      );

      user.click(targets[0]);
      jest.advanceTimersByTime(200);
      expect(toggle).toHaveBeenCalledTimes(1);
    });
  });

  describe('delay', () => {
    it('should accept a number', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          target="target"
          isOpen
          toggle={toggle}
          delay={200}
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.click(screen.getByText(/target/i));

      jest.advanceTimersByTime(100);
      expect(toggle).not.toBeCalled();
      jest.advanceTimersByTime(100);
      expect(toggle).toBeCalled();
    });

    it('should accept an object', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          target="target"
          isOpen
          toggle={toggle}
          delay={{ show: 400, hide: 400 }}
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.click(screen.getByText(/target/i));

      jest.advanceTimersByTime(200);
      expect(toggle).not.toBeCalled();
      jest.advanceTimersByTime(200);
      expect(toggle).toBeCalled();
    });

    it('should use default value if value is missing from object', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          target="target"
          isOpen
          toggle={toggle}
          delay={{ show: 0 }}
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.click(screen.getByText(/target/i));

      jest.advanceTimersByTime(10);
      expect(toggle).not.toBeCalled();
      jest.advanceTimersByTime(40); // default hide value is 50
      expect(toggle).toBeCalled();
    });
  });

  describe('hide', () => {
    it('should call toggle when isOpen', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper target="target" isOpen toggle={toggle}>
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.click(screen.getByText(/target/i));

      jest.advanceTimersByTime(200);
      expect(toggle).toHaveBeenCalled();
    });
  });

  describe('show', () => {
    it('should call toggle when isOpen', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper target="target" isOpen={false} toggle={toggle}>
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.click(screen.getByText(/target/i));

      jest.advanceTimersByTime(200);
      expect(toggle).toHaveBeenCalled();
    });
  });

  describe('onMouseOverTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      const toggle = jest.fn();
      const { rerender } = render(
        <TooltipPopoverWrapper
          target="target"
          isOpen={false}
          toggle={toggle}
          delay={200}
          trigger="hover"
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.hover(screen.getByText(/target/i));

      rerender(
        <TooltipPopoverWrapper
          target="target"
          isOpen
          toggle={toggle}
          delay={200}
          trigger="hover"
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.unhover(screen.getByText(/target/i));

      jest.advanceTimersByTime(200);
      expect(toggle).toHaveBeenCalledTimes(1);
    });

    it('should not call .toggle if isOpen', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          target="target"
          isOpen
          toggle={toggle}
          delay={200}
          trigger="hover"
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.hover(screen.getByText(/target/i));
      jest.advanceTimersByTime(200);
      expect(toggle).not.toHaveBeenCalled();
    });
  });

  describe('onMouseLeaveTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      const toggle = jest.fn();
      const { rerender } = render(
        <TooltipPopoverWrapper
          target="target"
          isOpen
          toggle={toggle}
          delay={200}
          trigger="hover"
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.unhover(screen.getByText(/target/i));

      rerender(
        <TooltipPopoverWrapper
          target="target"
          isOpen={false}
          toggle={toggle}
          delay={200}
          trigger="hover"
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.hover(screen.getByText(/target/i));

      jest.advanceTimersByTime(200);
      expect(toggle).toHaveBeenCalledTimes(1);
    });

    it('should not call .toggle if isOpen is false', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          target="target"
          isOpen={false}
          toggle={toggle}
          delay={200}
          trigger="hover"
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.unhover(screen.getByText(/target/i));
      jest.advanceTimersByTime(200);
      expect(toggle).not.toHaveBeenCalled();
    });
  });

  describe('autohide', () => {
    it('should keep Tooltip around when false and onmouseleave from Tooltip content', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          trigger="hover"
          target="target"
          autohide={false}
          isOpen
          toggle={toggle}
          delay={200}
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.hover(screen.getByText(/tooltip content/i));
      jest.advanceTimersByTime(200);
      expect(toggle).not.toHaveBeenCalled();
      user.unhover(screen.getByText(/tooltip content/i));
      jest.advanceTimersByTime(200);
      expect(toggle).toHaveBeenCalled();
    });

    it('clears showTimeout and hideTimeout in onMouseLeaveTooltipContent', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          trigger="hover"
          target="target"
          autohide={false}
          isOpen
          toggle={toggle}
          delay={200}
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.unhover(screen.getByText(/tooltip content/i));
      user.hover(screen.getByText(/tooltip content/i));
      user.unhover(screen.getByText(/tooltip content/i));

      jest.advanceTimersByTime(200);

      expect(toggle).toBeCalledTimes(1);
    });

    it('should not keep Tooltip around when autohide is true and Tooltip content is hovered over', () => {
      const toggle = jest.fn();
      render(
        <TooltipPopoverWrapper
          target="target"
          autohide
          isOpen
          toggle={toggle}
          delay={200}
          trigger="click hover focus"
        >
          Tooltip Content
        </TooltipPopoverWrapper>,
      );

      user.unhover(screen.getByText(/target/i));
      user.hover(screen.getByText(/tooltip content/i));

      jest.advanceTimersByTime(200);

      expect(toggle).toHaveBeenCalled();
    });

    it('should allow a function to be used as children', () => {
      const renderChildren = jest.fn();
      render(
        <TooltipPopoverWrapper target="target" isOpen>
          {renderChildren}
        </TooltipPopoverWrapper>,
      );
      expect(renderChildren).toHaveBeenCalled();
    });

    it('should render children properly when children is a function', () => {
      render(
        <TooltipPopoverWrapper
          target="target"
          isOpen
          className="tooltip show"
          trigger="hover"
        >
          {() => 'Tooltip Content'}
        </TooltipPopoverWrapper>,
      );

      expect(screen.getByText(/tooltip content/i)).toBeInTheDocument();
    });
  });
});
