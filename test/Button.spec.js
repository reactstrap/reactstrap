/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from '../lib';

describe('Button', () => {
  it('should render children', () => {
    const el = shallow(<Button>Ello world</Button>);

    expect(el.text()).toBe('Ello world');
  });

  it('should render custom element', () => {
    const Link = (props) => <a href="/home" {...props}>{props.children}</a>;
    const el = mount(<Button el={Link}>Home</Button>);

    expect(el.find('a').length).toBe(1);
    expect(el.text()).toBe('Home');
  });
});
