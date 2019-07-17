import React from 'react';
import PropTypes from 'prop-types';
import { Polar } from 'react-chartjs-2';
import { chartBackgroundColors, chartHoverBackgroundColors } from '../../../constants/constants';

const propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  amounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalAnswers: PropTypes.number.isRequired,
};

const PolarChart = (props) => {
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
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          let total = 0;
          dataset.data.forEach((element) => {
            if (element) {
              total += element;
            }
          });
          const currentValue = dataset.data[tooltipItem.index];
          const percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
          return `${currentValue} (${percentage}%)`;
        },
        title: (tooltipItem, data) => data.labels[tooltipItem[0].index],
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

  return <Polar data={chartData} options={options} />;
};

PolarChart.propTypes = propTypes;
export default PolarChart;
