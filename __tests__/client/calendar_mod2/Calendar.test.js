import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Calendar from '../../../client/src/calendar_mod2/Calendar';
import { Table, Tr, Td, Button } from '../../../client/src/calendar_mod2/CalendarStyling';

configure({ adapter: new Adapter() });

const props = {
  dates: ['1', '2'],
  minStay: 1,
  startDate: 4,
  hoveredDate: 6,
  endDate: 8,
  clicked: 'checkIn',
  month: 'June',
  year: 2018,
};

describe('Calendar Contents Buttons', () => {
  let click;
  let focus;
  let over;
  let leave;
  let btn;
  beforeEach(() => {
    click = jest.fn();
    focus = jest.fn();
    over = jest.fn();
    leave = jest.fn();
    btn = mount(<Button
      day={1}
      onClick={click}
      onFocus={focus}
      onMouseOver={over}
      onMouseLeave={leave}
    />);
  });
  it('Button has funcs', () => {
    expect(btn.props().onClick).toBeDefined();
    expect(btn.props().onFocus).toBeDefined();
    expect(btn.props().onMouseOver).toBeDefined();
    expect(btn.props().onMouseLeave).toBeDefined();
  });
  it('Button renders a button', () => {
    const button = btn.find('button').first();
    expect(button).toBeDefined();
  });
  it('Button click calls click handler', () => {
    btn.simulate('click');
    expect(click.mock.calls.length).toBe(1);
  });
  it('Button hover over calls hover handler', () => {
    btn.simulate('mouseOver');
    expect(over.mock.calls.length).toBe(1);
  });
  it('Button hover leave calls hover handler', () => {
    btn.simulate('mouseLeave');
    expect(leave.mock.calls.length).toBe(1);
  });
});

// describe('Calendar functions', () => {
//   const wrapper = shallow(<Calendar />);
//   it('When user clicks a date, either the start date or end date is set', () => {

//   });
// });
