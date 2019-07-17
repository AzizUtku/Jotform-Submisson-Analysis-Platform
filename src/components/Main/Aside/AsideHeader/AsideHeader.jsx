import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const AsideHeader = (props) => {
  const { id, title } = props;
  return (
    <div className="top">
      <span className="id">
        {`Form ID: ${id}`}
      </span>
      <div className="title">{title}</div>
    </div>
  );
};

AsideHeader.propTypes = propTypes;
export default AsideHeader;
