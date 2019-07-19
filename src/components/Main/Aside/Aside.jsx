/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsideHeader from './AsideHeader/AsideHeader';
import AsideSection from './AsideSection/AsideSection';
import Cards from './SectionContent/Cards/Cards';
import Info from './SectionContent/Info/Info';
import './Aside.scss';

const propTypes = {
  selectedForm: PropTypes.object.isRequired,
};

const Aside = (props) => {
  const { selectedForm } = props;
  return (
    <section className="aside">
      <aside>
        <AsideHeader title="Form Details" id={selectedForm.id} url={selectedForm.url} />
        <AsideSection title="Form Statistics">
          <Cards />
        </AsideSection>
        <AsideSection title="Form Details" iconClass="fa-caret-square-o-down">
          <Info />
        </AsideSection>
      </aside>
    </section>
  );
};

const mapStateToProps = state => ({
  selectedForm: state.data.selectedForm,
});

Aside.propTypes = propTypes;
export default connect(mapStateToProps)(Aside);
