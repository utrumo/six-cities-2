import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from './places-list.jsx';

configure({adapter: new Adapter()});

const mock = {offers: [
  {
    id: 1,
    previewImage: `/img/apartment.jpg`,
    title: `Beautiful & luxurious apartment at great location`,
    isPremium: false,
    rating: 4.4,
    price: 110,
    type: `apartment`
  }
]};

describe(`Optional classes`, () => {
  it(`Should doesn't adds any css classes if are doesn't exist in props.`, () => {
    const tree = shallow(<PlacesList {...mock} />);

    expect(tree.find(`.places__list`).props().className.split(` `)).toHaveLength(1);
  });

  it(`Should correct render additional css class if it has in props`, () => {
    const classes = {own: `firstTestClass`};
    const tree = shallow(<PlacesList {...mock} additionalClasses={classes}/>);

    expect(tree.find(`.places__list`).hasClass(classes.own)).toBeTruthy();
  });

  it(`Should correct render additional css classes if it has in props in array`, () => {
    const classes = {own: [`firstTestClass`, `secondTestClass`]};
    const tree = shallow(<PlacesList {...mock} additionalClasses={classes}/>);

    expect(tree.find(`.places__list`).hasClass(classes.own[0])).toBeTruthy();
    expect(tree.find(`.places__list`).hasClass(classes.own[1])).toBeTruthy();
  });
});
