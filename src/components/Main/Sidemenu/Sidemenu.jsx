import React from 'react';
import Forms from '../../Forms/Forms';
import Logo from './Logo/Logo';
import Section from './MenuSection/MenuSection';
import './Sidemenu.scss';

const Sidemenu = () => (
  <section className="sideMenu">
    <Logo name="JotForm" />
    <nav>
      <Section title="FORMS">
        <Forms />
      </Section>
    </nav>
  </section>
);

export default Sidemenu;
