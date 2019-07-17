import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const MenuSection = (props) => {
  const { title, children } = props;
  return (
    <React.Fragment>
      <span className="sectionTitle">{title}</span>
      <ul>
        {children}
      </ul>
    </React.Fragment>
  );
};

MenuSection.propTypes = propTypes;
export default MenuSection;
