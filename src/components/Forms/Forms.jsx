import React from 'react';
import PropTypes from 'prop-types';
import FormCard from './FormCard/FormCard';
import { getForms } from '../../api/api';

const propTypes = {
  apiKey: PropTypes.string.isRequired,
};

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forms: [],
    };

    const { apiKey } = this.props;
    getForms(apiKey, (response) => {
      this.setState({ forms: response.data.content });
    });
  }

  render() {
    let content = <h2>Loading...</h2>;
    const { forms } = this.state;
    if (forms) {
      content = forms.map((form, index) => <FormCard key={form.id} no={index + 1} {...form} />);
    }
    return content;
  }
}

Forms.propTypes = propTypes;
export default Forms;
