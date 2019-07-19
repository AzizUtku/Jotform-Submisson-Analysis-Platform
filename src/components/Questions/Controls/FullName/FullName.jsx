/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from '../../Question/QuestionCard/QuestionCard';
import Charts from '../../../Charts/Charts';
import { getGenders } from '../../../../api/api';
import { chartTypes } from '../../../../constants/constants';
import './FullName.css';

const propTypes = {
  question: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  no: PropTypes.number.isRequired,
};

class FullName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: chartTypes.PIE,
      loaded: false,
      amountOfAnswers: {},
      totalAnswers: 0,
    };
  }

  chartTypeHandler = (chartType) => {
    this.setState({ chartType });
  };

  render() {
    const { chartType, loaded } = this.state;
    const {
      title, no, question,
    } = this.props;
    const labels = ['male', 'female', 'unknown', 'empty'];
    if (!loaded) {
      const amountOfAnswers = {
        male: 0,
        female: 0,
        unknown: 0,
        empty: 0,
      };
      let totalAnswers = 0;
      const { answers } = question;

      if (answers) {
        answers.forEach((element) => {
          if (!element) {
            totalAnswers += 1;
            amountOfAnswers.empty += 1;
          } else {
            getGenders(element.first, (response) => {
              if (!response.data.gender) {
                amountOfAnswers.unknown += 1;
              } else {
                amountOfAnswers[response.data.gender] += 1;
              }
              totalAnswers += 1;
              if (totalAnswers === answers.length) {
                this.setState({
                  loaded: true,
                  amountOfAnswers,
                  totalAnswers,
                });
              }
            });
          }
        });
      }
      return (
        <div className="Question">
          <div className="question-title">
            <i className="fa fa-signal" aria-hidden="true" />
            {title}
            <i className="fa fa-caret-down" aria-hidden="true" />
          </div>
          <div className="loader" />
        </div>
      );
    }

    const { amountOfAnswers, totalAnswers } = this.state;
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

FullName.propTypes = propTypes;
export default FullName;
