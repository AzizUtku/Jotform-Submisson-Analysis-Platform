import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  id: '-',
  url: null,
};

const AsideHeader = (props) => {
  const { id, title, url } = props;
  return (
    <div className="top">
      <span className="id">
        {`Form ID: ${id}`}
      </span>
      { url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-external-link" aria-hidden="true" />
        </a>
      )}
      <div className="title">{title}</div>
    </div>
  );
};

AsideHeader.propTypes = propTypes;
AsideHeader.defaultProps = defaultProps;
export default AsideHeader;
