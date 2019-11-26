import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null
    };

    this._activeCardHandler = this._activeCardHandler.bind(this);
  }

  _activeCardHandler(offerId) {
    this.setState({
      activeCardId: offerId
    });
  }

  render() {
    const {offers} = this.props;
    const {activeCardId} = this.state;
    return <div className="page page--gray page--main">
      <PageHeader isMain/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
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
              <PlacesList
                offers={offers}
                onCardActive={this._activeCardHandler}
                additionalClasses={{
                  own: [`cities__places-list`, `tabs__content`],
                  item: {
                    own: `cities__place-card`,
                    imageWrapper: `cities__image-wrapper`
                  }
                }}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  view={offers[0].city.location}
                  markers={MainPage._getMarkers(offers)}
                  activeCardId={activeCardId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>;
  }

  static _getMarkers(offers) {
    return offers.map(({id, location: {latitude, longitude}}) => ({id, latitude, longitude}));
  }
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.exact({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.exact({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  })).isRequired
};

export default MainPage;
