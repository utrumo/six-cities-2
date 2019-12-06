import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class PropertyInside extends PureComponent {
  render() {
    const {goods} = this.props;
    const {_renderBody} = PropertyInside;

    return goods.length ? _renderBody(goods) : null;
  }

  static _renderGoods(goods) {
    return goods.map((it, i) => (
      <li key={i} className="property__inside-item">{it}</li>
    ));
  }

  static _renderBody(goods) {
    const {_renderGoods} = PropertyInside;
    return (
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {_renderGoods(goods)}
        </ul>
      </div>
    );
  }
}

PropertyInside.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PropertyInside;
