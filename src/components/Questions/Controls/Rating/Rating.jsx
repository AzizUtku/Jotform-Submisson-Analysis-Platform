/* eslint-disable prefer-destructuring */
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

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: chartTypes.BAR,
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

    const { answers, scaleFrom, stars } = question;
    for (let i = Number(scaleFrom); i < Number(stars); i += 1) {
      labels.push(i.toString());
    }
    if (answers) {
      answers.forEach((element) => {
        const rating = element || 'empty';
        if (rating in amountOfAnswers) {
          amountOfAnswers[rating] += 1;
        } else {
          amountOfAnswers[rating] = 1;
          if (!labels.includes(rating)) {
            labels.push(rating);
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

Rating.propTypes = propTypes;
export default Rating;
