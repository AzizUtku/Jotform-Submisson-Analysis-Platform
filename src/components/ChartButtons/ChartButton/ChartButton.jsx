import React from 'react';
import PropTypes from 'prop-types';
import './ChartButton.scss';

const propTypes = {
  clicked: PropTypes.func.isRequired,
  chartType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const ChartButton = (props) => {
  const { clicked, chartType, title } = props;
  return (
    <button type="button" className="btnMaterial btnChart" onClick={() => clicked(chartType)}>
      {title}
    </button>
  );
};

ChartButton.propTypes = propTypes;
export default ChartButton;
