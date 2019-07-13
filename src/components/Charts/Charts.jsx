/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import PieChart from './Pie/Pie';
import DoughnutChart from './Doughnut/Doughnut';
import BarChart from './Bar/Bar';
import HorizontalBarChart from './HorizontalBar/HorizontalBar';
import PolarChart from './Polar/Polar';
import { chartTypes } from '../../constants/constants';

const propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  amounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalAnswers: PropTypes.number.isRequired,
  chartType: PropTypes.string,
};

const Charts = (props) => {
  const {
    labels, amounts, totalAnswers, chartType,
  } = props;
  let chart;
  switch (chartType) {
    case chartTypes.PIE:
      chart = <PieChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} />;
      break;
    case chartTypes.DOUGHNUT:
      chart = <DoughnutChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} />;
      break;
    case chartTypes.BAR:
      chart = <BarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} />;
      break;
    case chartTypes.HORIZONTAL_BAR:
      chart = <HorizontalBarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} />;
      break;
    case chartTypes.POLAR:
      chart = <PolarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} />;
      break;
    default:
      chart = <PieChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} />;
  }
  return chart || null;
};

Charts.propTypes = propTypes;
export default Charts;
