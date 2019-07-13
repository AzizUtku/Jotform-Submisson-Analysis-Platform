/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Charts from '../../../Charts/Charts';
import ChartButtons from '../../../ChartButtons/ChartButtons';
import { chartTypes } from '../../../../constants/constants';

const propTypes = {
  question: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  no: PropTypes.string.isRequired,
};

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: chartTypes.PIE,
    };
  }

  chartTypeHandler = (chartType) => {
    this.setState({ chartType });
  };

  render() {
    const { chartType } = this.state;
    const {
      title, no, children, question,
    } = this.props;

    let labels = [];
    const amountOfAnswers = {};
    let totalAnswers = 0;

    const { answers } = question;

    labels = question.options.split('|');
    if (answers) {
      answers.forEach((element) => {
        if (element in amountOfAnswers) {
          amountOfAnswers[element] += 1;
        } else {
          amountOfAnswers[element] = 1;
          if (!labels.includes(element)) {
            labels.push(element);
          }
        }
        totalAnswers += 1;
      });
    }
    const amounts = labels.map(label => amountOfAnswers[label]);

    return (
      <div className="Question">
        <h3>{title}</h3>
        <p className="left-corner">
          <span className="w3-badge-little">{no}</span>
        </p>
        <Charts
          chartType={chartType}
          labels={labels}
          amounts={amounts}
          totalAnswers={totalAnswers}
        />
        <p>Total submission: {totalAnswers}</p>
        {children}
        <ChartButtons clicked={this.chartTypeHandler} />
      </div>
    );
  }
}

Radio.propTypes = propTypes;
export default Radio;
