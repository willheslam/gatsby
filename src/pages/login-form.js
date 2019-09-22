/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'react-emotion';
import { Box, Flex } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';
import BackgroundImage from 'gatsby-background-image';
import { ButtonSecondary } from '../components/Buttons';
import LoginFormComponent from '../components/LoginForm'

const imgStyle = css`
  border-radius: 5px;
`;

const LoginForm = ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  const mapData = data.map.childImageSharp;
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
          <h1>LOGIN</h1>
          <LoginFormComponent></LoginFormComponent>
        </Box>
      </Flex>
      </BackgroundImage>
    </PageWrapper>
  );
};

export const query = graphql`
query {
  map: file(relativePath: { eq: "map.jpeg" }) {
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

export default LoginForm;
