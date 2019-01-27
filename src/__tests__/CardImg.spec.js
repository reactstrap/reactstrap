import React from 'react';
import { shallow, mount } from 'enzyme';
import { CardImg } from '../';

describe('CardImg', () => {
  it('should render with "card-img" class', () => {
    const wrapper = shallow(<CardImg src="/path/image.png" />);

    expect(wrapper.hasClass('card-img')).toBe(true);
  });

  it('should render top class name', () => {
    const wrapper = shallow(<CardImg top src="/path/image.png" />);

    expect(wrapper.hasClass('card-img-top')).toBe(true);
  });

  it('should render bottom class name', () => {
    const wrapper = shallow(<CardImg bottom src="/path/image.png" />);

    expect(wrapper.hasClass('card-img-bottom')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardImg tag="image" src="/path/image.png" />);

    expect(wrapper.find('image').length).toBe(1);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    mount(<><CardImg ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
