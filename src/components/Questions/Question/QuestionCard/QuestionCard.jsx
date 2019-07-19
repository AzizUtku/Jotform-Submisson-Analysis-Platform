/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import ChartButtons from '../../../ChartButtons/ChartButtons';

const propTypes = {
  title: PropTypes.string.isRequired,
  totalAnswers: PropTypes.number.isRequired,
  chartTypeHandler: PropTypes.func.isRequired,
  no: PropTypes.number.isRequired,
  withButtons: PropTypes.bool,
};

const defaultProps = {
  withButtons: true,
};

class QuestionCard extends React.Component {
  state = {
    hidden: false,
  }

  collapseHandler = () => {
    this.setState(prevState => ({ hidden: !prevState.hidden }));
  }

  render() {
    const {
      title, no, totalAnswers, chartTypeHandler, children, withButtons,
    } = this.props;

    const { hidden } = this.state;
    return (
      <div className="Question">
        <div className="question-title" role="button" onClick={this.collapseHandler} onKeyDown={this.collapseHandler} tabIndex={no}>
          <i className="fa fa-signal" aria-hidden="true" />
          {title}
          <i className="fa fa-caret-down" aria-hidden="true" />
        </div>
        <div className="info">Total submissions: {totalAnswers}</div>
        {!hidden && (
          <React.Fragment>
            {children}
            {withButtons && <ChartButtons clicked={chartTypeHandler} />}
          </React.Fragment>
        )}
      </div>
    );
  }
}

QuestionCard.defaultProps = defaultProps;
QuestionCard.propTypes = propTypes;
export default QuestionCard;
