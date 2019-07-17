import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../Cards/Cards';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const AsideSection = (props) => {
  const { title } = props;
  return (
    <div className="section">
      <div className="title">
        <i className="fa fa-th-large" aria-hidden="true" />
        <span>{title}</span>
      </div>
      <Cards />
    </div>
  );
};

AsideSection.propTypes = propTypes;
export default AsideSection;
