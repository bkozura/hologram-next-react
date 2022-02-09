/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import FeatureThumb from 'assets/hologram/scooter-3.png';
import imgCoin1 from 'assets/hologram/coin1.png';
import imgCoin2 from 'assets/hologram/coin2-1.png';
import imgWatch from 'assets/hologram/Watch.png';
import ButtonBox from 'assets/hologram/button-box-1.png';
import FadeImage from 'components/fade-image';





const heroCTA = 
    {
      path: 'get-in-touch',
      text: 'Get in touch',
      icon: <FaArrowRight />,
    };
  
  
  
  export default function HeroBanner() {
      return (
       <section sx={{variant: 'section.hero'}}>
        <Container sx={styles.containerBox}>
          <Box sx={styles.contentWrap}>
          <Box sx={styles.contentBox}>
          <Heading as="h1" variant="heroPrimary">
              Internet everywhere. For&nbsp;everything.
            </Heading>
            <Box sx={styles.heroDesktop}>
            <Text as="p" variant="heroSecondary">
            Spend less time monitoring your IoT deployments and more time innovating
              </Text>
              <Box sx={styles.buttonWrap}>
              <Link to={heroCTA.path}><Button variant="primary">{heroCTA.text} {heroCTA.icon}</Button></Link>
              </Box>
              </Box>
              </Box>

          <Box as="div" className="animationWrap"sx={styles.animationWrap}>
            <Box sx={styles.imageCluster}>
              <FadeImage  />
            </Box>
          </Box>
          <Box sx={styles.heroMobile}>
            <Text as="p" variant="heroSecondary">
            Spend less time monitoring your IoT deployments and more time innovating
              </Text>
              <Box sx={styles.buttonWrap}>
              <Link to={heroCTA.path}><Button variant="primary">{heroCTA.text} {heroCTA.icon}</Button></Link>
              </Box>
              </Box>
          </Box>

        </Container>
       </section>
      );
    }
    
    const styles = {
      contentWrap: {
        position: 'relative',
        textAlign: ['center', null, null, 'left'],
        width: '100%',
        pb: ['50px', '60px', null, 0],
        mx: ['auto', null, null, 0],
        '.description': {
          pr: [0, null, 6, 7, 6],
        },
      },
      animationWrap: {
        width: '100%',
        maxWidth: ['100%', null, null, null, '600px'],
        display: 'inline-block',
        position: 'absolute',
        right:0,
        top:[120,0],
      },
      imageCluster: {
        width: '100%',
        display: 'inline-block',
        position: 'relative',
        mr: 'auto',
        ml: ['auto', null, null, null, 7],
        '> img': {
          position: 'relative',
          zIndex: 1,
          height: [310, 'auto'],
        },
        },
  buttonWrap: {
    display: 'inline-block',
    mt: ['-30px','10px'],
    pr: '6px',
    pb: '6px',
    backgroundImage: `url(${ButtonBox})`,
    backgroundPosition: '0px 0px',
    backgroundSize: '100% 100%',
  },

  heroMobile: {
    display: ['inline-block', null, 'none', null, null, null],
    mt:'340px',
  },

  heroDesktop: {
    display: ['none', null, 'inline-block', null, null, null],
  }
    };
    

    