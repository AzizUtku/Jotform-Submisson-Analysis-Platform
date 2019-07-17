import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../../assets/logo.svg';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const Logo = (props) => {
  const { name } = props;
  return (
    <div className="logo">
      <img src={logo} width="32px" alt="Logo" />
      <div className="centered">{name}</div>
    </div>
  );
};

Logo.propTypes = propTypes;
export default Logo;
