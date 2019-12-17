import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyGallery} from './property-gallery.jsx';

it(`PropertyGallery renders correctly`, () => {
  const images = [
    `/img/apartment-02.jpg`,
    `/img/room.jpg`,
    `/img/apartment-01.jpg`,
    `/img/studio-01.jpg`,
    `/img/apartment-03.jpg`,
    `/img/apartment-01.jpg`,
    `/img/apartment-05.jpg`
  ];
  const tree = renderer.create(<PropertyGallery images={images} />) .toJSON();
  expect(tree).toMatchSnapshot();
});
