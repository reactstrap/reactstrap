import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from 'reactstrap';

describe('Progress', () => {
  it('should render with "progress" tag by default', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.type()).toBe('progress');
  });

  it('should render with "progress" class', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.hasClass('progress')).toBe(true);
  });

  it('should render with "value" 0 by default', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.prop('value')).toBe(0);
  });

  it('should render with "max" 100 by default', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.prop('max')).toBe(100);
  });

  it('should render with the given "value" when passed as string prop', () => {
    const wrapper = shallow(<Progress value="10" />);

    expect(wrapper.prop('value')).toBe('10');
  });

  it('should render with the given "value" when passed as number prop', () => {
    const wrapper = shallow(<Progress value={10} />);

    expect(wrapper.prop('value')).toBe(10);
  });

  it('should render with the given "max" when passed as string prop', () => {
    const wrapper = shallow(<Progress max="10" />);

    expect(wrapper.prop('max')).toBe('10');
  });

  it('should render with the given "max" when passed as number prop', () => {
    const wrapper = shallow(<Progress max={10} />);

    expect(wrapper.prop('max')).toBe(10);
  });

  it('should render with "progress-striped" class when striped prop is truthy', () => {
    const wrapper = shallow(<Progress striped />);

    expect(wrapper.hasClass('progress-striped')).toBe(true);
  });

  it('should render with "progress-striped" and "progress-animated" classes when animated prop is truthy', () => {
    const wrapper = shallow(<Progress animated />);

    expect(wrapper.hasClass('progress-striped')).toBe(true);
    expect(wrapper.hasClass('progress-animated')).toBe(true);
  });

  it('should render with "progress-${color}" class when color prop is defined', () => {
    const wrapper = shallow(<Progress color="yo" />);

    expect(wrapper.hasClass('progress-yo')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Progress className="other" />);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('progress')).toBe(true);
  });

  it('should have div fallback for IE9', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.childAt(0).type()).toBe('div');
  });

  describe('div fallback', () => {
    it('should render with "progress" class', () => {
      const div = shallow(<Progress />).childAt(0);

      expect(div.hasClass('progress')).toBe(true);
    });

    it('should render with "progress-animated" class when animated is truthy', () => {
      const div = shallow(<Progress animated />).childAt(0);

      expect(div.hasClass('progress-animated')).toBe(true);
    });

    it('should render additional classes', () => {
      const div = shallow(<Progress className="other" />).childAt(0);

      expect(div.hasClass('other')).toBe(true);
      expect(div.hasClass('progress')).toBe(true);
    });

    it('should have a span', () => {
      const div = shallow(<Progress />).childAt(0);

      expect(div.childAt(0).type()).toBe('span');
    });

    describe('the span', () => {
      it('should render with "progress-bar" class', () => {
        const span = shallow(<Progress />).childAt(0).childAt(0);

        expect(span.hasClass('progress-bar')).toBe(true);
      });

      it('should render with "progress-bar-striped" class when striped is truthy', () => {
        const span = shallow(<Progress striped />).childAt(0).childAt(0);

        expect(span.hasClass('progress-bar-striped')).toBe(true);
      });

      it('should render with "progress-bar-striped" class when animated is truthy', () => {
        const span = shallow(<Progress animated />).childAt(0).childAt(0);

        expect(span.hasClass('progress-bar-striped')).toBe(true);
      });

      it('should render with a style width matching the percent of the fill', () => {
        const span = shallow(<Progress value="25" />).childAt(0).childAt(0);

        expect(span.prop('style').width).toBe('25%');
      });

      it('should render with a style width matching the percent of the fill (with max)', () => {
        const span = shallow(<Progress value="25" max="50" />).childAt(0).childAt(0);

        expect(span.prop('style').width).toBe('50%');
      });
    });
  });

  describe('with a custom tag', () => {
    it('should render custom tag', () => {
      const wrapper = shallow(<Progress tag="main" />);

      expect(wrapper.type()).toBe('main');
    });

    it('should have a span', () => {
      const span = shallow(<Progress tag="main" />).childAt(0);

      expect(span.type()).toBe('span');
    });

    describe('the span', () => {
      it('should render with "progress-bar" class', () => {
        const span = shallow(<Progress tag="main" />).childAt(0);

        expect(span.hasClass('progress-bar')).toBe(true);
      });

      it('should render with "progress-bar-striped" class when striped is truthy', () => {
        const span = shallow(<Progress tag="main" striped />).childAt(0);

        expect(span.hasClass('progress-bar-striped')).toBe(true);
      });

      it('should render with "progress-bar-striped" class when animated is truthy', () => {
        const span = shallow(<Progress tag="main" animated />).childAt(0);

        expect(span.hasClass('progress-bar-striped')).toBe(true);
      });

      it('should render with a style width matching the percent of the fill', () => {
        const span = shallow(<Progress tag="main" value="25" />).childAt(0);

        expect(span.prop('style').width).toBe('25%');
      });

      it('should render with a style width matching the percent of the fill (with max)', () => {
        const span = shallow(<Progress tag="main" value="25" max="50" />).childAt(0);

        expect(span.prop('style').width).toBe('50%');
      });
    });
  });
});
