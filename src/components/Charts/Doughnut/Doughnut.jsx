/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { chartBackgroundColors, chartHoverBackgroundColors } from '../../../constants/constants';

const propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  amounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalAnswers: PropTypes.number.isRequired,
};

const DoughnutChart = (props) => {
  const { labels, amounts, totalAnswers } = props;
  const chartData = {
    labels,
    datasets: [
      {
        labels,
        fill: false,
        data: amounts,
        backgroundColor: chartBackgroundColors,
        hoverBackgroundColor: chartHoverBackgroundColors,
      },
    ],
  };

  const options = {
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const meta = dataset._meta[Object.keys(dataset._meta)[0]];
          const { total } = meta;
          const currentValue = dataset.data[tooltipItem.index];
          const percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
          return `${currentValue} (${percentage}%)`;
        },
        title(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
      },
    },
    scales: {
      barThickness: 1,
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: totalAnswers, // Your absolute max value
            stepSize: totalAnswers / 5,
            callback(value) {
              return `${((value / totalAnswers) * 100).toFixed(0)}%`; // convert it to percentage
            },
          },
          scaleLabel: {
            display: true,
            labelString: 'Percentage',
          },
        },
      ],
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

DoughnutChart.propTypes = propTypes;
export default DoughnutChart;
