/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const defaultProps = {
  value: '-',
};

const SingleInfo = (props) => {
  const { name, value } = props;
  return (
    <div className="section-single-info">
      <div className="desc">{name}</div>
      <div className="number">
        {value || '-'}
      </div>
    </div>
  );
};

SingleInfo.propTypes = propTypes;
SingleInfo.defaultProps = defaultProps;
export default SingleInfo;
