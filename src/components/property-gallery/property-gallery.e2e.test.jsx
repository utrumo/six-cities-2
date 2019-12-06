import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import PropertyGallery from './property-gallery.jsx';

configure({adapter: new Adapter()});

describe(`Images`, () => {
  it(`Must render correct count of images`, () => {
    const images = [
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-04.jpg`,
      `img/apartment-05.jpg`
    ];
    const count = 5;
    const imagesEls = shallow(<PropertyGallery images={images} count={count} />)
      .find(`.property__image`);
    expect(imagesEls.length).toBeLessThanOrEqual(count);
  });
});
