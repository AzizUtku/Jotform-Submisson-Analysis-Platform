import React from "react";
import { Radar } from 'react-chartjs-2';

const RadarChart = (props) => {

  const { labels, amounts, totalAnswers } = props;
  const data = {
    labels: labels,
    datasets: [{
      labels: labels,
      fill: false,
      data: amounts,
      backgroundColor: [
      '#FFC300',
      '#FF5733',
      '#C70039',
      '#900C3F',
      '#581845',
      '#DAF7A6',
      ],
      hoverBackgroundColor: [
      '#FFC300',
      '#FF5733',
      '#C70039',
      '#900C3F',
      '#581845',
      '#DAF7A6',
      ],
    }],
  };

  const options = {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat((currentValue/total*100).toFixed(1));
          return currentValue + ' (' + percentage + '%)';
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      }
    },
    scales: {
      barThickness: 1,
      xAxes: [{
        gridLines: {
            drawOnChartArea: false
        }
      }],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: totalAnswers,// Your absolute max value
            stepSize: totalAnswers / 5,
            callback: function (value) {
              return (value / totalAnswers * 100).toFixed(0) + '%'; // convert it to percentage
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

  return <Radar data={data} options={options}/>;;

}

export default RadarChart;