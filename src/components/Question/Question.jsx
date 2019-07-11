import React from "react";
import "./Question.css";

import YesNo from './Controls/YesNo/YesNo'
import Radio from './Controls/Radio/Radio'
import Checkbox from './Controls/Checkbox/Checkbox'
import FullName from './Controls/FullName/FullName'
import Textarea from './Controls/Textarea/Textarea'

class Question extends React.Component {

  controlTypes = {
    CONTROL_YESNO: 'control_yesno',
    CONTROL_RADIO: 'control_radio',
    CONTROL_CHECKBOX: 'control_checkbox',
    CONTROL_FULLNAME: 'control_fullname',
    CONTROL_EMAIL: 'control_email',  
    CONTROL_ADDRESS: 'control_address',
    CONTROL_PHONE: 'control_phone',
    CONTROL_TEXTBOX: 'control_textbox',
    CONTROL_TEXTAREA: 'control_textarea',
    CONTROL_DROPDOWN: 'control_dropdown',
    CONTROL_NUMBER: 'control_number',
    CONTROL_SPINNER: 'control_spinner',
    CONTROL_MATRIX: 'control_matrix',
    CONTROL_RATING: 'control_rating',
    CONTROL_SCALE: 'control_scale',
  };

  render() {

    const {type} = this.props;

    let chart;
    switch(type) {
      case this.controlTypes.CONTROL_YESNO:
        chart = <YesNo {...this.props}/>;
        break;
      case this.controlTypes.CONTROL_RADIO:
        chart = <Radio {...this.props}/>;
        break;
      case this.controlTypes.CONTROL_CHECKBOX:
        chart = <Checkbox {...this.props}/>;
        break;
      case this.controlTypes.CONTROL_FULLNAME:
        chart = <FullName {...this.props}/>;
        break;
      case this.controlTypes.CONTROL_TEXTAREA:
        chart = <Textarea {...this.props}/>;
        break;
      case this.controlTypes.CONTROL_TEXTBOX:
        chart = <Textarea {...this.props}/>;
        break;
      default:
        chart = <YesNo {...this.props}/>;
        break;
    }
    return (
      <React.Fragment>
        {chart}
      </React.Fragment>
    );
  }
}

export default Question;
