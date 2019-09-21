/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import { Box } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';
import BackgroundImage from 'gatsby-background-image';
import Buttons from '../components/Buttons'

const divStyle = css`
  position: relative;
  `;
  
const innerStyle = css`
  z-index: 1;
`;

const outerStyle = css`
    position: absolute;
    top: -300px;
    left: -400px;
    z-index: 3;
`;

const Map = ({ data }) => {
  const mapImage = data.map.childImageSharp;
  const about = data.about.childImageSharp;

  return (
    <PageWrapper>
        <p>hello test</p>
        <div className={divStyle}>
          <Img
            className={innerStyle}
            alt="big map"
            fixed={mapImage.fixed}>    
          </Img>
          <Img
            className={outerStyle}
            alt="gooseberry"
            fixed={about.fixed}>    
          </Img>
        </div>
      <Box bg={colors.primary}>
          <Box
            width={[1, 1, 1 / 2]}
            m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
            px={[3, 3, 0]}
            color={colors.secondary}>
            <h1 className="title-beacons">BEACONS</h1>
            <h3 className="title-beacons">FOLKESTONE</h3>
          </Box>
          <Box width={[1, 1, 1 / 4]}>
            <Buttons>
              <h5 class="button">Click for instructions</h5>
            </Buttons>
            <Buttons>
              <h5 class="button">Show grid</h5>
            </Buttons>
          </Box>
      </Box>
    </PageWrapper>
  );
};

export const query = graphql`
  query {
    about: file(relativePath: { eq: "black-gooseberry.png" }) {
      childImageSharp {
        fixed(width: 20) {
        ...GatsbyImageSharpFixed
        }
      }
    }
    map: file(relativePath: { eq: "map-with-roads.png" }) {
      childImageSharp {
        fixed(width: 900) {
        ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Map;
