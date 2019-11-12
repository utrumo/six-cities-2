import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

configure({adapter: new Adapter()});

const mock = {
  id: 1,
  previewImage: `img/apartment-01.jpg`,
  title: `Beautiful & luxurious apartment at great location`,
  isPremium: false,
  rating: 4.6,
  price: 120,
  type: `Apartment`
};

it(`The onTitleClick is called by click on card title`, () => {
  const onTitleClick = jest.fn();
  const placeCard = shallow(<PlaceCard
    id={mock.id}
    title={mock.title}
    image={mock.previewImage}
    type={mock.type}
    price={mock.price}
    rating={mock.rating}
    isPremium={mock.isPremium}
    onTitleClick={onTitleClick}
    onMouseEnter={() => {}}
  />);
  const titleEl = placeCard.find(`.place-card__name`).at(0);
  titleEl.simulate(`click`);
  expect(onTitleClick).toHaveBeenCalledTimes(1);
});

describe(`Premium mark`, () => {
  it(`Premium mark doesn't exist if flag isPremium are false'`, () => {
    const placeCard = shallow(<PlaceCard
      id={mock.id}
      title={mock.title}
      image={mock.previewImage}
      type={mock.type}
      price={mock.price}
      rating={mock.rating}
      isPremium={false}
      onTitleClick={() => {}}
      onMouseEnter={() => {}}
    />);
    const markEl = placeCard.find(`.place-card__mark`);
    expect(markEl).toHaveLength(0);
  });

  it(`Premium mark exist if flag isPremium are true'`, () => {
    const placeCard = shallow(<PlaceCard
      id={mock.id}
      title={mock.title}
      image={mock.previewImage}
      type={mock.type}
      price={mock.price}
      rating={mock.rating}
      isPremium={true}
      onTitleClick={() => {}}
      onMouseEnter={() => {}}
    />);
    const markEl = placeCard.find(`.place-card__mark`).at(0);
    expect(markEl.contains(<span>Premium</span>)).toEqual(true);
  });
});

it(`Shold return id of current card on mouseEnter`, () => {
  const mouseEnterHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
    id={mock.id}
    title={mock.title}
    image={mock.previewImage}
    type={mock.type}
    price={mock.price}
    rating={mock.rating}
    isPremium={true}
    onTitleClick={() => {}}
    onMouseEnter={mouseEnterHandler}
  />);
  placeCard.simulate(`mouseEnter`);
  expect(mouseEnterHandler).toBeCalledWith(mock.id);
});
