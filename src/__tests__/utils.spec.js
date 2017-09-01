import * as Utils from '../utils';

describe('Utils', () => {
  describe('mapToCssModules', () => {
    describe('without css module', () => {
      it('should return a string', () => {
        expect(Utils.mapToCssModules('btn btn-primary')).toEqual(expect.any(String));
      });

      it('should return the classnames it was given, unchanged', () => {
        expect(Utils.mapToCssModules('btn btn-primary')).toBe('btn btn-primary');
      });
    });

    describe('with css module', () => {
      it('should return a string', () => {
        const cssModule = {
          btn: 'a1',
          'btn-success': 'b1',
          'btn-primary': 'c2',
        };
        expect(Utils.mapToCssModules('btn btn-primary', cssModule)).toEqual(expect.any(String));
      });

      it('should return the mapped classnames', () => {
        const cssModule = {
          btn: 'a1',
          'btn-success': 'b1',
          'btn-primary': 'c2',
        };
        expect(Utils.mapToCssModules('btn btn-primary', cssModule)).toBe('a1 c2');
      });

      it('should return the original classname when it is not in the map', () => {
        const cssModule = {
          btn: 'a1',
          'btn-success': 'b1',
        };
        expect(Utils.mapToCssModules('btn btn-primary', cssModule)).toBe('a1 btn-primary');
      });
    });
  });

  describe('omit', () => {
    it('should omit keys', () => {
      const input = {
        hello: 'world',
        speed: 'fast',
        size: 'small'
      };
      expect(Utils.omit(input, ['hello'])).toEqual({ speed: 'fast', size: 'small' });
    });

    it('should not alter source object', () => {
      const input = {
        hello: 'world',
        speed: 'fast',
        size: 'small'
      };
      expect(Utils.omit(input, ['hello'])).toEqual({ speed: 'fast', size: 'small' });
      expect(input).toEqual({
        hello: 'world',
        speed: 'fast',
        size: 'small'
      });
    });

    it('should ignore non-existing keys', () => {
      const input = {
        hello: 'world',
        speed: 'fast',
        size: 'small'
      };
      expect(Utils.omit(input, ['non-existing', 'hello'])).toEqual({ speed: 'fast', size: 'small' });
    });

    it('should return a new object', () => {
      const input = {
        hello: 'world'
      };
      // toBe tests equality using `===` and so will test if it's not the same object.
      expect(Utils.omit(input, [])).not.toBe(input);
    });
  });

  // TODO
  // describe('getScrollbarWidth', () => {
  //   // jsdom workaround https://github.com/tmpvar/jsdom/issues/135#issuecomment-68191941
  //   Object.defineProperties(window.HTMLElement.prototype, {
  //     offsetLeft: {
  //       get: function () { return parseFloat(window.getComputedStyle(this).marginLeft) || 0; }
  //     },
  //     offsetTop: {
  //       get: function () { return parseFloat(window.getComputedStyle(this).marginTop) || 0; }
  //     },
  //     offsetHeight: {
  //       get: function () { return parseFloat(window.getComputedStyle(this).height) || 0; }
  //     },
  //     offsetWidth: {
  //       get: function () { return parseFloat(window.getComputedStyle(this).width) || 0; }
  //     }
  //   });
  //
  //   it('should return scrollbarWidth', () => {
  //     expect(Utils.getScrollbarWidth()).toBe();
  //   });
  // });

  // TODO verify setScrollbarWidth is called with values when body overflows
  // it('should conditionallyUpdateScrollbar when isBodyOverflowing is true', () => {
  //   const stubbedSetScrollbarWidth = jest.fn().and.callThrough();
  //   const prevClientWidth = document.body.clientWidth;
  //   const prevWindowInnerWidth = window.innerWidth;
  //   document.body.clientWidth = 100;
  //   window.innerWidth = 500;
  //
  //   conditionallyUpdateScrollbar();
  //   expect(stubbedSetScrollbarWidth).toHaveBeenCalled();
  //
  //   document.body.clientWidth = prevClientWidth;
  //   window.innerWidth = prevWindowInnerWidth;
  // });
});
