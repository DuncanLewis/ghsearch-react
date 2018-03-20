/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import Search from '.';

describe('Search component', () => {
  it('Should render successfully', () => {
    const component = shallow(<Search/>);
    expect(component.exists()).toEqual(true);
  });
});