import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ImagePath} from '../../shared/const';

class PageHeader extends PureComponent {
  render() {
    const {isMain} = this.props;
    return <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {isMain
              ? <a
                style={{cursor: `default`}}
                className="header__logo-link header__logo-link--active"
              >
                {PageHeader.logo}
              </a>
              : <Link to="/" className="header__logo-link" >{PageHeader.logo}</Link>
            }
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>;
  }

  static get logo() {
    return (
      <img
        className="header__logo"
        src={ImagePath.HEADER_LOGO}
        alt="6 cities logo"
        width="81"
        height="41"
      />
    );
  }
}

PageHeader.defaultProps = {
  isMain: false
};

PageHeader.propTypes = {
  isMain: PropTypes.bool
};

export default PageHeader;
