import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import PageHeader from 'components/organisms/page-header/page-header.jsx';
import LoginForm from 'components/login-form/login-form.jsx';
import {UrlPath} from 'shared/const.js';

import {connect} from 'react-redux';
import {getAuthorizationStatus} from 'store/user/selectors.js';

const SigInPage = (props) => {
  const {from} = props.location.state || {from: UrlPath.ROOT};
  return props.isAuthorized
    ? <Redirect to={from} />
    : (
      <div className="page page--gray page--login">
        <PageHeader />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <LoginForm />
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
};

SigInPage.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.exact({
      from: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
});

export {SigInPage};
export default connect(mapStateToProps)(SigInPage);
