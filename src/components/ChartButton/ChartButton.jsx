import React from "react";
import "./ChartButton.css";

import icBar from '../../assets/chart-bar.png'
import icDonut from '../../assets/chart-bar.png'
import icPie from '../../assets/chart-bar.png'
import icTimeLine from '../../assets/chart-bar.png'

class ChartButton extends React.Component {
  render() {
    const {clicked, chartType, title} = this.props;
    return (
      <button className="btnMaterial btnChart" onClick={() => this.props.clicked(this.props.chartType)}>{this.props.title}</button>
    );
  }
}

export default ChartButton;
