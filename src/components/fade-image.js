
// You can live edit this code below the import statements
import React from 'react';
import Fade from 'react-reveal/Fade';
import FeatureThumb from 'assets/hologram/scooter-3.png';
import imgCoin1 from 'assets/hologram/coin1.png';
import imgCoin2 from 'assets/hologram/coin2-1.png';
import imgWatch from 'assets/hologram/Watch.png';
import ShapeLeft from 'assets/hologram/Ellipse-3.png';
import ShapeRight from 'assets/hologram/Ellipse-14.png';
import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';



class FadeImage extends React.Component  {
    render() {
    return (
      <div style={styles.fadeWrapper}>
        <Fade left delay={500}>
          <Image src={ShapeLeft} alt='gradient background lime' sx={styles.shapeLeft}/>
        </Fade>
        <Fade right delay={700}>
          <Image src={ShapeRight} alt='gradient background aqua' sx={styles.shapeRight}/>
        </Fade>
        <Fade left delay={1200}>
          <Image src={FeatureThumb} alt='scooter' sx={styles.scooter}/>
        </Fade>
        <Fade left delay={1800}>
          <Image src={imgCoin1} alt='coin1' sx={styles.shapeBoxCoin1} />
        </Fade>
        <Fade top delay={1600}>
          <Image src={imgCoin2} alt='coin2' sx={styles.shapeBoxCoin2} />
        </Fade>
        <Fade bottom delay={2000}>
          <Image src={imgWatch} alt="watch" sx={styles.shapeBoxWatch} />
        </Fade>

      </div>
    );
  }
}

{
}

export default FadeImage;

const styles = {
  fadeWrapper:{
    position:'relative',
    mt:['300px',0],
    
  },

  fadeItem:{
    position:'absolute',
    top:0,
    right:0,
    height:'400px',
  },

  scooter: {
    position: 'relative',
    top:[0,120],
    width:'80%',
    right:[0,20],
    zIndex: 5,
    display: 'inline-block',
  },
  
  shapeLeft: {
    position: 'relative',
    width:['100%','180%'],
    top:[0,80],
    right: [0,240],
    zIndex: -5,
    display: 'inline-block',
  },
  
  shapeRight: {
    position: 'relative',
    width:['100%','150%'],
    top: [0,30],
    right: [0, '-90px'],
    zIndex: -7,
    display: 'inline-block',
  },
  
  shapeBoxCoin1: {
    position: 'relative',
    maxWidth:['140px','260px'],
    top: [200,420],
    right: [200,510],
    zIndex: 2,
    display: 'inline-block',
  },
  shapeBoxCoin2: {
    position: 'relative',
    maxWidth:['100px','200px'],
    top: [30,160],
    right: [20,60],
    zIndex: 2,
    display: 'inline-block',
  },
  shapeBoxWatch: {
    position: 'relative',
    top: ['10px',170],
    right: [70,210],
    width:['130px','210px'],
    zIndex: 3,
    display: 'inline-block',
  },
};
