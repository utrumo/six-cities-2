import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

import {ASSETS_PATCH} from '../../shared/const';


const PropertyGallery = ({images}) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {images.map((src, i) => (
        <div key={i} className="property__image-wrapper">
          <img className="property__image" src={`${ASSETS_PATCH}${src}`} alt="Photo studio" />
        </div>
      ))}
    </div>
  </div>
);

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = (state) => ({
  images: Selectors.getCurrentOfferImagesForGallery(state)
});

export {PropertyGallery};
export default connect(mapStateToProps)(PropertyGallery);
