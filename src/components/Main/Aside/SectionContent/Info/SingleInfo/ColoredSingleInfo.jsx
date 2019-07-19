/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  value: PropTypes.string,
};

const defaultProps = {
  value: '-',
};

const SingleInfo = (props) => {
  const { name, value, active } = props;
  const color = active ? 'rgb(116,182,102)' : 'rgb(146, 32, 32)';

  return (
    <div className="section-single-info">
      <div className="desc">{name}</div>
      <div className="number" style={{ color }}>
        <i className="fa fa-square" aria-hidden="true" style={{ color }} />
        {value || '-'}
      </div>
    </div>
  );
};

SingleInfo.propTypes = propTypes;
SingleInfo.defaultProps = defaultProps;
export default SingleInfo;
