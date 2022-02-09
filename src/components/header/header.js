/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/hologram/hologram-logo.svg';  // Hologram override

export default function Header({ className }) {
  return (
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark}/>
        
        </Container>
      </header>
  );
}


const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 3,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
  },
  container: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth:'100vw!important', // Hologram override
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'none',   // Hologram override
    }
  },
};
