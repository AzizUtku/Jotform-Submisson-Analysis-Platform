/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from '../../Question/QuestionCard/QuestionCard';
import Charts from '../../../Charts/Charts';
import { chartTypes } from '../../../../constants/constants';

const propTypes = {
  question: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  no: PropTypes.number.isRequired,
};

class Yesno extends React.Component {
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
        const el = element || 'empty';
        if (el in amountOfAnswers) {
          amountOfAnswers[el] += 1;
        } else {
          amountOfAnswers[el] = 1;
          if (!labels.includes(el)) {
            labels.push(el);
          }
        }
        totalAnswers += 1;
      });
    }
    const amounts = labels.map(label => amountOfAnswers[label]);

    return (
      <QuestionCard
        title={title}
        no={no}
        chartTypeHandler={this.chartTypeHandler}
        totalAnswers={totalAnswers}
      >
        <Charts
          chartType={chartType}
          labels={labels}
          amounts={amounts}
          totalAnswers={totalAnswers}
        />
      </QuestionCard>
    );
  }
}

Yesno.propTypes = propTypes;
export default Yesno;
