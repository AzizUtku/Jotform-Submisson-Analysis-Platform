import React from 'react';
import Forms from '../../Forms/Forms';
import Logo from './Logo/Logo';
import Section from './MenuSection/MenuSection';
import './Sidemenu.scss';

const Sidemenu = () => {
  // eslint-disable-next-line no-undef
  const apiKey = window.JF.getAPIKey();
  return (
    <section className="sideMenu">
      <Logo name="JotForm" />
      <nav>
        <Section title="FORMS">
          <Forms apiKey={apiKey} />
        </Section>
      </nav>
    </section>
  );
};

export default Sidemenu;
