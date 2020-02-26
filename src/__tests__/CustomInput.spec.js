import React from 'react';
import { shallow, mount } from 'enzyme';
import { CustomInput } from '../';

describe('Custom Inputs', () => {
  describe('CustomCheckbox', () => {
    it('should render an optional label', () => {
      const checkbox = mount(<CustomInput type="checkbox" id="yo" label="Yo!" />);
      expect(checkbox.find('label').text()).toBe('Yo!');
    });

    it('should render children in the outer div', () => {
      const checkbox = shallow(<CustomInput type="checkbox" id="yo" />);
      expect(checkbox.type()).toBe('div');
    });

    it('should render an input with the type of checkbox', () => {
      const checkbox = mount(<CustomInput type="checkbox" id="yo" />);
      expect(checkbox.find('input').prop('type')).toBe('checkbox');
    });

    it('should pass id to both the input and label nodes', () => {
      const checkbox = mount(<CustomInput type="checkbox" id="yo" />);
      expect(checkbox.find('input').prop('id')).toBe('yo');
      expect(checkbox.find('label').prop('htmlFor')).toBe('yo');
    });

    it('should pass id to both the input and label nodes, with an overriden for on the label node', () => {
      const checkbox = mount(<CustomInput type="checkbox" htmlFor="custom-for" id="yo" />);
      expect(checkbox.find('input').prop('id')).toBe('yo');
      expect(checkbox.find('label').prop('htmlFor')).toBe('custom-for');
    });

    it('should pass classNames to the outer div', () => {
      const checkbox = mount(<CustomInput type="checkbox" id="yo" className="yo" />);
      expect(checkbox.find('.custom-control').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should add class is-invalid when invalid is true', () => {
      const checkbox = mount(<CustomInput type="checkbox" id="yo" invalid />);
      expect(checkbox.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const checkbox = mount(<CustomInput type="checkbox" id="yo" valid />);
      expect(checkbox.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should pass all other props to the input node', () => {
      const checkbox = mount(<CustomInput type="checkbox" id="yo" data-testprop="yo" />);
      expect(checkbox.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="checkbox" id="yo" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('CustomRadio', () => {
    it('should render an optional label', () => {
      const radio = mount(<CustomInput type="radio" id="yo" label="Yo!" />);
      expect(radio.find('label').text()).toBe('Yo!');
    });

    it('should render children in the outer div', () => {
      const radio = shallow(<CustomInput type="radio" id="yo" />);
      expect(radio.type()).toBe('div');
    });

    it('should render an input with the type of radio', () => {
      const radio = mount(<CustomInput type="radio" id="yo" />);
      expect(radio.find('input').prop('type')).toBe('radio');
    });

    it('should add class is-invalid when invalid is true', () => {
      const radio = mount(<CustomInput type="radio" id="yo" invalid />);
      expect(radio.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const radio = mount(<CustomInput type="radio" id="yo" valid />);
      expect(radio.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should pass id to both the input and label nodes', () => {
      const radio = mount(<CustomInput type="radio" id="yo" />);
      expect(radio.find('input').prop('id')).toBe('yo');
      expect(radio.find('label').prop('htmlFor')).toBe('yo');
    });

    it('should pass id to both the input and label nodes, with an overriden for on the label node', () => {
      const radio = mount(<CustomInput type="radio" htmlFor="custom-for" id="yo" />);
      expect(radio.find('input').prop('id')).toBe('yo');
      expect(radio.find('label').prop('htmlFor')).toBe('custom-for');
    });

    it('should pass classNames to the outer div', () => {
      const radio = mount(<CustomInput type="radio" id="yo" className="yo" />);
      expect(radio.find('.custom-control').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should pass all other props to the input node', () => {
      const radio = mount(<CustomInput type="radio" id="yo" data-testprop="yo" />);
      expect(radio.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="radio" id="yo" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('CustomSwitch', () => {
    it('should render an optional label', () => {
      const checkbox = mount(<CustomInput type="switch" id="yo" label="Yo!" />);
      expect(checkbox.find('label').text()).toBe('Yo!');
    });

    it('should render children in the outer div', () => {
      const checkbox = shallow(<CustomInput type="switch" id="yo" />);
      expect(checkbox.type()).toBe('div');
    });

    it('should render an input with the type of checkbox', () => {
      const checkbox = mount(<CustomInput type="switch" id="yo" />);
      expect(checkbox.find('input').prop('type')).toBe('checkbox');
    });

    it('should pass id to both the input and label nodes', () => {
      const checkbox = mount(<CustomInput type="switch" id="yo" />);
      expect(checkbox.find('input').prop('id')).toBe('yo');
      expect(checkbox.find('label').prop('htmlFor')).toBe('yo');
    });

    it('should pass id to both the input and label nodes, with an overriden for on the label node', () => {
      const checkbox = mount(<CustomInput type="switch" htmlFor="custom-for" id="yo" />);
      expect(checkbox.find('input').prop('id')).toBe('yo');
      expect(checkbox.find('label').prop('htmlFor')).toBe('custom-for');
    });

    it('should pass classNames to the outer div', () => {
      const checkbox = mount(<CustomInput type="switch" id="yo" className="yo" />);
      expect(checkbox.find('.custom-control').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should add class is-invalid when invalid is true', () => {
      const checkbox = mount(<CustomInput type="switch" id="yo" invalid />);
      expect(checkbox.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const checkbox = mount(<CustomInput type="switch" id="yo" valid />);
      expect(checkbox.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should pass all other props to the input node', () => {
      const checkbox = mount(<CustomInput type="switch" id="yo" data-testprop="yo" />);
      expect(checkbox.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="switch" id="yo" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('CustomSelect', () => {
    it('should render children in the outer div', () => {
      const select = shallow(<CustomInput type="select" id="yo" />);
      expect(select.type()).toBe('select');
    });

    it('should add class is-invalid when invalid is true', () => {
      const select = mount(<CustomInput type="select" id="yo" invalid />);
      expect(select.find('select').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const select = mount(<CustomInput type="select" id="yo" valid />);
      expect(select.find('select').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should add the size class when bsSize is provided', () => {
      const select = mount(<CustomInput type="select" id="yo" bsSize="lg" />);
      expect(select.find('select').prop('className').indexOf('custom-select-lg') > -1).toBeTruthy();
    });

    it('should pass classNames to the outer div', () => {
      const select = mount(<CustomInput type="select" id="yo" className="yo" />);
      expect(select.find('.custom-select').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should pass all other props to the input node', () => {
      const select = mount(<CustomInput type="select" id="yo" data-testprop="yo" />);
      expect(select.find('select').prop('data-testprop')).toBe('yo');
    });

    it('should remove type prop from the input node', () => {
      const select = mount(<CustomInput type="select" id="yo" />);
      expect(select.find('select').prop('type')).toBeUndefined();
    });

    it('should reference innerRef to the select node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="select" id="yo" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLSelectElement);
    });
  });

  describe('CustomFile', () => {
    it('should render children in the outer div', () => {
      const file = mount(<CustomInput type="file" id="yo" />);
      expect(file.find('.custom-file').first().type()).toBe('div');
    });

    it('should add class is-invalid when invalid is true', () => {
      const file = mount(<CustomInput type="file" id="yo" invalid />);
      expect(file.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const file = mount(<CustomInput type="file" id="yo" valid />);
      expect(file.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should render an input with the type of file', () => {
      const file = mount(<CustomInput type="file" id="yo" />);
      expect(file.find('input').prop('type')).toBe('file');
    });

    it('should pass id to both the input and label nodes', () => {
      const file = mount(<CustomInput type="file" id="yo" />);
      expect(file.find('input').prop('id')).toBe('yo');
      expect(file.find('label').prop('htmlFor')).toBe('yo');
    });

    it('should pass id to both the input and label nodes, with an overriden for on the label node', () => {
      const file = mount(<CustomInput type="file" htmlFor="custom-for" id="yo" />);
      expect(file.find('input').prop('id')).toBe('yo');
      expect(file.find('label').prop('htmlFor')).toBe('custom-for');
    });

    it('should pass classNames to the outer div', () => {
      const file = mount(<CustomInput type="file" id="yo" className="yo" />);
      expect(file.find('.custom-file').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should set the label when provided', () => {
      const file = mount(<CustomInput type="file" id="yo" label="yo" />);
      expect(file.find('label').text()).toBe('yo');
    });

    it('should pass all other props to the input node', () => {
      const file = mount(<CustomInput type="file" id="yo" data-testprop="yo" />);
      expect(file.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="file" id="yo" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });

    describe('onChange', () => {
      it('calls props.onChange if it exists', () => {
        const onChange = jest.fn();
        const file = mount(<CustomInput type="file" id="yo" onChange={onChange} />);

        file.find('input').hostNodes().simulate('change');
        expect(onChange).toHaveBeenCalled();
      });
    });

    it('removes fakepath from file name', () => {
      const file = mount(<CustomInput type="file" id="yo" />);

      file.find('input').hostNodes().simulate('change', {
        target:{
          value:'C:\\fakepath\\test.txt'
        }
      });

      expect(file.find('.custom-file-label').text()).toBe('test.txt');
    });

    it('lists multiple files when supported', () => {
      const file = mount(<CustomInput type="file" id="yo" multiple/>);

      file.find('input').hostNodes().simulate('change', {
        target:{
          value:'C:\\fakepath\\file1.txt',
          files:[
            {name:"file1.txt"},
            {name:'file2.txt'},
            {name:'file3.txt'},
          ]
        }
      })

      expect(file.find('.custom-file-label').text()).toBe('file1.txt, file2.txt, file3.txt');
    })
  });

  describe('CustomRange', () => {
    it('should render children in the outer div', () => {
      const range = shallow(<CustomInput type="range" id="yo" />);
      expect(range.type()).toBe('input');
    });

    it('should add class is-invalid when invalid is true', () => {
      const range = mount(<CustomInput type="range" id="yo" invalid />);
      expect(range.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const range = mount(<CustomInput type="range" id="yo" valid />);
      expect(range.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should render an input with the type of range', () => {
      const range = mount(<CustomInput type="range" id="yo" />);
      expect(range.find('input').prop('type')).toBe('range');
    });

    it('should pass all other props to the input node', () => {
      const range = mount(<CustomInput type="range" id="yo" data-testprop="yo" />);
      expect(range.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="range" id="yo" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });
});
