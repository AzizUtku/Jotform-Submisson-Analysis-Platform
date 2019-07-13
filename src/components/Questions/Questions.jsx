/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { allowedControls } from '../../constants/constants';
import { getQuestions, getSubmissions } from '../../api/api';
import Question from './Question/Question';

const propTypes = {
  location: PropTypes.object.isRequired,
  apiKey: PropTypes.string.isRequired,
};

class Questions extends React.Component {
  state = {
    questions: [],
    detailsLoaded: false,
  };

  componentDidMount() {
    const { location, apiKey } = this.props;
    console.log('MOUNTED', this.props);
    const query = new URLSearchParams(location.search);
    let formId;
    for (const param of query.entries()) {
      if (param[0] === 'formId') {
        formId = param[1];
      }
    }

    if (formId) {
      getQuestions(apiKey, formId, (response) => {
        const questions = response.data.content;
        for (const key in response.data.content) {
          questions[key].answers = [];
        }

        getSubmissions(apiKey, formId, (res) => {
          const submissions = res.data.content;
          for (let i = 0; i < submissions.length; i += 1) {
            const submission = submissions[i];
            const { answers } = submission;
            for (const answerKey in answers) {
              if (questions[answerKey]) {
                questions[answerKey].answers.push(answers[answerKey].answer);
              }
            }
          }

          // eslint-disable-next-line react/no-unused-state
          this.setState({ questions, detailsLoaded: true });
        });
      });
    }
  }

  render() {
    const { detailsLoaded, questions } = this.state;
    if (detailsLoaded) {
      console.log('Questions: ', questions);
      const content = [];
      let i = 0;
      for (const questionKey in questions) {
        const question = questions[questionKey];
        if (question.type in allowedControls && allowedControls[question.type]) {
          i += 1;
          console.log('');
          console.log('Question ', i, ' : ', question);
          if (allowedControls[question.type]) {
            content.push(
              <Question
                type={question.type}
                title={question.text}
                no={`Question ${i}`}
                key={question.name}
                question={question}
              />
            );
          }
        }
      }
      return content;
    }
    return <h2>Loading...</h2>;
  }
}

Questions.propTypes = propTypes;
export default withRouter(Questions);
