import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const STYLE_ACTIVE = {cursor: `default`};

class Location extends PureComponent {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(evt) {
    evt.preventDefault();
    const {location, current, onClick} = this.props;
    if (!current) {
      onClick(location);
    }
  }

  render() {
    const {_handleClick} = this;
    const {location, current} = this.props;
    const classes = classNames(
        `locations__item-link`,
        `tabs__item`,
        {'tabs__item--active': current},
    );
    const style = current ? STYLE_ACTIVE : null;
    const href = current ? null : `#`;

    return (
      <li className="locations__item">
        <a className={classes} style={style} onClick={_handleClick} href={href} >
          <span>{location}</span>
        </a>
      </li>
    );
  }
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Location;
