import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';
import { keyframes } from '@emotion/core';
import QuoteCard from '../components/quote-card';
import SpeakerImage from 'assets/hologram/speaker-image.png';
import GreenScooters from 'assets/hologram/lime-bikes.png';
import PurpleBikes from 'assets/hologram/purple-bikes.png';
import HashGrid from 'assets/hologram/hash-grid.png';
import GreenScooterSquare from 'assets/hologram/lime-scooter-square.png';



const data = {
    sectionHeading: 'Hear from Hologram',
    quote:{
        text:"It felt like Hologram was the Stripe of SIM management.",
        attribution:"Tanguy Goretti",
        organization:"CHIEF TECHNOLOGY OFFICER, COWBOY BIKES"
    },
}



const panelData = {
    sectionTitle: 'IoT on Wheels: Software & Connectivity for Micromobility',
    sectionSubTitle: '2:45PM - 3:20PM',
    panelists:[
      {   panelistId:1,
          panelistName: "Pat Wilbur",
          panelistTitle : 'CTO',
          panelistCompany: 'Hologram'
      },
      {   panelistId:2,
          panelistName: "Zach Supalla",
          panelistTitle : 'Founder & CEO',
          panelistCompany: 'Particle'
      },
      {   panelistId:3,
          panelistName: "Anne Emig",
          panelistTitle : 'Head of Micromobility',
          panelistCompany: 'Revel'
      },
      {   panelistId:4,
          panelistName: "Teet Praks",
          panelistTitle : 'Co-founder',
          panelistCompany: 'Comodule'
      },
      ],
      panelDescription:[
          {paragraphId:1,
          text:"Software and wireless solutions underpin all aspects of the micromobility revolution, empowering owners and operators to keep tabs on their electric bicycles, scooters, and mopeds from afar."
      }, 
      {paragraphId:2,
          text:"In this panel, we’ll explore how IoT and software work together to create a successful deployment. Potential topics include best practices for connecting and launching a fleet, preventing theft and vandalism, maintaining data security, adhering to local regulations, and enabling firmware and OTA updates."
      }, 
      ]
  };




export default function PanelSection() {
  return (
    <section sx={{variant: 'section.panel'}}>
    <Container sx={styles.containerBox}>
        <Text as="p" sx={{variant: 'sectionHeader'}}>
            {data.sectionHeading}
          </Text>
   </Container>
      <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
        <Heading as="h2">
            {panelData.sectionTitle}
        </Heading>
        <Text as="p" sx={styles.panelDates}>
            {panelData.sectionSubTitle}
        </Text>
        <Box sx={styles.thumbnail}>
            <Image src={SpeakerImage} alt="Panel speaker" sx={styles.speakerImage}/>
                <Box sx={styles.shapeBox}>
                    <Box sx={styles.imageCluster}>
                        <Image src={GreenScooters} alt="" sx={styles.greenScooters}/>
                        <Image src={PurpleBikes} alt="" sx={styles.purpleBikes}/>
                        <Image src={HashGrid} alt="" sx={styles.hashGrid}/>
                        <Image src={GreenScooterSquare} alt="" sx={styles.greenScooterSquare}/>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box sx={styles.contentBox}>
        <Box sx={styles.panelInfo}>
            {panelData.panelDescription.map((item)=>(
                    <Text as="p" sx={styles.panelDescription} key={item.paragraphId}>
                        {item.text}
                    </Text>
                    ))}<br />
                     <Box sx={styles.mobileThumbnail}>
            <Image src={SpeakerImage} alt="Panel speaker" sx={styles.speakerImage}/>
            <Box sx={styles.shapeBox}>
                        <Image src={GreenScooterSquare} alt="" sx={styles.greenScooterSquare}/>
                  </Box>
              </Box>
            <Box as="div" sx={styles.panelistsBox}>
            <Text as="p" sx={styles.panelistHeader}>
                Panelists
            </Text>
                {panelData.panelists.map((item)=>(
                    <Text as="p" sx={styles.panelist} key={item.panelistId}>
                        {item.panelistName}, {item.panelistTitle}, {item.panelistCompany}
                    </Text>
                    ))}<br />
                </Box>               
                </Box>
       
x            <Box sx={styles.contentBox}>
            <Text as="p" sx={styles.altFont}>
                    
                    </Text>
                    <QuoteCard quote={data.quote.text} name={data.quote.attribution} org={data.quote.organization} />
            </Box>
        </Box>
      </Container>
      
    </section>
  );
}


