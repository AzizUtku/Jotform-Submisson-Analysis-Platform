import React from 'react';
import './App.css';
import axios from 'axios';
import Card from '../components/Card/Card';
import FormCard from '../components/FormCard/FormCard';
import Question from '../components/Question/Question';
import Yesno from '../components/Question/Controls/YesNo/YesNo';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isAuthenticated : false,
      forms: [],
      selectedFormId: null,
      detailsLoaded: false,
      apiKey: null,
      questions: [],
    }
  }

  allowedControls = {
    control_yesno: true,
    control_radio: true,
    control_checkbox: true,
    control_fullname: true,
    control_textarea: true,
    control_textbox: false,
    control_email: false,  
    control_address: false,
    control_phone: false,
    control_dropdown: false,
    control_number: false,
    control_spinner: false,
    control_matrix: false,
    control_rating: false,
    control_scale: false,
  }

  authenticateHandler = () => {
    window.JF.login( () => {
        let apiKey = window.JF.getAPIKey();
        //console.log("Success: " + apiKey);

        this.setState({
          isAuthenticated : true,
          apiKey: apiKey,
        });

        axios({
          url: 'https://api.jotform.com/user/forms',
          method: 'get',
          headers: {
            'APIKEY': apiKey,
          }
        }).then( response => {
          this.setState({forms: response.data.content,})
        });

      }, () => {
        this.setState({
            isAuthenticated : false, 
            apiKey: null,
        });
        alert("Could not authorize user");
      });
  }

  getQuestionsHandler(formId) {
    //Get questions
    axios.get("https://api.jotform.com/form/" + formId + "/questions?apiKey=" + this.state.apiKey)
    .then( response => {
      const questions = response.data.content;
      for (const key in response.data.content) {
        questions[key].answers = [];
      }

      axios.get("https://api.jotform.com/form/" + formId + "/submissions?apiKey=" + this.state.apiKey)
        .then( res => {
          
          const submissions = res.data.content;
          for(let i = 0; i < submissions.length; i++) {
            const submission = submissions[i];
            const answers = submission.answers;
            for(const answerKey in answers) {
              if(questions[answerKey]){
                questions[answerKey].answers.push(answers[answerKey].answer);
              }
            }
          }

          this.setState({
            questions: questions,
            detailsLoaded: true,
            selectedFormId: formId,
          });

        });

    });
  }

  render() {

    let content;

    if(!this.state.isAuthenticated){
      content = <Card title="Authentication" content="Please sign in to continue!">
                   <button className="btnLogin" onClick={this.authenticateHandler}>Sign in</button>
                </Card>;
    } 
    else {
      if(!this.state.selectedFormId){
        content = this.state.forms.map( (form, index) => {
          return <FormCard no={index + 1}
                           key={form.id}
                           onClick={ () => { this.getQuestionsHandler(form.id) } }
                          {...form}>
                </FormCard>;
        });
      } else {
        
        console.log("Questions: ", this.state.questions);
        const questions = this.state.questions;
        content = [];
        let i = 0;
        for(const questionKey in questions){
          const question = questions[questionKey];
          if( !(question.type in this.allowedControls) || !this.allowedControls[question.type]){
            continue;
          }

          i++;
          console.log("");
          console.log("Question ", i, " : ", question);

          if(this.allowedControls[question.type]){
            content.push(<Question type={question.type} title={question.text} no={"Question " + i } key={question.name} question={question}/>);
          }
        }

      }

      
    }

    return (
      <div className="App">
        { content }
      </div>
    );
  }

}

export default App;
