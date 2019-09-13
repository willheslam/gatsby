/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Flex } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';
import ButtonPrimary, { ButtonSecondary } from '../components/Buttons';
import { css } from 'react-emotion';
import BackgroundImage from 'gatsby-background-image';


const imgStyle = css`
  border-radius: 5px;
`;

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  const imageData = data.about.childImageSharp;
  const mapData = data.map.childImageSharp;
  const artCouncil = data.artCouncil.childImageSharp;
  const kentCc = data.kentCc.childImageSharp;
  const creativeF = data.creativeF.childImageSharp;
  const loveMusic = data.loveMusic.childImageSharp;
  return (
    <PageWrapper>
      {/* this is the home page box with title and information */}
      <Flex justifyContent="center" align-items="center">
      <BackgroundImage
          Tag="section"
          className={imgStyle}
          fluid={mapData.fluid}
          backgroundColor={`#FFFFFF`}
          padding="20px"
        >
        <Box 
          bg='#f1f1f0'
          width={[1, '80%', '60%']}
          m={['3.5rem 0', '3.5rem 0', '5.5rem auto']}
          px={[3, 3, 5]}
          py={[3, 3, 3]}
          color={colors.secondary}
          textAlign="center">
          <h1 className="title-beacons">{myData.title}</h1>
          <p>{myData.aboutText}</p>
        </Box>
        </BackgroundImage>
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

// allContentJson - will query and array where there are multiple items. Any query not beginning with 'all' with query a single object