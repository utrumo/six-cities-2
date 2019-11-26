import React from 'react';
import PropTypes from 'prop-types';

import {
  ASSETS_PATCH
} from '../../shared/const';

const PropertyGallery = (props) => {
  const {images, count} = props;
  const imagesToRender = count ? images.slice(0, count) : images;
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {imagesToRender.map((src, i) => (
          <div key={i} className="property__image-wrapper">
            <img className="property__image" src={`${ASSETS_PATCH}${src}`} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  count: PropTypes.number
};

export default PropertyGallery;
