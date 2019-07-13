/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import WordCloud from '../../../Charts/WordCloud/WordCloud';

const propTypes = {
  question: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  no: PropTypes.string.isRequired,
};

const Textarea = (props) => {
  const {
    title, no, children, question,
  } = props;

  let text = '';
  const { answers } = question;
  if (answers) {
    answers.forEach((answer) => {
      text = text.concat(answer);
    });
  }

  return (
    <div className="Question">
      <h3>{title}</h3>
      <p className="left-corner">
        <span className="w3-badge-little">{no}</span>
      </p>
      <WordCloud text={text} minSize={14} maxSize={40} maxAmount={50} />
      <p>Total submission: {answers.length}</p>
      {children}
    </div>
  );
};

Textarea.propTypes = propTypes;
export default Textarea;
