import React from 'react';
import '../../sass/main.scss';
import Sidemenu from './Sidemenu/Sidemenu';
import Content from './Content/Content';
import Aside from './Aside/Aside';

const Main = () => {
  return (
    <React.Fragment>
      <Sidemenu />
      <Content />
      <Aside />
    </React.Fragment>
  );
};

export default Main;
