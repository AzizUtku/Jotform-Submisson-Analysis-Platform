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

class Address extends React.Component {
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
      title, no, question,
    } = this.props;

    const labels = [];
    const amountOfAnswers = {};
    let totalAnswers = 0;

    const { answers } = question;

    if (answers) {
      answers.forEach((element) => {
        let city = 'empty';
        if (element && element.city) {
          ({ city } = element);
        }
        if (city in amountOfAnswers) {
          amountOfAnswers[city] += 1;
        } else {
          amountOfAnswers[city] = 1;
          if (!labels.includes(city)) {
            labels.push(city);
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

Address.propTypes = propTypes;
export default Address;