const styles = {
   
  
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, null],
  },
  thumbnail: {
    mr: ['0', null, null, 0, 0, 0],
    order: [2, null, null, 0],
    ml: ['0', null, null, 0],
    display: ['none', null, 'block', null, null, null],
    flexShrink: 0,
    mt:['40px', null, null, null, null, '80px'],
    mb:['10px', null, null, null, null, '100px'],
    maxWidth: ['96%', null, '100%', null, null, null],
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  
  mobileThumbnail: {
    mr: ['auto', null, null, 0, 0, 0],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: ['block', null, 'none', null, null, null],
    flexShrink: 0,
    mt:['20px', null, null, null, null, '80px'],
    mb:['60px', null, null, null, null, '100px'],
    maxWidth: ['96%', null, '100%', null, null, null],
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  contentBox: {
    width: ['96%', null, null, 315, 390, '50%', '50%', '50%'],
    ml:['2.5%', null, 0,null,null, null],
    flexShrink: 0,
    mb: [0, null, 60, 'auto'],
    textAlign: ['center', null, null, 'left'],
  },
  panelInfo: {
    width: ['100%', null, null, null, null, '80%', '80%', '80%'],
    flexShrink: 0,
    ml: ['auto', null, 60, 'auto'],
    textAlign: ['center', null, null, 'left'],
  },
  
  panelDescription: {
    mb:'10px',
    fontSize:['16px', '18px'],
  },
  
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  panelist: {
    m: 0,
  },
  panelistsBox: {
      width: ['100%', null, '100%'],
      mb: '20px',
      mx: 0,
      pt:'20px',
      mb:'40px',
      borderTop: 'solid 1px #00040F',
    },
    panelistHeader:{
      fontFamily:'form',
      textTransform:'uppercase',
      fontSize: '14px',
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'left',
      fontWeight: '400',
      mb:'20px',
    },
  panelDates: {
    mt:20,
    mb:['18px',0],
    fontSize: ['20px', null, null, '24px'],
    lineHeight: '1.1',
  }, 

   shapeBox: {
    position: 'absolute',
    top: '0',
    width:'100%',

    left: 0,
    zIndex: -1,
    display: ['inline-block', null, null, null, null, 'inline-block'],
  },

  imageCluster:{
    position: 'relative',
    width:'90%',
    mx:'5%',
    height:['300px', null, null, null, null, '460px'],
  

  },

  speakerImage:{
    width:['90%', null, null, null, null, '80%'],
    maxWidth:'300px',
    display:'inline-block',
    position:'relative',
    right:['-10px', null, null, null, null, '-30%'],
},
  greenScooters:{
    width:'80%',
    position:'absolute',
    top:'24%',
    display: ['none', null, null, null, null, 'inline-block'],
    zIndex: -2,


  },
  purpleBikes:{
    width:'80%',
    position:'absolute',
    top:'35%',
    right:0,
    display: ['none', null, null, null, null, 'inline-block'],
    zIndex: -5,

},

hashGrid:{
    width:'42%',
    position:'absolute',
    top:'70%',
    right:'-15%',
    display: ['none', null, null, null, null, 'inline-block'],
    zIndex: -1,


},
greenScooterSquare:{
    width:'90%',
    position:'absolute',
    left:'0px',
    top:'50px',
    display: ['inline-block', null, 'none', null, null, null ],
    zIndex: -2,


},


};
