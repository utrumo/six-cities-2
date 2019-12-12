import React from 'react';

import PageHeader from '../page-header/page-header.jsx';
import LocationsList from '../locations-list/locations-list.jsx';
import PlacesFound from '../places-found/places-found.jsx';
import CityPlaces from '../city-places/city-places.jsx';
import CityMap from '../city-map/city-map.jsx';

const MainPage = () => (
  <div className="page page--gray page--main">
    <PageHeader isMain/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound />
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
              {/*
                 <select className="places__sorting-type" id="places-sorting">
                   <option className="places__option" value="popular" selected="">Popular</option>
                   <option className="places__option" value="to-high">Price: low to high</option>
                   <option className="places__option" value="to-low">Price: high to low</option>
                   <option className="places__option" value="top-rated">Top rated first</option>
                 </select>
                */}
            </form>
            <CityPlaces />
          </section>
          <div className="cities__right-section">
            <CityMap />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainPage;
