import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionCreators from '../../store/actions';
import MenuElement from '../Main/Sidemenu/MenuSection/MenuElement/MenuElement';

const propTypes = {
  apiKey: PropTypes.string.isRequired,
  onGetForms: PropTypes.func.isRequired,
  onSelectForm: PropTypes.func.isRequired,
  forms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class Forms extends React.Component {
  constructor(props) {
    super(props);
    const { onGetForms } = props;
    onGetForms();
  }

  render() {
    let content = <h2>Loading...</h2>;
    const { forms, onSelectForm } = this.props;
    if (forms) {
      content = forms.map((form, index) => (
        <MenuElement value={form.title} key={form.id} no={index + 1} {...form}>
          <NavLink
            onClick={() => { onSelectForm(form); }}
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

const mapStateToProps = state => ({
  apiKey: state.auth.apiKey,
  forms: state.data.forms,
});

const mapDispatchToProps = dispatch => ({
  onGetForms: () => { dispatch(actionCreators.getForms()); },
  onSelectForm: (form) => {
    dispatch(actionCreators.selectForm(form));
  },
});

Forms.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Forms);
