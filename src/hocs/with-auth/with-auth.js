import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {UrlPath} from '../../shared/const.js';
import {getAuthorizationStatus} from '../../store/user/selectors.js';

const getDisplayName = (Component) => Component.displayName || Component.name || `Component`;

export const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const {isAuthorized, ...rest} = props;
    return isAuthorized
      ? <WrappedComponent {...rest} />
      : <Redirect to={{
        pathname: UrlPath.LOGIN,
        state: {from: props.location.pathname},
      }} />;
  };

  WithAuth.propTypes = ({
    isAuthorized: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  });

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
});

export default compose(connect(mapStateToProps), withAuth);
