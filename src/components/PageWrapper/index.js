import React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { fontSize } from 'styled-system';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import colors from '../../utils/colors';
require('typeface-fredericka-the-great')


/* eslint-disable */
import normalize from 'normalize.css';
injectGlobal`
  * {
      font-family: 'IM Fell English', serif;
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
  h1.title-beacons {
    font-family: 'Fredericka the Great', cursive;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.secondary}
  };
  p {
    color: ${colors.accent};
    font-family: 'IM Fell Great Primer';
    line-height: 1.2;
    text-align: justify;
  }
  p.italic {
  font-style: italic;
  }
  h5.button {
    color: ${colors.primary}
  }
  /* CSS for forms*/
  input.form-field {
    width: 100%;
    padding: 7px;
    margin: 10px;
    display: block;

  }

  label.form-field-label {
    display: inline-block;
    width: 100%;
    padding: 7px;
    margin: 10px;
    text-align: right;

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
