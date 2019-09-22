import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';
import { Box, Flex } from '../Layout';
import feather from '../../utils/feather';
import media from '../../utils/media';

const footerStyle = css`
  overflow: hidden;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${colors.secondary};
  color: rgba(255, 255, 255, 0.5);

  & img {
    display: block;
    margin: 0;
  }
  & p {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  text-align: left;
  & p {
    margin: 0;
    margin-bottom: 1.45rem;
  }
`;

const socialList = css`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${media.large`
    width: 50%;
    margin-left: auto;
  `};
`;

const socialItems = css`
  margin-left: 15px;
`

const svgStyles = css`
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
  transition: color 0.15s ease-in;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
`;

const Footer = ({ name, facebook, instagram, twitter, email }) => (
  <div className={footerStyle}>
    <Box width="100%" m="0 auto" p={[3, 3, 4, 3]} align="left" color="#f1f1f0">
      <Flex wrap={['wrap', 'wrap', 'nowrap']} justifyContent="space-between">
        <Box width={[1, 1, 1]}>
          <Wrapper>
            <ul className={socialList}>
              <li className={socialItems}>
                <a
                  title="Link to our Facebook page"
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feather('facebook', ['30', '30'], svgStyles)}
                </a>
              </li>
              <li className={socialItems}>
                <a
                  title="Link to our Twitter account"
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feather('twitter', ['30', '30'], svgStyles)}
                </a>
              </li>
              <li className={socialItems}>
                <a
                  title="Link to out Instragram account"
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feather('instagram', ['30', '30'], svgStyles)}
                </a>
              </li>
              <li className={socialItems}>
                <a title="Our E-Mail address" href={`mailto:${email}`}>
                  {feather('mail', ['30', '30'], svgStyles)}
                </a>
              </li>
            </ul>
          </Wrapper>
        </Box>
      </Flex>
    </Box>
  </div>
);

Footer.propTypes = {
  name: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  email: PropTypes.string
};

Footer.defaultProps = {
  // name: 'Gatbsythemes.com starter',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram',
  email: ''
};

export default Footer;
