import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Location from './location.jsx';

configure({adapter: new Adapter()});


describe(`Active class`, () => {
  const activeClass = `tabs__item--active`;

  it(`Should has active class if current`, () => {
    const tree = shallow(<Location location="Moscow" current={true} onClick={jest.fn()} />);
    const a = tree.find(`a`);
    expect(a.hasClass(activeClass)).toBeTruthy();
  });

  it(`Shouldn't has active class if doesn't not current`, () => {
    const tree = shallow(<Location location="Moscow" current={false} onClick={jest.fn()} />);
    const a = tree.find(`a`);
    expect(a.hasClass(activeClass)).toBeFalsy();
  });
});

describe(`href attributer value`, () => {
  const hrefValue = `#`;

  it(`<a> should has href value if current`, () => {
    const tree = shallow(<Location location="Moscow" current={true} onClick={jest.fn()} />);
    const a = tree.find(`a`);
    const href = a.prop(`href`);
    expect(href).toBeNull();
  });

  it(`<a> should has href value if doesn't current`, () => {
    const tree = shallow(<Location location="Moscow" current={false} onClick={jest.fn()} />);
    const a = tree.find(`a`);
    const href = a.prop(`href`);
    expect(href).toEqual(hrefValue);
  });
});

describe(`style attributer value`, () => {
  const styleValue = {cursor: `default`};

  it(`<a> should has style if current`, () => {
    const tree = shallow(<Location location="Moscow" current={true} onClick={jest.fn()} />);
    const a = tree.find(`a`);
    const style = a.prop(`style`);
    expect(style).toEqual(styleValue);
  });

  it(`<a> should hasn't style value if doesn't current`, () => {
    const tree = shallow(<Location location="Moscow" current={false} onClick={jest.fn()} />);
    const a = tree.find(`a`);
    const style = a.prop(`style`);
    expect(style).toBeNull();
  });
});

describe(`callback`, () => {
  it(`Shouldn't call callbeck  if current`, () => {
    const cb = jest.fn();
    const tree = shallow(<Location location="New York" current={true} onClick={cb} />);
    const a = tree.find(`a`);
    a.simulate(`click`, {preventDefault: jest.fn()});
    expect(cb).toHaveBeenCalledTimes(0);
  });

  it(`Should call callbeck with location value if doesn't current`, () => {
    const location = `New York`;
    const cb = jest.fn();
    const tree = shallow(<Location location={location} current={false} onClick={cb} />);
    const a = tree.find(`a`);
    a.simulate(`click`, {preventDefault: jest.fn()});
    expect(cb).toHaveBeenNthCalledWith(1, location);
  });
});
