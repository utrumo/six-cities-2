import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorPage, {Classes} from './error-page.jsx';

configure({adapter: new Adapter()});

it(`Should render status correctly`, () => {
  const status = `Test status`;
  const wrapper = shallow(<ErrorPage status={status}/>);
  expect(wrapper.find(`.${Classes.STATUS}`).text()).toEqual(status);
});

it(`Should render description correctly`, () => {
  const description = `Test description`;
  const wrapper = shallow(<ErrorPage description={description}/>);
  expect(wrapper.find(`.${Classes.DESCRIPTION}`).text()).toEqual(description);
});
