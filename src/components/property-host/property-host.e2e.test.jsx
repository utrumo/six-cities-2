import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropertyHost from './property-host.jsx';

configure({adapter: new Adapter()});

it(`Host name renders correctly`, () => {
  const name = `Max`;
  const hostName = shallow(
      <PropertyHost name={name} isPro={true} url="img.jpg" description="Some text"/>
  ).find(`.property__user-name`).text();
  expect(hostName).toEqual(name);
});

it(`Description renders correctly`, () => {
  const mockDescription = `Quiet house Near of everything.`;
  const description = shallow(
      <PropertyHost name="Max" isPro={true} url="img.jpg" description={mockDescription} />
  ).find(`.property__text`).text();
  expect(description).toEqual(mockDescription);
});

it(`Aatar url renders correctly`, () => {
  const avatarUrl = `img/avatar-alex.jpg`;
  const url = shallow(
      <PropertyHost name="Max" isPro={true} url={avatarUrl} description="Some text" />
  ).find(`.property__avatar`).prop(`src`);
  expect(url).toEqual(`/${avatarUrl}`);
});

describe(`Mark on the host avatar`, () => {
  it(`Should render mark on avatar`, () => {
    const wrapper = shallow(
        <PropertyHost name="Max" isPro={true} url="img.jpg" description="Some text" />
    ).find(`.property__avatar-wrapper`);
    expect(wrapper.hasClass(`property__avatar-wrapper--pro`)).toBeTruthy();
  });

  it(`Shouldn't render mark on avatar`, () => {
    const wrapper = shallow(
        <PropertyHost name="Max" isPro={false} url="img.jpg" description="Some text" />
    ).find(`.property__avatar-wrapper`);
    expect(wrapper.hasClass(`property__avatar-wrapper--pro`)).toBeFalsy();
  });
});

describe(`Host pro status`, () => {
  it(`Should render user-Pro status`, () => {
    const hostStatusEl = shallow(
        <PropertyHost name="Max" isPro={true} url="img.jpg" description="Some text" />
    ).find(`.property__user-status`);
    expect(hostStatusEl.exists()).toBeTruthy();
  });

  it(`Shouldn't render user-Pro status`, () => {
    const hostStatusEl = shallow(
        <PropertyHost name="Max" isPro={false} url="img.jpg" description="Some text" />
    ).find(`.property__user-status`);
    expect(hostStatusEl.exists()).toBeFalsy();
  });
});
