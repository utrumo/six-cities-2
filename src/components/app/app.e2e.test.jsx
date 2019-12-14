import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App, noOffers} from './app.jsx';
import {Classes} from '../error-page/error-page.jsx';

configure({adapter: new Adapter()});

it(`Should render error page if no offers were downloaded from the server`, () => {
  const wrapper = mount(<App
    isOffersAvailable={false}
    currentOfferId={-1}
    isOfferAvailable={false}
    onChangeCurrentOfferId={jest.fn()}
    currentLocation=""
    currentOfferCityName={undefined}
    onChangeLocation={jest.fn()}
  />);
  const status = wrapper.find(`.${Classes.STATUS}`).text();
  const description = wrapper.find(`.${Classes.DESCRIPTION}`).text();
  expect(status).toEqual(noOffers.status);
  expect(description).toEqual(noOffers.description);
});
