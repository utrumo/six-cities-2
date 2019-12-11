import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import {DEFAULT_NUMBER_VALUE} from '../../shared/const.js';

configure({adapter: new Adapter()});

const mock = {
  id: 1,
  image: `img/apartment-01.jpg`,
  title: `Beautiful & luxurious apartment at great location`,
  isPremium: false,
  rating: 4.6,
  price: 120,
  type: `apartment`,
  onMouseMove: () => {}
};

describe(`Premium mark`, () => {
  it(`Premium mark doesn't exist if flag isPremium are false'`, () => {
    const placeCard = shallow(<PlaceCard {...mock} isPremium={false} />);
    const markEl = placeCard.find(`.place-card__mark`);
    expect(markEl).toHaveLength(0);
  });

  it(`Premium mark exist if flag isPremium are true'`, () => {
    const placeCard = shallow(<PlaceCard {...mock} isPremium={true} />);
    const markEl = placeCard.find(`.place-card__mark`).at(0);
    expect(markEl.contains(<span>Premium</span>)).toBeTruthy();
  });
});

describe(`Mouse move callback`, () => {
  it(`Should return id of current card on mouseEnter`, () => {
    const mouseMoveHandler = jest.fn();
    const placeCard = shallow(<PlaceCard {...mock} onMouseMove={mouseMoveHandler} />);
    placeCard.simulate(`mouseEnter`);
    expect(mouseMoveHandler).toBeCalledWith(mock.id);
  });

  it(`Should return ${DEFAULT_NUMBER_VALUE} of current card on mouseLeave`, () => {
    const mouseMoveHandler = jest.fn();
    const placeCard = shallow(<PlaceCard {...mock} onMouseMove={mouseMoveHandler} />);
    placeCard.simulate(`mouseLeave`);
    expect(mouseMoveHandler).toBeCalledWith(DEFAULT_NUMBER_VALUE);
  });
});

describe(`Optional classes`, () => {
  it(`Should doesn't adds any css classes if are doesn't exist in props.`, () => {
    const tree = shallow(<PlaceCard {...mock} />);
    expect(tree.find(`.place-card`).props().className.split(` `)).toHaveLength(1);
    expect(tree.find(`.place-card__image-wrapper`).props().className.split(` `)).toHaveLength(1);
  });

  it(`Should correct render additional css classes are has in props`, () => {
    const classes = {
      own: `firstTestClass`,
      imageWrapper: `secondTestClass`
    };
    const tree = shallow(<PlaceCard {...mock} additionalClasses={classes}/>);
    expect(tree.find(`.place-card`).hasClass(classes.own)).toBeTruthy();
    expect(tree.find(`.place-card__image-wrapper`).hasClass(classes.imageWrapper)).toBeTruthy();
  });
});
