/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleInfo from './SingleInfo/SingleInfo';
import ColoredSingleInfo from './SingleInfo/ColoredSingleInfo';

const propTypes = {
  selectedForm: PropTypes.object.isRequired,
};

const Info = (props) => {
  const { selectedForm } = props;
  let status;
  if (selectedForm.status && selectedForm.status.length > 0) {
    status = selectedForm.status.slice(0, 1) + selectedForm.status.slice(1).toLowerCase();
  }
  const active = status === 'Enabled';

  return (
    <div className="info-content">
      <ColoredSingleInfo name="Status" value={status} active={active} />
      <SingleInfo name="Last Submission" value={selectedForm.last_submission} />
      <SingleInfo name="Last Update" value={selectedForm.updated_at} />
      <SingleInfo name="Creation" value={selectedForm.created_at} />
    </div>
  );
};

const mapStateToProps = state => ({
  selectedForm: state.data.selectedForm,
});

Info.propTypes = propTypes;
export default connect(mapStateToProps)(Info);
