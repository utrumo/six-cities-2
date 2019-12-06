import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const PropertyMarks = (props) => {
  const {isPremium} = props;
  return (
    <Fragment>
      {isPremium &&
        <div className="property__mark">
          <span>Premium</span>
        </div>
      }
    </Fragment>
  );
};

PropertyMarks.propTypes = {
  isPremium: PropTypes.bool
};

export default PropertyMarks;
