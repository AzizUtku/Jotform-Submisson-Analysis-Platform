import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const defaultProps = {
  value: '-',
};

const Card = (props) => {
  const { name, value } = props;
  return (
    <div className="section-card">
      <div className="number">{value || '-'}</div>
      <div className="desc">{name}</div>
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
