import React from 'react';
import PropTypes from 'prop-types';

import PageTemplate from '@ui/page-template/page-template.jsx';
import PageHeader from '@ui/page-header/page-header.jsx';

const Classes = {
  STATUS: `cities__status`,
  DESCRIPTION: `cities__status-description`,
};

const ErrorPage = ({status, description}) => (
  <PageTemplate
    className="page--gray page--main"
    header={<PageHeader />}
  >
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Error page</h1>
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
  </PageTemplate>
);

ErrorPage.defaultProps = {
  status: 404,
  description: `Page not found`,
};

ErrorPage.propTypes = {
  status: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  description: PropTypes.string.isRequired,
};

export default ErrorPage;
export {Classes};
