import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Holder, InputHolder, Title, Logo } from '../../../client/src/ModStylings';
import Dropdown from '../../../client/src/guests_mod3/Dropdown';
import DropdownContents from '../../../client/src/guests_mod3/DropdownContents';
import ModThree from '../../../client/src/guests_mod3/ModThree';

configure({ adapter: new Adapter() });

const props = {
  clicked: false,
  btnClick: () => null,
  close: () => null,
  adult: 1,
  child: 0,
  infant: 1,
  totalGuests: 0,
  maxGuests: 0,
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
describe('ModThree Component', () => {
  it('renders the right amount of children', () => {
    const wrapper = mount(<ModThree {...props} />);
    expect(wrapper.find('Dropdown').length).toEqual(1);
  });
  it('displays the right wording for infants', () => {
    const wrapper = mount(<InputHolder>{props.adult} adult, {props.infant} infant</InputHolder>);
    expect(wrapper.text()).toEqual('1 adult, 1 infant');
  });
});
