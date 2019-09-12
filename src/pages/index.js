/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Flex } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';
import ButtonPrimary, { ButtonSecondary } from '../components/Buttons';
import { css } from 'react-emotion';

const imgStyle = css`
  border-radius: 5px;
`;

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  const imageData = data.file.childImageSharp;
  return (
    <PageWrapper>
      {/* this is the home page box with title and information */}
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, '800px']}
          m={['3.5rem 0', '3.5rem 0', '3.5rem auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
          textAlign="center"
        >
        <h1>{myData.title}</h1>
        <p>{myData.aboutText}</p>
        </Box>
      </Box>

      <Box bg={colors.primary} pb={[4]}>
        <Flex justifyContent="center" wrap={['wrap', 'nowrap', 'nowrap']}>
          <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
            <Img
            className={imgStyle}
            alt="Picture of X"
            fluid={imageData.fluid}
            />
          </Box>
          <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
            <Img
            className={imgStyle}
            alt="Picture of X"
            fluid={imageData.fluid}
            />
          </Box>
          <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
            <Img
            className={imgStyle}
            alt="Picture of X"
            fluid={imageData.fluid}
            />
          </Box>
          <Box m={[3]} width={[ "90px" , "130px", "130px"]}>
            <Img
            className={imgStyle}
            alt="Picture of X"
            fluid={imageData.fluid}
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
  file(relativePath: { eq: "arts-council.png" }) {
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