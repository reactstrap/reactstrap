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

  describe('DOMElement', () => {
    it('should not return an error when the prop is an instance of an Element', () => {
      const props = {
        dom: document.createElement('div'),
      };
      const propName = 'dom';
      const componentName = 'ComponentName';

      expect(Utils.DOMElement(props, propName, componentName)).toBeUndefined();
    });

    it('should return an error when the prop is NOT an instance of an Element', () => {
      const props = {
        dom: 'not an Element',
      };
      const propName = 'dom';
      const componentName = 'ComponentName';

      expect(Utils.DOMElement(props, propName, componentName)).toEqual(new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName +
        '`. Expected prop to be an instance of Element. Validation failed.'
      ));
    });
  });

  describe('getTarget', () => {
    it('should return the result of target if target is a function', () => {
      const data = {};
      const spy = jest.fn(() => data);
      expect(Utils.getTarget(spy)).toEqual(data);
      expect(spy).toHaveBeenCalled();
    });

    it('should return all matching elements if allElement param is true', () => {
      const element = document.createElement('div');
       element.innerHTML = `<span class='example'>span 1</span>
       <span class='example'>span 2</span>`;
      document.body.appendChild(element);

      jest.spyOn(document, 'querySelectorAll');
      const elements = Utils.getTarget('.example', true);
      expect(elements.length).toEqual(2);
      expect(elements[1].textContent).toEqual('span 2');
      expect(document.querySelectorAll).toHaveBeenCalledWith('.example');
      document.querySelectorAll.mockRestore();
    });

    it('should return elements as array like object if allElement param is true', () => {
      const data = {};
      const spy = jest.fn(() => data);
      const elements = Utils.getTarget(spy, true);
      expect(elements).toHaveProperty('length');
      expect(elements).toContain(data);
      expect(spy).toHaveBeenCalled();
    });

    it('should query the document for the target if the target is a string', () => {
      const element = document.createElement('div');
      element.className = 'thing';
      document.body.appendChild(element);
      jest.spyOn(document, 'querySelectorAll');
      expect(Utils.getTarget('.thing')).toEqual(element);
      expect(document.querySelectorAll).toHaveBeenCalledWith('.thing');
      document.querySelectorAll.mockRestore();
    });

    it('should query the document for the id target if the target is a string and could not be found normally', () => {
      const element = document.createElement('div');
      element.setAttribute('id', 'thing');
      document.body.appendChild(element);
      jest.spyOn(document, 'querySelectorAll');
      expect(Utils.getTarget('thing')).toEqual(element);
      expect(document.querySelectorAll).toHaveBeenCalledWith('#thing');
      document.querySelectorAll.mockRestore();
    });

    it('should return the input target if it is not a function nor a string', () => {
      const target = {};
      expect(Utils.getTarget(target)).toEqual(target);
    });

    it('should not return an error when the target could be identified', () => {
      const element = document.createElement('div');
      element.className = 'thing';
      document.body.appendChild(element);
      jest.spyOn(document, 'querySelector');
      expect(() => {
        Utils.getTarget('.thing');
      }).not.toThrow();
    });

    it('should return an error when the target could not be identified', () => {
      const target = 'not a target';
      expect(() => {
        Utils.getTarget(target);
      }).toThrow(`The target '${target}' could not be identified in the dom, tip: check spelling`);
    });

    it('should return the value of the `current` object if it is a react Ref object', () => {
      const target = { current: { name: 'hello' } };
      expect(Utils.getTarget(target)).toEqual(target.current);
    });

    it('should return null if the `current` property of the target is null', () => {
      const target = { current: null };
      expect(Utils.getTarget(target)).toBeNull();
      expect(Utils.getTarget(target, true)).toStrictEqual([]);
    });
  });

  describe('setGlobalCssModule', () => {
    it('should return the mapped classnames', () => {
      const globalCssModule = {
        btn: 'a1',
        'btn-success': 'b1',
        'btn-primary': 'c2',
      };
      Utils.setGlobalCssModule(globalCssModule);
      expect(Utils.mapToCssModules('btn btn-primary')).toBe('a1 c2');
    });
  });

  describe('isFunction', function() {
    it('should return `true` for functions', function() {
      function test(){}
      expect(Utils.isFunction(test)).toBe(true);
      expect(Utils.isFunction(Array.prototype.slice)).toBe(true);
    });

    it('should return `true` for async functions', function() {
      async function asyncFunc() {}
      expect(Utils.isFunction(asyncFunc)).toEqual(typeof asyncFunc === 'function');
    });

    it('should return `true` for generator functions', function() {
      function* genFunc() {}
      expect(Utils.isFunction(genFunc)).toEqual(typeof genFunc === 'function');
    });


    it('should return `false` for non-functions', function() {
      function toArgs(array) {
        return (function() { return arguments; }.apply(undefined, array));
      }
      expect(Utils.isFunction(toArgs([1, 2, 3]))).toBe(false);
      expect(Utils.isFunction([1, 2, 3])).toBe(false);
      expect(Utils.isFunction(true)).toBe(false);
      expect(Utils.isFunction(new Date())).toBe(false);
      expect(Utils.isFunction(new Error())).toBe(false);
      expect(Utils.isFunction({ 'a': 1 })).toBe(false);
      expect(Utils.isFunction(1)).toBe(false);
      expect(Utils.isFunction(/x/)).toBe(false);
      expect(Utils.isFunction('a')).toBe(false);
      expect(Utils.isFunction(Symbol("a"))).toBe(false);
      //
      if (document) {
        expect(Utils.isFunction(document.getElementsByTagName('body'))).toBe(false);
      }
    });

  });

  describe('isObject', function() {
    it('should return `true` for objects', function() {
      expect(Utils.isObject([1, 2, 3])).toBe(true);
      expect(Utils.isObject(Object(false))).toBe(true);
      expect(Utils.isObject(new Date())).toBe(true);
      expect(Utils.isObject(new Error())).toBe(true);
      expect(Utils.isObject({ 'a': 1 })).toBe(true);
      expect(Utils.isObject({ 'a': 1 })).toBe(true);
      expect(Utils.isObject(Object(0))).toBe(true);
      expect(Utils.isObject(/x/)).toBe(true);
      expect(Utils.isObject(Object("a"))).toBe(true);
      if (document) {
        expect(Utils.isObject(document.body)).toBe(true);
      }
    });

    it('should return `false` for non-objects', function() {

      expect(Utils.isObject(0)).toBe(false);
      expect(Utils.isObject(false)).toBe(false);
      expect(Utils.isObject(1)).toBe(false);
    });

  });

  describe('toNumber', function() {
    it('should return number', function() {
      expect(Utils.toNumber("5")).toEqual(5);
      expect(Utils.toNumber("5.0")).toEqual(5);
      expect(Utils.toNumber("1.1")).toEqual(1.1);
      expect(Utils.toNumber("-1.1")).toEqual(-1.1);
      expect(Utils.toNumber(0/0)).toEqual(NaN);
      expect(Utils.toNumber(0)).toEqual(0);

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
