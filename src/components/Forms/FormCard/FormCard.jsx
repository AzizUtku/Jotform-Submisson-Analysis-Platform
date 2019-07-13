/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './FormCard.css';

import { Link } from 'react-router-dom';

const propTypes = {
  title: PropTypes.string.isRequired,
  no: PropTypes.number.isRequired,
  count: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

class FormCard extends React.Component {
  render() {
    const {
      title, no, count, children, id,
    } = this.props;
    return (
      <div className="FormCard">
        <h3>{title}</h3>
        <p className="left-corner">
          <span className="w3-badge-little">
            Form
            {no}
          </span>
        </p>
        <p className="right-corner">
          Submissions:
          <span className="w3-badge">{count}</span>
        </p>
        <Link
          to={{
            pathname: '/questions',
            search: `?formId=${id}`,
          }}
        >
          <button type="button" className="btnMaterial">
            Details
          </button>
        </Link>

        {children}
      </div>
    );
  }
}

FormCard.propTypes = propTypes;
export default FormCard;
