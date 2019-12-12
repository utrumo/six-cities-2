import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page.jsx';
import OfferPage from '../offer-page/offer-page.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';
import ActionCreator from '../../store/action-creator.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._getOfferPage = this._getOfferPage.bind(this);
  }

  _getOfferPage(routeProps) {
    const {
      currentOfferId,
      onChangeCurrentOfferId,
      isOfferAvailable,

      currentLocation,
      currentOfferCityName,
      onChangeLocation
    } = this.props;

    const {match: {params: {id: idStr}}} = routeProps;
    const offerId = Number(idStr);

    if (Number.isNaN(offerId)) {
      return <NotFoundPage />;
    }

    if (currentOfferId !== offerId) {
      onChangeCurrentOfferId(offerId);
    }

    if (!isOfferAvailable) {
      return <NotFoundPage />;
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
          <Route exact path="/" render={() => <MainPage />} />
          <Route exact path="/offer/:id" render={this._getOfferPage} />
          <Route render={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  currentOfferId: PropTypes.number.isRequired,
  isOfferAvailable: PropTypes.bool.isRequired,
  onChangeCurrentOfferId: PropTypes.func.isRequired,

  currentLocation: PropTypes.string.isRequired,
  currentOfferCityName: PropTypes.string,
  onChangeLocation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentOfferId: Selectors.getCurrentOfferId(state),
  isOfferAvailable: Selectors.checkOfferAvailability(state),

  currentLocation: Selectors.getCurrentLocation(state),
  currentOfferCityName: Selectors.getCurrentOfferCityName(state)
});

const mapDispatchToProps = {
  onChangeCurrentOfferId: ActionCreator.changeCurrentOfferId,

  onChangeLocation: ActionCreator.changeLocation
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
