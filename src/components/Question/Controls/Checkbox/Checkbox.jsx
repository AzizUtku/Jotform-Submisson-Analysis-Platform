import React from "react";
import ChartButton from '../../../ChartButton/ChartButton'
import PieChart from '../../../Charts/Pie/Pie'
import DoughnutChart from '../../../Charts/Doughnut/Doughnut'
import BarChart from '../../../Charts/Bar/Bar'
import HorizontalBarChart from '../../../Charts/HorizontalBar/HorizontalBar'
import PolarChart from '../../../Charts/Polar/Polar'

class Checkbox extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      chartType : this.chartTypes.PIE,
    }
  }

  chartTypes = {
    PIE : 'PIE',
    DOUGHNUT: 'DOUGHNUT',
    LINE: 'LINE',
    BAR: 'BAR',
    HORIZONTAL_BAR: 'HORIZONTAL_BAR',
    RADAR: 'RADAR',
    BUBBLE: 'BUBBLE',
    SCATTER: 'SCATTER',
  };

  chartTypeHandler = (chartType) => {
    this.setState({chartType : chartType,});
  }

  render() {

    const {title, no, children, question} = this.props;


    let labels = [];
    let amountOfAnswers = {};
    let totalAnswers = 0;

    const answers = question.answers;

    labels = question.options.split('|');
    if(answers){
      answers.forEach(answer => {
        if(!Array.isArray(answer)){
          if(answer in amountOfAnswers ){
            amountOfAnswers[answer] = amountOfAnswers[answer] + 1;
          } else {
            amountOfAnswers[answer] = 1;
            if(!(labels.includes(answer))){
              labels.push(answer);
            }
          }
          return;
        }
        answer.forEach(element => {
          if(element in amountOfAnswers ){
            amountOfAnswers[element] = amountOfAnswers[element] + 1;
          } else {
            amountOfAnswers[element] = 1;
            if(!(labels.includes(element))){
              labels.push(element);
            }
          }
        })
        totalAnswers++;
      });
    }
    
    const amounts = labels.map((label) => amountOfAnswers[label]);

    let chart;
    switch(this.state.chartType) {
      case this.chartTypes.PIE:
        chart = <PieChart labels={labels} amounts={amounts} totalAnswers={totalAnswers} />;
        break;
      case this.chartTypes.DOUGHNUT:
        chart = <DoughnutChart labels={labels} amounts={amounts} totalAnswers={totalAnswers}/>;
        break;
      case this.chartTypes.BAR:
        chart = <BarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers}/>;
        break;
      case this.chartTypes.HORIZONTAL_BAR:
        chart = <HorizontalBarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers}/>;
        break;
      case this.chartTypes.POLAR:
        chart = <PolarChart labels={labels} amounts={amounts} totalAnswers={totalAnswers}/>;
        break;
      default:
          chart = <PieChart labels={labels} amounts={amounts} totalAnswers={totalAnswers}/>;
    }
    return (
      <div className="Question">
        <h3>{title}</h3>
        <p className="left-corner"><span className="w3-badge-little">{no}</span></p>
        {chart}
        <p>Total submission: {totalAnswers}</p>
        {children}
        <ChartButton clicked={this.chartTypeHandler} chartType={this.chartTypes.PIE} title={"Pie"}/>
        <ChartButton clicked={this.chartTypeHandler} chartType={this.chartTypes.DOUGHNUT} title={"Doughnut"}/>
        <ChartButton clicked={this.chartTypeHandler} chartType={this.chartTypes.BAR} title={"Bar"}/>
        <ChartButton clicked={this.chartTypeHandler} chartType={this.chartTypes.HORIZONTAL_BAR} title={"HorizontalBar"}/>
        <ChartButton clicked={this.chartTypeHandler} chartType={this.chartTypes.POLAR} title={"Polar"}/>
      </div>
    );
  }
}

export default Checkbox;
