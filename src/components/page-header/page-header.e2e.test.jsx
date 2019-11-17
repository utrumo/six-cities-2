import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageHeader from './page-header.jsx';

configure({adapter: new Adapter()});

describe(`test PageHeader logo link classes`, () => {
  it(`Render link with 'header__logo-link--active' class if set 'isMain' attribute`, () => {
    const linkEl = shallow(<PageHeader isMain />).find(`.header__logo-link`);
    expect(linkEl.hasClass(`header__logo-link--active`)).toBeTruthy();
  });

  it(`Render link without 'header__logo-link--active' class if doesn't set 'isMain' prop`, () => {
    const linkEl = shallow(<PageHeader />).find(`.header__logo-link`);
    expect(linkEl.hasClass(`header__logo-link--active`)).toBeFalsy();
  });
});

describe(`test PageHeader logo link href and to attributes`, () => {
  it(`Render link  without href if set 'isMain' attribute`, () => {
    const linkEl = shallow(<PageHeader isMain />).find(`.header__logo-link`);
    expect(linkEl.props().href).toBeUndefined();
  });

  it(`Render router link with attribute to='/' if doesn't set 'isMain' prop`, () => {
    const linkEl = shallow(<PageHeader />).find(`.header__logo-link`);
    expect(linkEl.props().to).toEqual(`/`);
  });
});
