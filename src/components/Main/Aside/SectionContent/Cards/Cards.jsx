/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card/Card';

const propTypes = {
  selectedForm: PropTypes.object.isRequired,
};

const Cards = (props) => {
  const { selectedForm } = props;
  return (
    <div className="card-content">
      <Card name="Total Submissions" value={selectedForm.count} />
      <Card name="New Submissions" value={selectedForm.new} />
    </div>
  );
};

const mapStateToProps = state => ({
  selectedForm: state.data.selectedForm,
});

Cards.propTypes = propTypes;
export default connect(mapStateToProps)(Cards);
