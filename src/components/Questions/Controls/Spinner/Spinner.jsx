/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import WordCloud from '../../../Charts/WordCloud/WordCloud';
import QuestionCard from '../../Question/QuestionCard/QuestionCard';

const propTypes = {
  question: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  no: PropTypes.number.isRequired,
};

const Spinner = (props) => {
  const {
    title, question, no,
  } = props;
  let text = '';
  const { answers } = question;
  if (answers) {
    answers.forEach((answer) => {
      text = text.concat(answer || 'empty').concat(' ');
    });
  }
  return (
    <QuestionCard
      withButtons={false}
      title={title}
      no={no}
      chartTypeHandler={() => {}}
      totalAnswers={answers.length}
    >
      <WordCloud text={text} minSize={14} maxSize={40} maxAmount={50} />
    </QuestionCard>
  );
};

Spinner.propTypes = propTypes;
export default Spinner;
