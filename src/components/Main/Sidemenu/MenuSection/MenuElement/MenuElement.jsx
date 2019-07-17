/* eslint-disable react/prop-types */
import React from 'react';

const MenuElement = (props) => {
  const { children } = props;
  return (
    <li>
      {children}
    </li>
  );
};

export default MenuElement;
