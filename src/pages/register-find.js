/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import { Box, Flex } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';
import BackgroundImage from 'gatsby-background-image';
import { ButtonSecondary } from '../components/Buttons';

const imgStyle = css`
  border-radius: 5px;
`;

const RegisterFind = ({ data }) => {
  const imageData = data.about.childImageSharp;
  const mapData = data.map.childImageSharp;
  const artCouncil = data.artCouncil.childImageSharp;
  const kentCc = data.kentCc.childImageSharp;
  const creativeF = data.creativeF.childImageSharp;
  const loveMusic = data.loveMusic.childImageSharp;
  return (
    <PageWrapper>
      <BackgroundImage
        Tag="section"
        className={imgStyle}
        fluid={mapData.fluid}
        backgroundColor={`#FFFFFF`}
        padding="20px"
      >
        <Flex justifyContent="center" align-items="center">
          <Box 
            bg='#f1f1f0'
            width={[1, '80%', '60%']}
            m={['3.5rem 0', '3.5rem 0', '5.5rem auto']}
            px={[3, 3, 5]}
            py={[3, 3, 3]}
            color={colors.secondary}
            textAlign="center">
            <h1>CONGRATULATIONS!</h1>
            <p>Well done for finding</p>
            <Box>
            <ButtonSecondary>Make an account</ButtonSecondary>
            <ButtonSecondary>Play Annonymously</ButtonSecondary>
            </Box>
          </Box>
        </Flex>
        <Box bg={colors.secondary} pb={[0]}>
          <Flex justifyContent="center" wrap={['wrap', 'nowrap', 'nowrap']}>
            <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
              <Img
              className={imgStyle}
              alt="Arts Council Logo"
              fluid={artCouncil.fluid}
              />
            </Box>
            <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
              <Img
              className={imgStyle}
              alt="kent County Council Logo"
              fluid={kentCc.fluid}
              />
            </Box>
            <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
              <Img
              className={imgStyle}
              alt="Folkestone Quaterhouse Logo"
              fluid={creativeF.fluid}
              />
            </Box>
            <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
              <Img
              className={imgStyle}
              alt="Love Music Help Muscians UK Logo"
              fluid={loveMusic.fluid}
              />
            </Box>
            <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
              <Img
              className={imgStyle}
              alt="Picture of X"
              fluid={imageData.fluid}
              />
            </Box>
          </Flex>
        </Box>
      </BackgroundImage>
    </PageWrapper>
  );
};

export const query = graphql`
query {
  about: file(relativePath: { eq: "about.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  map: file(relativePath: { eq: "map.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  artCouncil: file(relativePath: { eq: "arts-council.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  kentCc: file(relativePath: { eq: "kent-cc.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  creativeF: file(relativePath: { eq: "folkestone-qh.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  loveMusic: file(relativePath: { eq: "love-music.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  allContentJson {
        edges {
            node {
                index {
                    title
                    aboutText
                }
      }
    }
  }
}
`;

export default RegisterFind;
