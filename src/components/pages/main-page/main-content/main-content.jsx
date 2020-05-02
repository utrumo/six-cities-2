import React from 'react';

import LocationsList from 'components/locations-list/locations-list.jsx';
import PlacesFound from 'components/places-found/places-found.jsx';
import PlacesSorting from 'components/places-soritng/places-sorting.jsx';
import CityPlaces from 'components/city-places/city-places.jsx';
import CityMap from 'components/city-map/city-map.jsx';

const MainContent = () => (
  <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound />
            <PlacesSorting />
            <CityPlaces />
          </section>
          <div className="cities__right-section">
            <CityMap />
          </div>
        </div>
      </div>
  </>
);

export default MainContent;
