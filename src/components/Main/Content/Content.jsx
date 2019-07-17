/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ContentHeader from './ContentHeader/ContentHeader';
import './Content.scss';
import Questions from '../../Questions/Questions';

class Content extends React.Component {
  render() {
    return (
      <section className="content">
        <ContentHeader title="Summary" path="file_12/31/18.log" />
        <Questions />
      </section>
    );
  }
}

export default Content;
