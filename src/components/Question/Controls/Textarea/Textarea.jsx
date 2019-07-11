import React from "react";
import WordCloud from '../../../Charts/WordCloud/WordCloud'

class Textarea extends React.Component {
  

  render() {

    const {title, no, children, question} = this.props;


    let text = "";
    const answers = question.answers;
    if(answers){
      answers.forEach(answer => {
        text = text.concat(answer);
      });
    }

    return (
      <div className="Question">
        <h3>{title}</h3>
        <p className="left-corner"><span className="w3-badge-little">{no}</span></p>
        <WordCloud text={text} minSize={14} maxSize={40} maxAmount={50} />
        <p>Total submission: {answers.length}</p>
        {children}
      </div>
    );
  }
}

export default Textarea;
