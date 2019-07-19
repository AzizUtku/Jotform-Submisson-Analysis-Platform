/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { allowedControls } from '../../constants/constants';
import Question from './Question/Question';

const propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

class Questions extends React.Component {
  state = {
    questions: [],
    detailsLoaded: false,
    noId: true,
    id: '',
  };

  componentDidMount() {
    this.loadQuestions();
  }

  componentDidUpdate() {
    this.loadQuestions();
  }


  loadQuestions = () => {
    const { location } = this.props;
    const { id } = this.state;
    const query = new URLSearchParams(location.search);
    let formId;
    for (const param of query.entries()) {
      if (param[0] === 'formId') {
        formId = param[1];
      }
    }
    if (formId === id) {
      return;
    }
    if (formId) {
      window.JF.getFormQuestions(formId, (response) => {
        const questions = response;
        for (const key in response) {
          questions[key].answers = [];
        }
        window.JF.getFormSubmissions(formId, (res) => {
          const submissions = res;
          for (let i = 0; i < submissions.length; i += 1) {
            const submission = submissions[i];
            const { answers } = submission;
            for (const answerKey in answers) {
              if (questions[answerKey]) {
                questions[answerKey].answers.push(answers[answerKey].answer);
              }
            }
          }
          this.setState({ questions, detailsLoaded: true, id: formId });
        });
      });
    }
  }

  render() {
    const { detailsLoaded, questions, noId } = this.state;
    if (detailsLoaded) {
      const content = [];
      let i = 0;
      for (const questionKey in questions) {
        const question = questions[questionKey];
        if (question.type in allowedControls && allowedControls[question.type]) {
          i += 1;
          if (allowedControls[question.type]) {
            content.push(
              <Question
                type={question.type}
                title={question.text}
                no={i}
                key={question.name}
                question={question}
              />
            );
          }
        }
      }
      return content;
    }
    if (noId) {
      return <div className="loader" />;
    }
    return <h2>Loading...</h2>;
  }
}

Questions.propTypes = propTypes;
export default withRouter(Questions);
