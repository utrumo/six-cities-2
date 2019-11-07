import React from 'react';
import {configure, shallow, mount} from 'enzyme';
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
  />);
  const titleEl = placeCard.find(`.place-card__name`).at(0);
  titleEl.simulate(`click`);
  expect(onTitleClick).toHaveBeenCalledTimes(1);
});

it(`Premium mark doesn't exist if flag isPremium are false'`, () => {
  const onTitleClick = jest.fn();
  const placeCard = mount(<PlaceCard
    id={mock.id}
    title={mock.title}
    image={mock.previewImage}
    type={mock.type}
    price={mock.price}
    rating={mock.rating}
    isPremium={false}
    onTitleClick={onTitleClick}
  />);
  const markEl = placeCard.find(`.place-card__mark`);
  expect(markEl).toHaveLength(0);
});

it(`Premium mark exist if flag isPremium are true'`, () => {
  const onTitleClick = jest.fn();
  const placeCard = mount(<PlaceCard
    id={mock.id}
    title={mock.title}
    image={mock.previewImage}
    type={mock.type}
    price={mock.price}
    rating={mock.rating}
    isPremium={true}
    onTitleClick={onTitleClick}
  />);
  const markEl = placeCard.find(`.place-card__mark`).at(0);
  expect(markEl.contains(<span>Premium</span>)).toEqual(true);
});
