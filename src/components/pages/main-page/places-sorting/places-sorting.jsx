import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SortingVariants} from 'shared/const';
import {DataSelector, DataOperation} from 'store';
import CustomSelect from '../custom-select/custom-select';

const {POPULAR, PRICE_LOW_TO_HIGHT, PRICE_HIGHT_TO_LOW, TOP_RATED} = SortingVariants;
const PlacesSorting = ({value, onChange}) => (
  <form className="places__sorting" action="#" method="get">
    <CustomSelect
      label="Sort by"
      options={[
        POPULAR,
        PRICE_LOW_TO_HIGHT,
        PRICE_HIGHT_TO_LOW,
        TOP_RATED,
      ]}
      onChange={onChange}
      value={value}
    />
  </form>
);

PlacesSorting.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: DataSelector.getSortOrder(state),
});

const mapDispatchToProps = {
  onChange: DataOperation.changeSortOrder,
};

export {PlacesSorting};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
