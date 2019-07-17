/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  title: PropTypes.string.isRequired,
  selectedForm: PropTypes.object.isRequired,
  path: PropTypes.string,
};

const defaultProps = {
  path: '',
};

const ContentHeader = (props) => {
  const { path, title, selectedForm } = props;
  return (
    <div className="header">
      <div className="left">
        <div className="navigation">
          Forms
          { selectedForm.id && <i className="fa fa-long-arrow-right" aria-hidden="true" /> }
          { selectedForm.id && path }
        </div>
        <div className="title">
          <span>{title}</span>
          <i className="fa fa-caret-down" aria-hidden="true" />
        </div>
      </div>
      <div className="right">
        { selectedForm.id && (
          <button type="button">
            <i className="fa fa-download" aria-hidden="true" />
            Download PDF
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedForm: state.data.selectedForm,
});

ContentHeader.propTypes = propTypes;
ContentHeader.defaultProps = defaultProps;
export default connect(mapStateToProps)(ContentHeader);
