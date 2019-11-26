import {} from 'jest';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewsItem from './reviews-item.jsx';

configure({adapter: new Adapter()});

const mock = {
  id: 1,
  user: {
    id: 17,
    isPro: false,
    name: `Max`,
    avatarUrl: `/img/avatar-max.jpg`
  },
  rating: 4,
  comment: `What an amazing view!`,
  date: `2019-11-18T20:49:50.988Z`
};

describe(`ReviewsItem`, () => {
  it(`Must render correct avatar image with correct url`, () => {
    const props = Object.assign({}, mock, {
      user: {
        id: 17,
        isPro: false,
        name: `Alex`,
        avatarUrl: `/img/avatar.jpg`
      }
    });
    const imgEl = shallow(<ReviewsItem {...props}/>).find(`img`);
    expect(imgEl.props().src).toEqual(props.user.avatarUrl);
  });

  it(`Must render correct user name`, () => {
    const props = Object.assign({}, mock, {
      user: {
        id: 17,
        isPro: false,
        name: `Max`,
        avatarUrl: `/img/avatar.jpg`
      }
    });
    const elWithName = shallow(<ReviewsItem {...props}/>).find(`.reviews__user-name`);
    expect(elWithName.text()).toEqual(props.user.name);
  });

  it(`Must render correct user rating`, () => {
    const props = Object.assign({}, mock, {
      rating: 3 // from 5 star => 60%
    });
    const indicator = shallow(<ReviewsItem {...props}/>)
      .find(`.reviews__stars span`).at(0);

    expect(indicator.props().style.width).toEqual(`60%`);
  });

  it(`Must render correct user comment`, () => {
    const props = Object.assign({}, mock, {
      comment: `testMessage`
    });
    const elWithName = shallow(<ReviewsItem {...props}/>).find(`.reviews__text`);

    expect(elWithName.text()).toEqual(props.comment);
  });

  it(`Must render correct time tag text`, () => {
    const props = Object.assign({}, mock, {
      date: `2019-11-20T13:49:50.988Z`
    });
    const timeEl = shallow(<ReviewsItem {...props}/>).find(`time`);

    expect(timeEl.text()).toEqual(`November 2019`);
  });

  it(`Must render correct time tag attribute`, () => {
    const props = Object.assign({}, mock, {
      date: `2019-12-19T13:49:50.988Z`
    });
    const timeEl = shallow(<ReviewsItem {...props}/>).find(`time`);

    expect(timeEl.props().dateTime).toEqual(`2019-12-19`);
  });
});
