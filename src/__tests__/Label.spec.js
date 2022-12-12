  import React from 'react';
// import { shallow } from 'enzyme';
import { screen, render } from "@testing-library/react";
import { Label } from '..';
import { testForDefaultTag, testForCustomClass, testForChildrenInComponent, testForCustomTag } from "../testUtils"

// jest, react-testing-library


describe('Label', () => {
  it('should render a label tag by default', () => {
    testForDefaultTag(Label, 'label');
  });

  it('should render children', () => {
    testForChildrenInComponent(Label);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(Label);
  });

  it('should render with "col-form-label" class when a col is provided', () => {
    render(<Label sm="6">Yo!</Label>)
    expect(screen.getByText(/yo/i)).toHaveClass('col-form-label')

    // const wrapper = shallow(<Label sm="6">Yo!</Label>);

    // expect(wrapper.hasClass('col-form-label')).toBe(true);
  });

  it('should not render with "form-label" class when a col is provided', () => {

    render(<Label sm="6">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).not.toHaveClass('form-label')
    // expect(wrapper.hasClass('form-label')).toBe(false);
  });







  it('should render with "form-label" class when a col is not provided', () => {
    render(<Label >Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('form-label');

    // const wrapper = shallow(<Label>Yo!</Label>);

    // expect(wrapper.hasClass('form-label')).toBe(true);
  });

  it('should render with "form-check-label" class when check is specified', () => {

    render(<Label check>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('form-check-label');
    // const wrapper = shallow(<Label check>Yo!</Label>);

    // expect(wrapper.hasClass('form-check-label')).toBe(true);
  });


  it('should not render with "form-label" class when check is specified', () => {
      render(<Label check>Yo!</Label>);
      expect(screen.getByText(/yo!/i)).not.toHaveClass('form-label');
    // const wrapper = shallow(<Label check>Yo!</Label>);

    // expect(wrapper.hasClass('form-label')).toBe(false);
  });

  it('should pass col size specific classes as Strings', () => {
      render(<Label sm="6">Yo!</Label>);
      expect(screen.getByText(/yo!/i)).toHaveClass('col-sm-6');

    // const wrapper = shallow(<Label sm="6">Yo!</Label>);

    // expect(wrapper.hasClass('col-sm-6')).toBe(true);
  });

  it('should pass col size specific classes as Strings (auto)', () => {
    render(<Label sm="auto">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm-auto');
    // const wrapper = shallow(<Label sm="auto">Yo!</Label>);

    // expect(wrapper.hasClass('col-sm-auto')).toBe(true);
  });

  it('should pass col size specific classes as Strings ("")', () => {
    render(<Label sm="">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm');
    // const wrapper = shallow(<Label sm="">Yo!</Label>);

    // expect(wrapper.hasClass('col-sm')).toBe(true);
  });

  it('should pass col size specific classes as Strings (true)', () => {
    render(<Label sm>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm');
    // const wrapper = shallow(<Label sm>Yo!</Label>);

    // expect(wrapper.hasClass('col-sm')).toBe(true);
  });

  it('should pass col size specific classes as Strings (xs)', () => {
    render(<Label xs="6">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-6');
    // const wrapper = shallow(<Label xs="6">Yo!</Label>);

    // expect(wrapper.hasClass('col-6')).toBe(true);
  });

  it('should pass col size specific classes as Strings (xs="")', () => {
    render(<Label xs="">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col');
    // const wrapper = shallow(<Label xs="">Yo!</Label>);

    // expect(wrapper.hasClass('col')).toBe(true);
  });

  it('should pass col size specific classes as Strings (xs (true))', () => {
    render(<Label xs>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col');
    // const wrapper = shallow(<Label xs>Yo!</Label>);

    // expect(wrapper.hasClass('col')).toBe(true);
  });

  it('should pass col size specific classes as Strings (xs="auto")', () => {
    render(<Label xs="auto">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-auto');
    // const wrapper = shallow(<Label xs="auto">Yo!</Label>);

    // expect(wrapper.hasClass('col-auto')).toBe(true);
  });

  it('should render with "visually-hidden" class when hidden prop is truthy', () => {
    render(<Label hidden>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('visually-hidden');
    // const wrapper = shallow(<Label hidden>Yo!</Label>);

    // expect(wrapper.hasClass('visually-hidden')).toBe(true);
  });

  it('should render with "col-form-label-${size}" class when size is provided', () => {
    render(<Label size="lg">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-form-label-lg');
    // const wrapper = shallow(<Label size="lg">Yo!</Label>);

    // expect(wrapper.hasClass('col-form-label-lg')).toBe(true);
  });

  it('should pass col size specific classes as Numbers', () => {
    render(<Label sm={6}>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm-6');
    // const wrapper = shallow(<Label sm={6}>Yo!</Label>);

    // expect(wrapper.hasClass('col-sm-6')).toBe(true);
  });

  it('should pass col size specific classes as Numbers (xs)', () => {
    render(<Label xs={6}>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-6')
    // const wrapper = shallow(<Label xs={6}>Yo!</Label>);

    // expect(wrapper.hasClass('col-6')).toBe(true);
  });

  it('should pass col size specific classes via Objects', () => {
    render(<Label sm={{ size: 6, order: 2, offset: 2 }}>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm-6');
    expect(screen.getByText(/yo!/i)).toHaveClass('order-sm-2');
    expect(screen.getByText(/yo!/i)).toHaveClass('offset-sm-2');
    // const wrapper = shallow(
    //   <Label sm={{ size: 6, order: 2, offset: 2 }}>Yo!</Label>,
    // );

    // expect(wrapper.hasClass('col-sm-6')).toBe(true);
    // expect(wrapper.hasClass('order-sm-2')).toBe(true);
    // expect(wrapper.hasClass('offset-sm-2')).toBe(true);
  });

  it('should pass col size specific classes via Objects (xs)', () => {
    render(<Label xs={{ size: 6, order: 2, offset: 2 }}>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-6');
    expect(screen.getByText(/yo!/i)).toHaveClass('order-2');
    expect(screen.getByText(/yo!/i)).toHaveClass('offset-2');
    // const wrapper = shallow(
    //   <Label xs={{ size: 6, order: 2, offset: 2 }}>Yo!</Label>,
    // );

    // expect(wrapper.hasClass('col-6')).toBe(true);
    // expect(wrapper.hasClass('order-2')).toBe(true);
    // expect(wrapper.hasClass('offset-2')).toBe(true);
  });

  it('should pass multiple col size specific classes via Objects', () => {
    render(      <Label
      xs={{ size: 4, order: 3, offset: 3 }}
      sm={{ size: 6, order: 2, offset: 2 }}
      md={{ size: 7, order: 1, offset: 1 }}
    >
      Yo!
      </Label>)
    expect(screen.getByText(/yo/i)).toHaveClass('col-4');
    expect(screen.getByText(/yo/i)).toHaveClass('order-3');
    expect(screen.getByText(/yo/i)).toHaveClass('offset-3');
    expect(screen.getByText(/yo/i)).toHaveClass('col-sm-6');
    expect(screen.getByText(/yo/i)).toHaveClass('order-sm-2');
    expect(screen.getByText(/yo/i)).toHaveClass('offset-sm-2');
    expect(screen.getByText(/yo/i)).toHaveClass('col-md-7');
    expect(screen.getByText(/yo/i)).toHaveClass('order-md-1');
    expect(screen.getByText(/yo/i)).toHaveClass('offset-md-1');
  });

  it('should render custom tag', () => {
    render(<Label tag="main">Yo!</Label>);
    testForCustomTag(Label, {}, 'main')
  });
});
