import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferReviews} from './offer-reviews.jsx';

configure({adapter: new Adapter()});

describe(`OfferReviews`, () => {
  it(`Must render correct comments counts`, () => {
    const commentsCount = 3;
    const counter = shallow(<OfferReviews commentsCount={commentsCount} />).find(`.reviews__amount`);
    expect(counter.text()).toEqual(`${commentsCount}`);
  });
});
