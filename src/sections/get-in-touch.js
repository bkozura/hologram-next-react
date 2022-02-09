import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';
import { keyframes } from '@emotion/core';
import SimCardImage from 'assets/hologram/IoT-World-Sim@4x.png';
import gradientBackground from 'assets/hologram/gradient1.png';
import ContactForm from '../components/contact-form';



export default function GetInTouch() {


  return (
    <section sx={{variant: 'section.getInTouch'}} id="GetInTouch">
      <Container sx={styles.containerBox}>
        <Text as="p" sx={{variant: 'sectionHeader'}}>Keep in Touch </Text>
   </Container>
      <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
      <Heading as="h2">
      Sign up for our newsletter to learn&nbsp;about future events
      </Heading>
      <Box sx={styles.thumbnail}>
          <Image src={SimCardImage} alt="thumbnail of a SIM card for IoT Micromobility"/>
          <Box sx={styles.shapeBox}>
            <Image src={gradientBackground} sx={styles.gradientBg} alt="gradient background shape"/>
          </Box>
        </Box>
        </Box>       

        <Box sx={styles.contentBox}>
            <ContactForm />  
        </Box>
      </Container>
      
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: 0,
  },
  thumbnail: {
    pt:['40px', '60px', '70px', '90px', '90px', '90px'],
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: ['none', 'inline-flex', null, null, null, null],
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: 0,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  gradientBg:{

  }, 
  contentBox: {
    width: ['100%', null, null, 315, 390, '50%', '50%', '50%'],
    flexShrink: 0,
    mb: [7, null, 60, 'auto'],
    textAlign: ['center', null, null, 'left'],
  },

};


