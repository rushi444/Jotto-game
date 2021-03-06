import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
    // console.log(wrapper.debug()) --Check if you aren't sure what wrapper is
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {});
    test('renders input box', () => {});
    test('renders submit buton', () => {});
  });
  describe('word has been guessed', () => {
    test('renders component without error', () => {});
    test('does not render input box', () => {});
    test('does not render submit buton', () => {});
  });
});

describe('update state', () => {});
