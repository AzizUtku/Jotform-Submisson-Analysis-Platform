/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  chartBackgroundColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  chartType: PropTypes.string,
};

const Charts = (props) => {
  const {
    labels, amounts, totalAnswers, chartType, chartBackgroundColors,
  } = props;
  let chart;
  switch (chartType) {
    case chartTypes.PIE:
      chart = <PieChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} chartBackgroundColors={chartBackgroundColors} />;
      break;
    case chartTypes.DOUGHNUT:
      chart = <DoughnutChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} chartBackgroundColors={chartBackgroundColors} />;
      break;
    case chartTypes.BAR:
      chart = <BarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} chartBackgroundColors={chartBackgroundColors} />;
      break;
    case chartTypes.HORIZONTAL_BAR:
      chart = <HorizontalBarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} chartBackgroundColors={chartBackgroundColors} />;
      break;
    case chartTypes.POLAR:
      chart = <PolarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} chartBackgroundColors={chartBackgroundColors} />;
      break;
    default:
      chart = <PieChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} chartBackgroundColors={chartBackgroundColors} />;
  }
  return chart || null;
};

const mapStateToProps = state => ({
  chartBackgroundColors: state.data.chartBackgroundColors,
});

Charts.propTypes = propTypes;
export default connect(mapStateToProps)(Charts);
