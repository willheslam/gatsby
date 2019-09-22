/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
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

const listStyle = css`
  list-style-type: disc;
  padding: 0;
  list-style-position: inside;
  padding-left: 10%;
  text-align: left;
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
          <p>Hello! Thanks for play testing Beacons with us. To help us develop the experience and to help you get the most out of it, we recommend that you log in. This will enable you to keep track of the gooseberry locations that you’ve found. If you give us your contact details we’ll be able to invite you to a celebration event at the end of the playtest, and also to get a sense of who is engaging with the project.</p>
          <p>We will use this data to:</p>
          <ul className={listStyle}>
            <li>show you which gooseberries you have found</li>
            <li>show our team which gooseberries have been found</li>
            <li>send you an invitation to the event on 25th October</li>
            <li>send you an email when the project launches in 2021</li>
            <li>show our funders what postcode areas people live in who have taken part in the project (this will be completely anonymous).</li>
          </ul>
          <p>We won’t send you anything unconnected to Beacons, or share or sell your details. 
          If you’d rather play anonymously, that’s also totally fine. </p>         
          <Box>
          <ButtonSecondary>
            <Link to="/login-form">Log on</Link>
          </ButtonSecondary>
          <ButtonSecondary>
            <Link to="/register-form">Make an account</Link>
          </ButtonSecondary>
          <ButtonSecondary>
            <Link to="/map">Play Annonymously</Link>
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
