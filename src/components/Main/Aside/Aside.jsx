import React from 'react';
import AsideHeader from './AsideHeader/AsideHeader';
import AsideSection from './AsideSection/AsideSection';
import './Aside.scss';

const Aside = () => {
  return (
    <section className="aside">
      <aside>
        <span className="close">&times;</span>
        <AsideHeader title="Form Details" id="2343csads23" />
        <AsideSection title="Form Statistics" />
      </aside>
    </section>
  );
};

export default Aside;
