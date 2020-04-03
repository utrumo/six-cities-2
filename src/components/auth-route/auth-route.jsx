import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {UrlPath} from '../../shared/const.js';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors.js';

const AuthRoute = (rest) => {
  const {from} = rest.location.state || {from: UrlPath.ROOT};
  return (
    <Route {...rest} render={(props) => (
      rest.isAuthorized
        ? <Redirect to={from} />
        : rest.render(props)
    )}
    />);
};

AuthRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.exact({
      from: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
});

export {AuthRoute};
export default connect(mapStateToProps)(AuthRoute);
