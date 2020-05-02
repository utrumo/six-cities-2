import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {OfferTypeToPresentName} from 'shared/const';
import {
  getCurrentOfferTitle,
  getCurrentOfferType,
  getCurrentOfferId,
  getCurrentOfferIsFavoriteFlag,
} from 'store/data/selectors.js';
import {connect} from 'react-redux';
import {Operation} from 'store/data/data.js';

class PropertyName extends PureComponent {
  constructor(props) {
    super(props);

    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _handleButtonClick() {
    const {id, isFavorite, onButtonClick} = this.props;
    onButtonClick(id, isFavorite);
  }

  render() {
    const {title, type, isFavorite} = this.props;
    return (
      <div className="property__name-wrapper">
        <h1 className="property__name">{title}</h1>
        <p
          style={{padding: `5px 0 15px`, fontSize: `16px`, textAlign: `center`}}
          className="place-card__type"
        >
          {OfferTypeToPresentName[type]}
        </p>
        <button
          onClick={this._handleButtonClick}
          className={classNames(
              `property__bookmark-button`,
              {'property__bookmark-button--active': isFavorite},
              `button`
          )}
          type="button"
        >
          <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
    );
  }
}


PropertyName.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  title: getCurrentOfferTitle(state),
  type: getCurrentOfferType(state),
  id: getCurrentOfferId(state),
  isFavorite: getCurrentOfferIsFavoriteFlag(state),
});

const mapDispatchToProps = {
  onButtonClick: Operation.toggleFavoriteStatus,
};

export {PropertyName};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyName);
