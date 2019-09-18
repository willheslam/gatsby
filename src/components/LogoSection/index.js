import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Flex } from '../../components/Layout';
import colors from '../../utils/colors';
import { css } from 'react-emotion';

const imgStyle = css`
  border-radius: 5px;
`;

export const Logos = ({ data }) => {
  const artCouncil = data.artCouncil.childImageSharp;
  const kentCc = data.kentCc.childImageSharp;
  const creativeF = data.creativeF.childImageSharp;
  const loveMusic = data.loveMusic.childImageSharp;
  return (
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
          fluid={loveMusic.fluid}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export const query = graphql`
query {
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
}
`;
