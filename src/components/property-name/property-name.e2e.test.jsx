import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferTypeToPresentName} from '../../shared/const';
import {PropertyName} from './property-name.jsx';

configure({adapter: new Adapter()});

it(`Title renders correctly`, () => {
  const title = `Great location`;
  const titleEl = shallow(
      <PropertyName
        title={title}
        type="room"
        id={1}
        isFavorite={true}
        onButtonClick={jest.fn()}
      />
  ).find(`.property__name`);
  expect(titleEl.text()).toEqual(title);
});

it(`Must render types correctly`, () => {
  const testType = `apartment`;
  const type = shallow(
      <PropertyName
        title="testTitle"
        type={testType}
        id={1}
        isFavorite={true}
        onButtonClick={jest.fn()}
      />
  )
    .find(`.place-card__type`).text();
  expect(type).toEqual(OfferTypeToPresentName[testType]);

  const testType2 = `room`;
  const type2 = shallow(
      <PropertyName
        title="testTitle"
        type={testType2}
        id={1}
        isFavorite={true}
        onButtonClick={jest.fn()}
      />
  )
    .find(`.place-card__type`).text();
  expect(type2).toEqual(OfferTypeToPresentName[testType2]);

  const testType3 = `house`;
  const type3 = shallow(
      <PropertyName
        title="testTitle"
        type={testType3}
        id={1}
        isFavorite={true}
        onButtonClick={jest.fn()}
      />
  )
    .find(`.place-card__type`).text();
  expect(type3).toEqual(OfferTypeToPresentName[testType3]);

  const testType4 = `hotel`;
  const type4 = shallow(
      <PropertyName
        title="testTitle"
        type={testType4}
        id={1}
        isFavorite={true}
        onButtonClick={jest.fn()}
      />
  )
    .find(`.place-card__type`).text();
  expect(type4).toEqual(OfferTypeToPresentName[testType4]);
});
