import React from "react";
import axios from 'axios';
import "./FullName.css";
import ChartButton from '../../../ChartButton/ChartButton'
import PieChart from '../../../Charts/Pie/Pie'
import DoughnutChart from '../../../Charts/Doughnut/Doughnut'
import BarChart from '../../../Charts/Bar/Bar'
import HorizontalBarChart from '../../../Charts/HorizontalBar/HorizontalBar'
import PolarChart from '../../../Charts/Polar/Polar'

class FullName extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      chartType : this.chartTypes.PIE,
      loaded : false,
      amountOfAnswers : {},
      totalAnswers : 0,
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
    let labels = ["male", "female", "unknown", "empty"];
    if(!this.state.loaded){
      let amountOfAnswers = {male: 0, female: 0, unknown: 0, empty: 0,};
      let totalAnswers = 0;
      const answers = question.answers;

      if(answers){
        answers.forEach((element, index) => {

          if(!element){
            totalAnswers++;
            amountOfAnswers.empty = amountOfAnswers.empty + 1;
          } else {
            axios.get("https://api.genderize.io/?name=" + element["first"]).then( response => {
              console.log(response);
              if(!response.data.gender){
                amountOfAnswers.unknown = amountOfAnswers.unknown + 1;
              } else {
                amountOfAnswers[response.data.gender] = amountOfAnswers[response.data.gender] + 1;
              }
              totalAnswers++;
              if(totalAnswers === answers.length){
                this.setState({loaded: true, amountOfAnswers: amountOfAnswers, totalAnswers: totalAnswers});
              }
            });
          }
         

          
        });
      }

      return( <div className="Question">
                <h3>{title}</h3>
                <p className="left-corner"><span className="w3-badge-little">{no}</span></p>
                 <div className="loader"></div>
               </div>
            );
    } 

    const amountOfAnswers = this.state.amountOfAnswers;
    const totalAnswers = this.state.totalAnswers;
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

export default FullName;
