import React, { useState } from 'react';
import uuid from 'react-uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sort } from '../../../store/action';
import { SORT_TYPES } from '../../../const';
import SortItem from '../sort/SortItem';

function SortList({ sortType, onSort }) {
  const [isOpened, setIsOpened] = useState(false);
  const clickHandler = (payload) => {
    setIsOpened(false);
    onSort(payload);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setIsOpened(!isOpened)}
      >
        {sortType.text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {Object.keys(SORT_TYPES).map((item) => (
          <SortItem
            key={uuid()}
            type={item}
            isActive={sortType === item}
            onClick={clickHandler}
          />
        ))}
      </ul>
    </form>
  );
}

SortList.propTypes = {
  onSort: PropTypes.func.isRequired,
  sortType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = ({ PROCESS }) => ({
  sortType: PROCESS.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(sort(sortType));
  },
});

export { SortList };
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
