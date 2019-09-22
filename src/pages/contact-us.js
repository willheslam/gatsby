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

const ContactUs = ({ data }) => {
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
          textAlign="left">
          <h3>WE ARE:</h3>
        <h3>Alison Neighbour</h3>
          <p>Wis an artist and designer working in installation, theatre, and site responsive adventures. Alison conceived Beacons and is lead artist on the project, she created the visual world, the gooseberries and the maps. She lives in Folkestone.</p>
        <h3>Emily Peasgood</h3>
        <p>is a composer and sound artist based in Ramsgate. Her work Halfway to Heaven was part of Folkestone Triennial 2017. Emily is creating the sound of the gooseberries and working with Alison to develop a ceremony to send them back to the sea.</p>
        <h3>Lukus Robbins</h3>
        <p>is a producer and artist based in Bristol. He is taking care of the team and making sure everything is in place to make Beacons happen.</p>
        <h3>Ruby Bolton</h3>
        <p>is an engagement producer from Folkestone. Ruby is getting people involved and helping to locate the gooseberry hiding places. </p>
        <h3>Ellie Foreman</h3>
        <p>is a website developer based in Bristol, she did the front-end development for this website!</p>
        <h3>Tarim</h3>
        <p>creates magical tech and websites, and is based at Pervasive Media Studio in Bristol. He does all the behind the scenes technical work that helps the gooseberries work their magic.</p>
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

export default ContactUs;
