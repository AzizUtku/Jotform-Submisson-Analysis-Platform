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
    return (
      <section className="content">
        <ContentHeader title="Summary" path={selectedForm.title} />
        <Questions />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  selectedForm: state.data.selectedForm,
});

Content.propTypes = propTypes;
export default connect(mapStateToProps)(Content);
