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
            <p>One hundred ancient sea gooseberries have washed ashore from the past and become scattered across the landscape. They have stories to tell and songs to sing, but first they need your help: can you help us find them, reunite them, and encourage them to reveal their secrets?</p>
            <p>We are mounting a search, beginning on 17th October 2019, and we invite you to take part.</p>
            <p className="italic">This is a playtest of what we hope will be a large scale event for Folkestone in Spring 2021. 
              If you’d like to join us to help develop the work at this early stage, please email seagooseberries@gmail.com or log in to the website to begin your adventure. 
              You can use the online map on this website and click the “instructions” tab, or contact us for a paper version of the map. </p>
          </Box>
        </BackgroundImage>
      </Flex>
      <Box bg={colors.white} pb={[0]}>
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