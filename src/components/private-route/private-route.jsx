import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {UrlPath} from '../../shared/const.js';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors.js';

const PrivateRoute = (rest) => (
  <Route
    {...rest}
    render={(props) => (
      rest.isAuthorized
        ? rest.render(props)
        : <Redirect to={{
          pathname: UrlPath.LOGIN,
          state: {from: location.pathname},
        }} />
    )}
  />
);

PrivateRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
