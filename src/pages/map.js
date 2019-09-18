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

const imgStyle = css`
  border-radius: 5px;
`;

const Map = ({ data }) => {
  const mapImage = data.file.childImageSharp;
  return (
    <PageWrapper>
      <Box bg={colors.primary}>
        <BackgroundImage
          Tag="section"
          className={imgStyle}
          fluid={mapImage.fluid}
          backgroundSize='cover'
        >
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
        </BackgroundImage>
      </Box>
    </PageWrapper>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "map.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Map;
