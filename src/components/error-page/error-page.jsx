import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';

const Classes = {
  STATUS: `cities__status`,
  DESCRIPTION: `cities__status-description`
};

const ErrorPage = ({status, description, isMain}) => (
  <div className="page page--gray page--main">
    <PageHeader isMain={isMain}/>
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className={Classes.STATUS}>{status}</b>
              <p className={Classes.DESCRIPTION}>{description}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  </div>
);

ErrorPage.defaultProps = {
  status: 404,
  description: `Page not found`,
  isMain: false
};

ErrorPage.propTypes = {
  status: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]),
  description: PropTypes.string.isRequired,
  isMain: PropTypes.bool.isRequired
};

export default ErrorPage;
export {Classes};
