/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import { Box, Flex } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import RegisterForm from '../components/Login';
import colors from '../utils/colors';
import BackgroundImage from 'gatsby-background-image';
import { ButtonSecondary } from '../components/Buttons';

const imgStyle = css`
  border-radius: 5px;
`;

const Login = ({ data }) => {
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
          <h1>WELCOME!</h1>
          <p>You can play Beacons annonymously, but if you would like to keep count of the gooseberries you find and be able to search across different devices, please make an account. With an acccount, we can also messgae you with secret hints and tips during the game. We take data protection very seriously, and will not pass on your data to any third parties.</p>
          <h2>If you alredy have an account, please login below</h2>
          <RegisterForm></RegisterForm>
          
          <Box>
          <ButtonSecondary>
            <li>
              <Link to="/register-form">Make an account</Link>
            </li>
          </ButtonSecondary>
          <ButtonSecondary>
            <li>
              <Link to="/map">Play Annonymously</Link>
            </li>
          </ButtonSecondary>
          </Box>
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

export default Login;
