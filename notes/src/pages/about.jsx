import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

import ReactDOM from 'react-dom';
import './app.css'

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page"></Header>
    <Container center={center}>
      <p><a href="https://den8383.github.io/portfolio/">自己紹介ページです</a></p>
      <p><a href="https://github.com/den8383">githubアカウント</a></p>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
