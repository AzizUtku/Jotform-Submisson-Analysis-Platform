import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';

const propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  amounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalAnswers: PropTypes.number.isRequired,
};

const HorizontalBarChart = (props) => {
  const { labels, amounts, totalAnswers } = props;
  const chartData = {
    labels,
    datasets: [
      {
        label: labels,
        data: amounts,
        backgroundColor: ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#DAF7A6'],
        hoverBackgroundColor: ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#DAF7A6'],
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
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      xAxes: [
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

  return <HorizontalBar data={chartData} options={options} />;
};

HorizontalBarChart.propTypes = propTypes;
export default HorizontalBarChart;
