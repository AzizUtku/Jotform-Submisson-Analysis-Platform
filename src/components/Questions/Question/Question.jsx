import React from 'react';
import PropTypes from 'prop-types';
import YesNo from '../Controls/YesNo/YesNo';
import Radio from '../Controls/Radio/Radio';
import Checkbox from '../Controls/Checkbox/Checkbox';
import FullName from '../Controls/FullName/FullName';
import Textarea from '../Controls/Textarea/Textarea';
import Email from '../Controls/Email/Email';
import Address from '../Controls/Address/Address';
import Number from '../Controls/Number/Number';
import Spinner from '../Controls/Spinner/Spinner';
import Rating from '../Controls/Rating/Rating';

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
    control_email: <Email {...this.props} />,
    control_address: <Address {...this.props} />,
    control_dropdown: <YesNo {...this.props} />,
    control_number: <Number {...this.props} />,
    control_spinner: <Spinner {...this.props} />,
    control_rating: <Rating {...this.props} />,
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
