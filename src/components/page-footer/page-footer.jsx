import React from 'react';
import {Link} from 'react-router-dom';
import {UrlPath} from '../../shared/const.js';

const PageFooter = () => (
  <footer className="footer">
    <Link to={UrlPath.ROOT} className="footer__logo-link">
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
    </Link>
  </footer>
);

export default PageFooter;
