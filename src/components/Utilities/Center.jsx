/* eslint-disable react/prop-types */
import React from 'react';

const Center = (props) => {
  const { style, children } = props;
  return (
    <div style={{ textAlign: 'center', ...style }}>
      <div style={{ display: 'inline-block' }}>
        {children}
      </div>
    </div>
  );
};

export default Center;
