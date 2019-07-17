/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsideHeader from './AsideHeader/AsideHeader';
import AsideSection from './AsideSection/AsideSection';
import './Aside.scss';

const propTypes = {
  selectedForm: PropTypes.object.isRequired,
};

const Aside = (props) => {
  const { selectedForm } = props;
  return (
    <section className="aside">
      <aside>
        <span className="close">&times;</span>
        <AsideHeader title="Form Details" id={selectedForm.id} url={selectedForm.url} />
        <AsideSection title="Form Statistics" />
      </aside>
    </section>
  );
};

const mapStateToProps = state => ({
  selectedForm: state.data.selectedForm,
});

Aside.propTypes = propTypes;
export default connect(mapStateToProps)(Aside);
