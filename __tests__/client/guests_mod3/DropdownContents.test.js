import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import DropdownContents from '../../../client/src/guests_mod3/DropdownContents';
import { Holder, FeatureHolder, Guest, GuestDetails, ButtonDown, ButtonUp, Number } from '../../../client/src/guests_mod3/DropdownContentsStyling';

configure({ adapter: new Adapter() });

const props = {
  btnClick: () => null,
  adult: 1,
  child: 0,
  infant: 0,
  totalGuests: 1,
  maxGuests: 6,
};

describe('Holder Component', () => {
  it('is the main flex component', () => {
    const tree = renderer
      .create(<Holder> things inside </Holder>)
      .toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toMatchSnapshot();
  });
});
describe('Dropdown Contents Component', () => {
  it('renders the adults, children, infants, and their descriptions', () => {
    const wrapper = shallow(<DropdownContents {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dropdown Contents Buttons', () => {
  let subtract;
  let btn;
  beforeEach(() => {
    subtract = jest.fn();
    btn = mount(<ButtonDown onClick={subtract} />);
  });
  it('ButtonDown requires subtract func', () => {
    expect(btn.props().onClick).toBeDefined();
  });
  it('ButtonDown renders a button', () => {
    const button = btn.find('button').first();
    expect(button).toBeDefined();
  });
  it('ButtonDown click calls subtract', () => {
    subtract = sinon.spy();
    const wrapper = mount(<ButtonDown onClick={subtract} />);
    wrapper.find('button').simulate('click');
    expect(subtract.calledOnce).toEqual(true);
  });

  let add;
  beforeEach(() => {
    add = jest.fn();
    btn = mount(<ButtonDown onClick={add} />);
  });
  it('ButtonUp requires subtract func', () => {
    expect(btn.props().onClick).toBeDefined();
  });
  it('ButtonUp renders a button', () => {
    const button = btn.find('button').first();
    expect(button).toBeDefined();
  });
  it('ButtonDown click calls add', () => {
    add = sinon.spy();
    const wrapper = mount(<ButtonDown onClick={add} />);
    wrapper.find('button').simulate('click');
    expect(add.calledOnce).toEqual(true);
  });
});
