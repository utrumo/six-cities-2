import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferPage from './offer-page.jsx';
import {
  MAX_IMAGE_ON_OFFER_PAGE,
  OfferTypeToPresentName
} from '../../shared/const';

configure({adapter: new Adapter()});

const mockOffer = {
  id: 1,
  images: [
    `img/apartment-02.jpg`,
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-03.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`
  ],
  title: `Beautiful & luxurious apartment at great location`,
  description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything.`,
  isPremium: true,
  rating: 4.6,
  price: 120,
  type: `apartment`,
  bedrooms: 3,
  maxAdults: 6,
  goods: [
    `Washer`,
    `Breakfast`,
    `Air conditioning`
  ],
  host: {
    name: `Max`,
    isPro: false,
    avatarUrl: `img/avatar-max.jpg`
  }
};

describe(`Images`, () => {
  it(`Must render no more than ${MAX_IMAGE_ON_OFFER_PAGE} images`, () => {
    const props = Object.assign({}, mockOffer, {images: [
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-04.jpg`,
      `img/apartment-05.jpg`
    ]});
    const imagesEls = shallow(<OfferPage {...props} />).find(`.property__image`);
    expect(imagesEls.length).toBeLessThanOrEqual(MAX_IMAGE_ON_OFFER_PAGE);
  });

  it(`Must render only 3 images`, () => {
    const props = Object.assign({}, mockOffer, {images: [
      `img/room.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`
    ]});
    const imgageEls = shallow(<OfferPage {...props} />).find(`.property__image`);
    expect(imgageEls).toHaveLength(3);
  });
});

describe(`Title`, () => {
  it(`Title is correctly render`, () => {
    const props = Object.assign({}, mockOffer, {
      title: `Great location`
    });
    const titleEl = shallow(<OfferPage {...props} />).find(`.property__name`);
    expect(titleEl.text()).toEqual(props.title);
  });
});

describe(`Description`, () => {
  it(`Description is correctly render`, () => {
    const props = Object.assign({}, mockOffer, {
      description: `Quiet house Near of everything.`
    });
    const descriptionEl = shallow(<OfferPage {...props} />).find(`.property__text`);
    expect(descriptionEl.text()).toEqual(props.description);
  });
});

describe(`Premium mark`, () => {
  it(`Container with premium mark are renders if isPremium is true`, () => {
    const props = Object.assign({}, mockOffer, {
      isPremium: true
    });
    const isRendered = shallow(<OfferPage {...props} />).exists(`.property__mark`);
    expect(isRendered).toBeTruthy();
  });

  it(`Container with premium mark doesn't render if isPremium is false`, () => {
    const props = Object.assign({}, mockOffer, {
      isPremium: false
    });
    const isRendered = shallow(<OfferPage {...props} />).exists(`.property__mark`);
    expect(isRendered).toBeFalsy();
  });
});

describe(`offer type`, () => {
  const testType = `apartment`;
  it(`Must render: ${OfferTypeToPresentName[testType]} on ${testType} type`, () => {
    const props = Object.assign({}, mockOffer, {
      type: testType
    });
    const type = shallow(<OfferPage {...props}/>)
      .find(`.property__name-wrapper .place-card__type`).text();
    expect(type).toEqual(OfferTypeToPresentName[testType]);
  });

  const testType2 = `room`;
  it(`Must render: ${OfferTypeToPresentName[testType2]} on ${testType2} type`, () => {
    const props = Object.assign({}, mockOffer, {
      type: testType2
    });
    const type = shallow(<OfferPage {...props}/>)
      .find(`.property__name-wrapper .place-card__type`).text();
    expect(type).toEqual(OfferTypeToPresentName[testType2]);
  });

  const testType3 = `house`;
  it(`Must render: ${OfferTypeToPresentName[testType3]} on ${testType3} type`, () => {
    const props = Object.assign({}, mockOffer, {
      type: testType3
    });
    const type = shallow(<OfferPage {...props}/>)
      .find(`.property__name-wrapper .place-card__type`).text();
    expect(type).toEqual(OfferTypeToPresentName[testType3]);
  });

  const testType4 = `hotel`;
  it(`Must render: ${OfferTypeToPresentName[testType4]} on ${testType4} type`, () => {
    const props = Object.assign({}, mockOffer, {
      type: testType4
    });
    const type = shallow(<OfferPage {...props}/>)
      .find(`.property__name-wrapper .place-card__type`).text();
    expect(type).toEqual(OfferTypeToPresentName[testType4]);
  });
});

describe(`Rating`, () => {
  it(`Must render rating level 5`, () => {
    const props = Object.assign({}, mockOffer, {
      rating: 4.6
    });
    const ratingValue = shallow(<OfferPage {...props} />).find(`.property__rating-value`).text();
    expect(ratingValue).toEqual(`5`);
  });
});

describe(`bedrooms`, () => {
  it(`Must render 4 Badrooms`, () => {
    const props = Object.assign({}, mockOffer, {
      bedrooms: 4
    });
    const bedrooms = shallow(<OfferPage {...props} />).find(`.property__feature--bedrooms`).text();
    expect(bedrooms).toEqual(`4 Bedrooms`);
  });
});

describe(`max Adults`, () => {
  it(`Must render max 4 adults`, () => {
    const props = Object.assign({}, mockOffer, {
      maxAdults: 4
    });
    const maxAdults = shallow(<OfferPage {...props} />).find(`.property__feature--adults`).text();
    expect(maxAdults).toEqual(`Max 4 adults`);
  });
});

describe(`price`, () => {
  it(`Must render 130 euro price`, () => {
    const props = Object.assign({}, mockOffer, {
      price: 130
    });
    const maxAdults = shallow(<OfferPage {...props} />).find(`.property__price-value`).text();
    expect(maxAdults).toEqual(`€130`);
  });
});

describe(`Host name`, () => {
  it(`Must render host name: Alex`, () => {
    const props = Object.assign({}, mockOffer, {
      host: {
        name: `Max`,
        isPro: false,
        avatarUrl: `img/avatar-max.jpg`
      }
    });
    const name = shallow(<OfferPage {...props} />).find(`.property__user-name`).text();
    expect(name).toEqual(`Max`);
  });
});

describe(`Host avatar url`, () => {
  it(`Must render avatarUrl: img/avatar-alex.jpg`, () => {
    const props = Object.assign({}, mockOffer, {
      host: {
        name: `Oleg`,
        isPro: false,
        avatarUrl: `img/avatar-alex.jpg`
      }
    });
    const srcValue = shallow(<OfferPage {...props} />).find(`.property__avatar`).props().src;
    expect(srcValue).toEqual(`/img/avatar-alex.jpg`);
  });
});

describe(`Mark on the host avatar`, () => {
  it(`Must render mark on avatar if isPro flag is true`, () => {
    const props = Object.assign({}, mockOffer, {
      host: {
        name: `Olga`,
        isPro: true,
        avatarUrl: `img/avatar-olga.jpg`
      }
    });
    const wrapper = shallow(<OfferPage {...props} />).find(`.property__avatar-wrapper`);
    expect(wrapper.hasClass(`property__avatar-wrapper--pro`)).toEqual(true);
  });

  it(`Doesn't render mark on avatar if isPro flag is false`, () => {
    const props = Object.assign({}, mockOffer, {
      host: {
        name: `Olga`,
        isPro: false,
        avatarUrl: `img/avatar-olga.jpg`
      }
    });
    const wrapper = shallow(<OfferPage {...props} />).find(`.property__avatar-wrapper`);
    expect(wrapper.hasClass(`property__avatar-wrapper--pro`)).toEqual(false);
  });

});

describe(`Host pro status`, () => {
  it(`Must render user-Pro status if isPro flag is true`, () => {
    const props = Object.assign({}, mockOffer, {
      host: {
        name: `Olga`,
        isPro: true,
        avatarUrl: `img/avatar-olga.jpg`
      }
    });
    const hostStatusEl = shallow(<OfferPage {...props} />).find(`.property__user-status`);
    expect(hostStatusEl.exists()).toBeTruthy();
  });

  it(`Doesn't render user-Pro status if isPro flag is false`, () => {
    const props = Object.assign({}, mockOffer, {
      host: {
        name: `Olga`,
        isPro: false,
        avatarUrl: `img/avatar-olga.jpg`
      }
    });
    const hostStatusEl = shallow(<OfferPage {...props} />).find(`.property__user-status`);
    expect(hostStatusEl.exists()).toBeFalsy();
  });
});

describe(`inside list`, () => {
  it(`Doesn't render inside-list if goods.length = 0`, () => {
    const props = Object.assign({}, mockOffer, {
      goods: []
    });
    const listEl = shallow(<OfferPage {...props} />).find(`.property__inside`);
    expect(listEl.exists()).toBeFalsy();
  });

  it(`Must render inside-list and 3 internal item if goods.length = 3`, () => {
    const props = Object.assign({}, mockOffer, {goods: [
      `Breakfast`,
      `Air conditioning`,
      `Laptop friendly workspace`
    ]});
    const listEl = shallow(<OfferPage {...props} />).find(`.property__inside-item`);
    expect(listEl).toHaveLength(3);
  });
});
