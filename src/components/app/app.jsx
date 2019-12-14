import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page.jsx';
import ErrorPage from '../error-page/error-page.jsx';
import OfferPage from '../offer-page/offer-page.jsx';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';
import ActionCreator from '../../store/action-creator.js';

const noOffers = {
  status: `No places to stay available`,
  description: `We could not find any property available at the moment`
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._getMainPage = this._getMainPage.bind(this);
    this._getOfferPage = this._getOfferPage.bind(this);
  }

  _getMainPage() {
    const {isOffersAvailable} = this.props;
    return isOffersAvailable
      ? <MainPage />
      : (
        <ErrorPage status={noOffers.status} description={noOffers.description} isMain />
      );
  }

  _getOfferPage({match: {params: {id: idStr}}}) {
    const {
      currentOfferId,
      onChangeCurrentOfferId,
      isOfferAvailable,

      currentLocation,
      currentOfferCityName,
      onChangeLocation
    } = this.props;

    const offerId = Number(idStr);

    if (Number.isNaN(offerId)) {
      return <ErrorPage />;
    }

    if (currentOfferId !== offerId) {
      onChangeCurrentOfferId(offerId);
    }

    if (!isOfferAvailable) {
      return <ErrorPage />;
    }

    if (currentLocation !== currentOfferCityName) {
      onChangeLocation(currentOfferCityName);
    }

    return <OfferPage />;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={this._getMainPage} />
          <Route exact path="/offer/:id" render={this._getOfferPage} />
          <Route render={() => <ErrorPage />} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  isOffersAvailable: PropTypes.bool.isRequired,

  currentOfferId: PropTypes.number.isRequired,
  isOfferAvailable: PropTypes.bool.isRequired,
  onChangeCurrentOfferId: PropTypes.func.isRequired,

  currentLocation: PropTypes.string.isRequired,
  currentOfferCityName: PropTypes.string,
  onChangeLocation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOffersAvailable: Selectors.checkOffersAvailability(state),

  currentOfferId: Selectors.getCurrentOfferId(state),
  isOfferAvailable: Selectors.checkOfferAvailability(state),

  currentLocation: Selectors.getCurrentLocation(state),
  currentOfferCityName: Selectors.getCurrentOfferCityName(state)
});

const mapDispatchToProps = {
  onChangeCurrentOfferId: ActionCreator.changeCurrentOfferId,

  onChangeLocation: ActionCreator.changeLocation
};

export {App, noOffers};
export default connect(mapStateToProps, mapDispatchToProps)(App);
