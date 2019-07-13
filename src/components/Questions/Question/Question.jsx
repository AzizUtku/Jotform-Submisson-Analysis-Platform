import React from 'react';
import PropTypes from 'prop-types';
import YesNo from '../Controls/YesNo/YesNo';
import Radio from '../Controls/Radio/Radio';
import Checkbox from '../Controls/Checkbox/Checkbox';
import FullName from '../Controls/FullName/FullName';
import Textarea from '../Controls/Textarea/Textarea';
import './Question.css';

const propTypes = {
  type: PropTypes.string.isRequired,
};

class Question extends React.Component {
  controls = {
    control_yesno: <YesNo {...this.props} />,
    control_radio: <Radio {...this.props} />,
    control_checkbox: <Checkbox {...this.props} />,
    control_fullname: <FullName {...this.props} />,
    control_textarea: <Textarea {...this.props} />,
    control_textbox: <Textarea {...this.props} />,
  };

  render() {
    const { type } = this.props;

    let chart = <YesNo {...this.props} />;

    if (Object.prototype.hasOwnProperty.call(this.controls, type)) {
      chart = this.controls[type];
    }
    return <React.Fragment>{chart}</React.Fragment>;
  }
}

Question.propTypes = propTypes;
export default Question;
