/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
};

const defaultProps = {
  iconClass: 'fa-th-large',
};

const AsideSection = (props) => {
  const { title, children, iconClass } = props;
  return (
    <div className="section">
      <div className="title">
        <i className={`fa ${iconClass}`} aria-hidden="true" />
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};

AsideSection.propTypes = propTypes;
AsideSection.defaultProps = defaultProps;
export default AsideSection;
