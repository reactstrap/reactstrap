import React from 'react';
import { shallow, mount } from 'enzyme';
import { CustomInput } from '../';

describe('Custom Inputs', () => {
  describe('CustomCheckbox', () => {
    it('should render an optional label', () => {
      const checkbox = mount(<CustomInput type="checkbox" label="Yo!" />);
      expect(checkbox.find('label').text()).toBe('Yo!');
    });

    it('should render children in the outer div', () => {
      const checkbox = shallow(<CustomInput type="checkbox" />);
      expect(checkbox.type()).toBe('div');
    });

    it('should render an input with the type of checkbox', () => {
      const checkbox = mount(<CustomInput type="checkbox" />);
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
      const checkbox = mount(<CustomInput type="checkbox" className="yo" />);
      expect(checkbox.find('.custom-control').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should add class is-invalid when invalid is true', () => {
      const checkbox = mount(<CustomInput type="checkbox" invalid />);
      expect(checkbox.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const checkbox = mount(<CustomInput type="checkbox" valid />);
      expect(checkbox.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should pass all other props to the input node', () => {
      const checkbox = mount(<CustomInput type="checkbox" data-testprop="yo" />);
      expect(checkbox.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="checkbox" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('CustomRadio', () => {
    it('should render an optional label', () => {
      const radio = mount(<CustomInput type="radio" label="Yo!" />);
      expect(radio.find('label').text()).toBe('Yo!');
    });

    it('should render children in the outer div', () => {
      const radio = shallow(<CustomInput type="radio" />);
      expect(radio.type()).toBe('div');
    });

    it('should render an input with the type of radio', () => {
      const radio = mount(<CustomInput type="radio" />);
      expect(radio.find('input').prop('type')).toBe('radio');
    });

    it('should add class is-invalid when invalid is true', () => {
      const radio = mount(<CustomInput type="radio" invalid />);
      expect(radio.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const radio = mount(<CustomInput type="radio" valid />);
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
      const radio = mount(<CustomInput type="radio" className="yo" />);
      expect(radio.find('.custom-control').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should pass all other props to the input node', () => {
      const radio = mount(<CustomInput type="radio" data-testprop="yo" />);
      expect(radio.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="radio" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('CustomSwitch', () => {
    it('should render an optional label', () => {
      const checkbox = mount(<CustomInput type="switch" label="Yo!" />);
      expect(checkbox.find('label').text()).toBe('Yo!');
    });

    it('should render children in the outer div', () => {
      const checkbox = shallow(<CustomInput type="switch" />);
      expect(checkbox.type()).toBe('div');
    });

    it('should render an input with the type of checkbox', () => {
      const checkbox = mount(<CustomInput type="switch" />);
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
      const checkbox = mount(<CustomInput type="switch" className="yo" />);
      expect(checkbox.find('.custom-control').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should add class is-invalid when invalid is true', () => {
      const checkbox = mount(<CustomInput type="switch" invalid />);
      expect(checkbox.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const checkbox = mount(<CustomInput type="switch" valid />);
      expect(checkbox.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should pass all other props to the input node', () => {
      const checkbox = mount(<CustomInput type="switch" data-testprop="yo" />);
      expect(checkbox.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="switch" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('CustomSelect', () => {
    it('should render children in the outer div', () => {
      const select = shallow(<CustomInput type="select" />);
      expect(select.type()).toBe('select');
    });

    it('should add class is-invalid when invalid is true', () => {
      const select = mount(<CustomInput type="select" invalid />);
      expect(select.find('select').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const select = mount(<CustomInput type="select" valid />);
      expect(select.find('select').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should add the size class when bsSize is provided', () => {
      const select = mount(<CustomInput type="select" bsSize="lg" />);
      expect(select.find('select').prop('className').indexOf('custom-select-lg') > -1).toBeTruthy();
    });

    it('should pass classNames to the outer div', () => {
      const select = mount(<CustomInput type="select" className="yo" />);
      expect(select.find('.custom-select').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should pass all other props to the input node', () => {
      const select = mount(<CustomInput type="select" data-testprop="yo" />);
      expect(select.find('select').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the select node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="select" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLSelectElement);
    });
  });

  describe('CustomFile', () => {
    it('should render children in the outer div', () => {
      const file = mount(<CustomInput type="file" />);
      expect(file.find('.custom-file').first().type()).toBe('div');
    });

    it('should add class is-invalid when invalid is true', () => {
      const file = mount(<CustomInput type="file" invalid />);
      expect(file.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const file = mount(<CustomInput type="file" valid />);
      expect(file.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should render an input with the type of file', () => {
      const file = mount(<CustomInput type="file" />);
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
      const file = mount(<CustomInput type="file" className="yo" />);
      expect(file.find('.custom-file').prop('className').indexOf('yo') > -1).toBeTruthy();
    });

    it('should set the label when provided', () => {
      const file = mount(<CustomInput type="file" label="yo" />);
      expect(file.find('label').text()).toBe('yo');
    });

    it('should pass all other props to the input node', () => {
      const file = mount(<CustomInput type="file" data-testprop="yo" />);
      expect(file.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="file" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });

    describe('onChange', () => {
      it('calls props.onChange if it exists', () => {
        const onChange = jest.fn();
        const file = mount(<CustomInput type="file" onChange={onChange} />);

        file.find('input').hostNodes().simulate('change');
        expect(onChange).toHaveBeenCalled();
      });
    });

    it('removes fakepath from file name', () => {
      const file = mount(<CustomInput type="file" />);

      file.find('input').hostNodes().simulate('change', {
        target:{
          value:'C:\\fakepath\\test.txt'
        }
      });

      expect(file.find('.custom-file-label').text()).toBe('test.txt');
    });

    it('lists multiple files when supported', () => {
      const file = mount(<CustomInput type="file" multiple/>);

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
      const range = shallow(<CustomInput type="range" />);
      expect(range.type()).toBe('input');
    });

    it('should add class is-invalid when invalid is true', () => {
      const range = mount(<CustomInput type="range" invalid />);
      expect(range.find('input').prop('className').indexOf('is-invalid') > -1).toBeTruthy();
    });

    it('should add class is-valid when valid is true', () => {
      const range = mount(<CustomInput type="range" valid />);
      expect(range.find('input').prop('className').indexOf('is-valid') > -1).toBeTruthy();
    });

    it('should render an input with the type of range', () => {
      const range = mount(<CustomInput type="range" />);
      expect(range.find('input').prop('type')).toBe('range');
    });

    it('should pass all other props to the input node', () => {
      const range = mount(<CustomInput type="range" data-testprop="yo" />);
      expect(range.find('input').prop('data-testprop')).toBe('yo');
    });

    it('should reference innerRef to the input node', () => {
      const ref = React.createRef();
      mount(<CustomInput type="range" innerRef={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });
});
