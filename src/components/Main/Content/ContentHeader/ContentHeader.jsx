import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const ContentHeader = (props) => {
  const { path, title } = props;
  return (
    <div className="header">
      <div className="left">
        <div className="navigation">
          Forms
          <i className="fa fa-long-arrow-right" aria-hidden="true" />
          {path}
        </div>
        <div className="title">
          <span>{title}</span>
          <i className="fa fa-caret-down" aria-hidden="true" />
        </div>
      </div>
      <div className="right">
        <button type="button">
          <i className="fa fa-download" aria-hidden="true" />
          Download PDF
        </button>
      </div>
    </div>
  );
};

ContentHeader.propTypes = propTypes;
export default ContentHeader;
