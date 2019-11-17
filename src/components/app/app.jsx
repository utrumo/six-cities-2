import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import OfferPage from '../offer-page/offer-page.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
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

  _getOfferPage({match: {params: {id}}}) {
    const {offers} = this.props;

    const offerId = Number(id);
    if (Number.isNaN(offerId)) {
      return <NotFoundPage />;
    }

    const offer = offers.find((it) => it.id === offerId);
    if (!offer) {
      return <NotFoundPage />;
    }

    return <OfferPage
      id={offer.id}
      title={offer.title}
      description={offer.description}
      images={offer.images}
      type={offer.type}
      maxAdults={offer.maxAdults}
      bedrooms={offer.bedrooms}
      price={offer.price}
      rating={offer.rating}
      isPremium={offer.isPremium}
      goods={offer.goods}
      host={offer.host}
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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
  })).isRequired
};

export default App;
