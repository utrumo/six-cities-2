import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ImagePath, UrlPath} from '../../shared/const';

import {connect} from 'react-redux';
import {getAuthorizationStatus, getEmail} from '../../store/user/selectors.js';

const PageHeader = ({isAuthorized, email}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <NavLink
            to="/"
            className="header__logo-link"
            activeClassName="header__logo-link--active"
            activeStyle={{cursor: `default`}}
            exact
          >
            <img
              className="header__logo"
              src={ImagePath.HEADER_LOGO}
              alt="6 cities logo"
              width="81"
              height="41"
            />
          </NavLink>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                to={isAuthorized ? UrlPath.FAVORITES : UrlPath.LOGIN}
                className="header__nav-link header__nav-link--profile"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"/>
                {
                  isAuthorized
                    ? <span className="header__user-name user__name">{email}</span>
                    : <span className="header__login">Sign in</span>
                }
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

PageHeader.defaultProps = {
  isAuthorized: false,
  email: ``
};

PageHeader.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
  email: getEmail(state)
});

export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
