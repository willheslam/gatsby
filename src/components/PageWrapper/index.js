import React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { fontSize } from 'styled-system';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import colors from '../../utils/colors';

/* eslint-disable */
import normalize from 'normalize.css';
injectGlobal`
  * {
      font-family: 'cinzel', serif;
      box-sizing: border-box;
  };
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
  };
  h1 {
    font-size: 2.4em;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.secondary}
  };
  p {
    color: ${colors.accent};
    font-family: 'roboto';
    line-height: 1.5;
    text-align: justify;
  }
`;
/* eslint-enable */

const FontConfig = styled.div`
  ${fontSize};
`;

const Layout = ({ children }) => (
  <FontConfig fontSize={[1, 2, 3]}>
    <Navigation />
    {children}
    <Footer />
  </FontConfig>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
