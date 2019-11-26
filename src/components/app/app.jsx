import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import OfferPage from '../offer-page/offer-page.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import {getNearestOffers} from '../../utils/nearest-offers.js';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._getMainPage = this._getMainPage.bind(this);
    this._getOfferPage = this._getOfferPage.bind(this);
  }

  _getMainPage() {
    const {offers} = this.props;
    return <MainPage offers={offers} />;
  }

  _getOfferPage({match: {params: {id: idStr}}}) {
    const {offers, offersReviews} = this.props;

    const offerId = Number(idStr);
    if (Number.isNaN(offerId)) {
      return <NotFoundPage />;
    }

    const offer = offers.find((it) => it.id === offerId);
    if (!offer) {
      return <NotFoundPage />;
    }

    const offerReviews = offersReviews.find((it) => it.id === offerId);
    const nearestOffers = getNearestOffers(offer, offers);

    return <OfferPage
      offer={offer}
      reviews={offerReviews ? offerReviews.comments : []}
      nearestOffers={nearestOffers}
    />;
  }

  render() {
    return <Router>
      <Switch>
        <Route exact path="/" render={this._getMainPage} />
        <Route exact path="/offer/:id" render={this._getOfferPage} />
        <Route render={NotFoundPage} />
      </Switch>
    </Router>;
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    city: PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.exact({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.exact({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.exact({
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired
    }).isRequired
  })).isRequired,

  offersReviews: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      user: PropTypes.exact({
        id: PropTypes.number.isRequired,
        isPro: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired
      }).isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })).isRequired
  })).isRequired
};

export default App;
