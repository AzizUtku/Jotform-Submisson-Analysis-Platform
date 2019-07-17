import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MenuElement from '../Main/Sidemenu/MenuSection/MenuElement/MenuElement';
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
      content = forms.map((form, index) => (
        <MenuElement value={form.title} key={form.id} no={index + 1} {...form}>
          <NavLink
            isActive={
              (match, location) => {
                if (!location) return false;
                const { pathname, search } = location;
                return pathname === '/questions' && search === (`?formId=${form.id}`);
              }
            }
            activeClassName="active"
            to={{
              pathname: '/questions',
              search: `?formId=${form.id}`,
            }}
          >
            <i className="fa fa-file" aria-hidden="true" />
            {form.title}
          </NavLink>
        </MenuElement>
      ));
    }
    return content;
  }
}

Forms.propTypes = propTypes;
export default Forms;
