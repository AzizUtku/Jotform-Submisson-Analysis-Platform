import React from 'react';
import PropTypes from 'prop-types';
import ChartButton from './ChartButton/ChartButton';
import { chartTypes } from '../../constants/constants';

const propTypes = {
  clicked: PropTypes.func.isRequired,
};

const ChartButtons = (props) => {
  const { clicked } = props;
  return (
    <div>
      <ChartButton clicked={clicked} chartType={chartTypes.PIE} title="Pie" />
      <ChartButton clicked={clicked} chartType={chartTypes.DOUGHNUT} title="Doughnut" />
      <ChartButton clicked={clicked} chartType={chartTypes.BAR} title="Bar" />
      <ChartButton clicked={clicked} chartType={chartTypes.HORIZONTAL_BAR} title="HorizontalBar" />
      <ChartButton clicked={clicked} chartType={chartTypes.POLAR} title="Polar" />
    </div>
  );
};

ChartButtons.propTypes = propTypes;
export default ChartButtons;
