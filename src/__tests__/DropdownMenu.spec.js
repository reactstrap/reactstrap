import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RPopper from 'react-popper';
import { DropdownContext } from '../DropdownContext';
import { DropdownMenu } from '..';

const customRender = (ui, providerProps) => {
  return render(
    <DropdownContext.Provider value={providerProps}>
      {ui}
    </DropdownContext.Provider>,
  );
};

describe('DropdownMenu', () => {
  const contextProps = {
    isOpen: false,
    direction: 'down',
    inNavbar: false,
  };

  beforeEach(() => {
    contextProps.isOpen = false;
    contextProps.direction = 'down';
    contextProps.inNavbar = false;
  });

  it('should render children', () => {
    customRender(
      <DropdownMenu>
        Content
      </DropdownMenu>, contextProps,
    )

    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('should not have the class "show" when isOpen context is false', () => {
    customRender(
      <DropdownMenu>
        Content
      </DropdownMenu>, contextProps
    );

    expect(screen.getByText(/content/i)).not.toHaveClass('show');
  });

  it('should have the class "show" when isOpen context is true', () => {
    contextProps.isOpen = true;
    customRender(
      <DropdownMenu>
        Content
      </DropdownMenu>, contextProps
    )
    expect(screen.getByText(/content/i)).toHaveClass('show');
  });

  it('should render left aligned menus by default', () => {
    contextProps.isOpen = true;
    customRender(
      <DropdownMenu>Ello world</DropdownMenu>, contextProps
    );

    expect(screen.getByText(/ello world/i)).not.toHaveClass('dropdown-menu-end');
  });

  it('should render right aligned menus', () => {
    contextProps.isOpen = true;
    customRender(

      <DropdownMenu end>Ello world</DropdownMenu>, contextProps

    );

    expect(screen.getByText(/ello world/i)).toHaveClass('dropdown-menu-end');
  });

  it('should render down when direction is unknown on the context', () => {
    contextProps.isOpen = true;
    contextProps.direction = 'unknown';
    customRender(
      <DropdownMenu>Ello world</DropdownMenu>, contextProps
    );

    expect(screen.getByText(/ello world/i)).toHaveAttribute('data-popper-placement', 'bottom-start');
  });

  it('should render down when direction is "down" on the context', () => {
    contextProps.isOpen = true;
    customRender(

      <DropdownMenu>Ello world</DropdownMenu>, contextProps

    );

    expect(screen.getByText(/ello world/i)).toHaveAttribute('data-popper-placement', 'bottom-start');
  });

  it('should render up when direction is "up" on the context', () => {
    contextProps.isOpen = true;
    contextProps.direction = 'up';
    customRender(

      <DropdownMenu>Ello world</DropdownMenu>, contextProps

    );
    expect(screen.getByText(/ello world/i)).toHaveAttribute('data-popper-placement', 'top-start');
    // expect(wrapper.find(Popper).prop('placement')).toBe('top-start');
  });

  it('should render left when direction is "start" on the context', () => {
    contextProps.isOpen = true;
    contextProps.direction = 'start';
    customRender(

      <DropdownMenu>Ello world</DropdownMenu>, contextProps

    );
    expect(screen.getByText(/ello world/i)).toHaveAttribute('data-popper-placement', 'left-start');
    // expect(wrapper.find(Popper).prop('placement')).toBe('left-start');
  });

  it('should render right when direction is "end" on the context', () => {
    contextProps.isOpen = true;
    contextProps.direction = 'end';
    customRender(

      <DropdownMenu>Ello world</DropdownMenu>, contextProps

    );
    expect(screen.getByText(/ello world/i)).toHaveAttribute('data-popper-placement', 'right-start');
    // expect(wrapper.find(Popper).prop('placement')).toBe('right-start');
  });

  it('should not disable flip modifier by default', () => {
    jest.doMock('react-popper', () => ({
      Popper: jest.fn(() => null),
    }));
    // eslint-disable-next-line global-require
    const { Popper } = require('react-popper');
    // eslint-disable-next-line global-require
    const { DropdownMenu } = require('..');

    contextProps.isOpen = true;

    // render(
    //   <DropdownContext.Provider value={contextProps}>
    //     <DropdownMenu>Ello world</DropdownMenu>
    //   </DropdownContext.Provider>
    // )

    customRender(
      <DropdownMenu>Ello world</DropdownMenu>, contextProps
    )

    expect(Popper).toHaveBeenCalled();
  });

  // it('should not disable flip modifier by default', () => {
  //   jest.doMock('react-popper', () => ({
  //     Popper: jest.fn(() => null),
  //   }));
  //   // eslint-disable-next-line global-require
  //   const { Popper } = require('react-popper');
  //   // eslint-disable-next-line global-require
  //   const { DropdownMenu } = require('..');

  //   contextProps.isOpen = true;

  //   // render(
  //   //   <DropdownContext.Provider value={contextProps}>
  //   //     <DropdownMenu>Ello world</DropdownMenu>
  //   //   </DropdownContext.Provider>
  //   // )

  //   customRender(
  //     <DropdownMenu>Ello world</DropdownMenu>, contextProps
  //   )

  //   expect(Popper).toHaveBeenCalled();
  // });

  // it('should disable flip modifier when flip is false', () => {
  //   contextProps.isOpen = true;
  //   customRender(
  // 
  //       <DropdownMenu flip={false}>Ello world</DropdownMenu>
  //     
  //   );

  //   expect(wrapper.find(Popper).prop('modifiers')).toEqual([
  //     { enabled: false, name: 'flip' },
  //   ]);
  // });

  // it('should position using fixed mode', () => {
  //   contextProps.isOpen = true;
  //   customRender(
  // 
  //       <DropdownMenu strategy="fixed">Ello world</DropdownMenu>
  //     
  //   );

  //   expect(wrapper.find(Popper).prop('strategy')).toBe('fixed');
  // });

  // it('should not render Popper when isOpen is false', () => {
  //   customRender(
  // 
  //       <DropdownMenu end>Ello world</DropdownMenu>
  //     
  //   );

  //   expect(wrapper.find(Popper).length).toBe(0);
  // });

  // it('should render custom tag', () => {
  //   customRender(
  // 
  //       <DropdownMenu tag="main">Yo!</DropdownMenu>
  //     
  //   );

  //   expect(wrapper.text()).toBe('Yo!');
  //   expect(wrapper.childAt(0).hasClass('dropdown-menu')).toBe(true);
  //   expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe('main');
  // });

  // describe('using container', () => {
  //   let element;

  //   beforeEach(() => {
  //     element = document.createElement('div');
  //     document.body.appendChild(element);
  //   });

  //   afterEach(() => {
  //     document.body.removeChild(element);
  //     element = null;
  //   });

  //   it('should render inside container', () => {
  //     isOpen = true;
  //     element.innerHTML = '<div id="anotherContainer"></div>';
  //     customRender(
  //   
  //         <DropdownMenu container="#anotherContainer">My body</DropdownMenu>
  //       
  //     );

  //     expect(document.getElementById('anotherContainer').innerHTML).toContain(
  //       'My body',
  //     );
  //     expect(wrapper.text()).toBe('My body');
  //   });
  // });

  // it('should not have the class "dropdown-menu-dark" by default', () => {
  //   isOpen = true;
  //   customRender(
  // 
  //       <DropdownMenu>
  //         <p>Keep it light</p>
  //       </DropdownMenu>
  //     
  //   );

  //   expect(
  //     wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-dark'),
  //   ).toBe(false);
  // });

  // it('should have the class "dropdown-menu-dark" when dark is true', () => {
  //   isOpen = true;
  //   customRender(
  // 
  //       <DropdownMenu dark>
  //         <p>Let&apos;s go dark</p>
  //       </DropdownMenu>
  //     
  //   );

  //   expect(
  //     wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-dark'),
  //   ).toBe(true);
  // });
});
