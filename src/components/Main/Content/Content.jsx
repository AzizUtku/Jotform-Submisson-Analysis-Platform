/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentHeader from './ContentHeader/ContentHeader';
import './Content.scss';
import Questions from '../../Questions/Questions';

const propTypes = {
  selectedForm: PropTypes.object.isRequired,
};

class Content extends React.Component {
  render() {
    const { selectedForm } = this.props;
    const warning = selectedForm.id ? <h2>There are no submissions</h2> : <h2>Please select one of your forms...</h2>;
    const content = (!selectedForm.id || selectedForm.count === '0') ? warning : <Questions />;
    return (
      <section className="content">
        <ContentHeader title="Summary" path={selectedForm.title} />
        { content }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  selectedForm: state.data.selectedForm,
});

Content.propTypes = propTypes;
export default connect(mapStateToProps)(Content);
