import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getCurrentOfferImagesForGallery} from 'store/data/selectors.js';

const PropertyGallery = ({images}) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {images.map((src, i) => (
        <div key={`${i}-${src}`} className="property__image-wrapper">
          <img className="property__image" src={src} alt="Photo studio" />
        </div>
      ))}
    </div>
  </div>
);

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  images: getCurrentOfferImagesForGallery(state),
});

export {PropertyGallery};
export default connect(mapStateToProps)(PropertyGallery);
