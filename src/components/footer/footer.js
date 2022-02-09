/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box>
          <Text as="p">
            <a href="https://www.hologram.io/" sx={{variant: 'links.footer'}}>Made with love by Hologram &lt;3</a>
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid',
    borderTopColor: 'border_color',
    display: 'flex',
    py: '18px',
    textAlign: 'center',
    flexDirection: 'column',
    backgroundColor:"#00040F",
},
};
