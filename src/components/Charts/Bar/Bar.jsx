import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  amounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalAnswers: PropTypes.number.isRequired,
  chartBackgroundColors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const BarChart = (props) => {
  const {
    labels, amounts, totalAnswers, chartBackgroundColors,
  } = props;
  const chartData = {
    labels,
    datasets: [
      {
        label: labels,
        data: amounts,
        backgroundColor: chartBackgroundColors,
        hoverBackgroundColor: chartBackgroundColors,
      },
    ],
  };

  const options = {
    legend: { display: false },
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

  return <Bar data={chartData} options={options} />;
};

BarChart.propTypes = propTypes;
export default BarChart;
