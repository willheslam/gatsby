
/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import { Box, Flex  } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';
import BackgroundImage from 'gatsby-background-image';
import Buttons from '../components/Buttons'

const divStyle = css`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
const mapStyle = css`
  z-index: 1;
`;

const gooseberryStyle = css`
  position: absolute !important;
  z-index: 3;
  transform: translate(-50%, -50%);
`;

const gooseberries = [
  {
    id: 'foo',
    top: '30%',
    left: '50%',
    found: false
  },
  {
    id: 'bar',
    top: '20%',
    left: '20%',
    found: true
  }
];

const textTitle = css`
  position: absolute !important;
  top: 10px;
  left: 10px;
  z-index: 3;
`;

const Map = ({ data }) => {
  const mapImage = data.map.childImageSharp;
  const about = data.about.childImageSharp;
  const beaconsText = data.beaconsText.childImageSharp;

  return (
    <PageWrapper>
      <Box>
        <p>hello test</p>
        <div className={divStyle}>
          <Img
            className={textTitle}
            alt="gooseberry"
            fixed={beaconsText.fixed}
          />
          {gooseberries.map(gooseberry => (
            <Img
              key={gooseberry.id}
              className={gooseberryStyle}
              alt="gooseberry"
              fixed={about.fixed}
              style={{
                top: gooseberry.top,
                left: gooseberry.left,
                filter: gooseberry.found ? `sepia(1) hue-rotate(30deg)` : ``
              }}
            />
          ))}
          <Img className={mapStyle} alt="big map" fluid={mapImage.fluid} />
        </div>
        <Flex bg={colors.primary}>
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
              <h5 className="button">Click for instructions</h5>
            </Buttons>
            <Buttons>
              <h5 className="button">Show grid</h5>
            </Buttons>
          </Box>
        </Flex>
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
        fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
        }
      }
    }
    beaconsText: file(relativePath: { eq: "beacons-text-transparent.png" }) {
      childImageSharp {
        fixed(width: 200) {
        ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Map;
