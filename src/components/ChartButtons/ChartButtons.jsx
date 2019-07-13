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
    <React.Fragment>
      <ChartButton clicked={clicked} chartType={chartTypes.PIE} title="Pie" />
      <ChartButton clicked={clicked} chartType={chartTypes.DOUGHNUT} title="Doughnut" />
      <ChartButton clicked={clicked} chartType={chartTypes.BAR} title="Bar" />
      <ChartButton clicked={clicked} chartType={chartTypes.HORIZONTAL_BAR} title="HorizontalBar" />
      <ChartButton clicked={clicked} chartType={chartTypes.POLAR} title="Polar" />
    </React.Fragment>
  );
};

ChartButtons.propTypes = propTypes;
export default ChartButtons;
