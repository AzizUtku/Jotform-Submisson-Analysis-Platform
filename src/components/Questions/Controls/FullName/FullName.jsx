/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { getGenders } from '../../../../api/api';
import Charts from '../../../Charts/Charts';
import ChartButtons from '../../../ChartButtons/ChartButtons';
import { chartTypes } from '../../../../constants/constants';
import './FullName.css';

const propTypes = {
  question: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  no: PropTypes.string.isRequired,
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
      title, no, children, question,
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
              console.log(response);
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
          <h3>{title}</h3>
          <p className="left-corner">
            <span className="w3-badge-little">{no}</span>
          </p>
          <div className="loader" />
        </div>
      );
    }

    const { amountOfAnswers, totalAnswers } = this.state;
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

FullName.propTypes = propTypes;
export default FullName;
