/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import QuotesImg from 'assets/hologram/quote.png';

export default function QuoteCard({
  quote,
  name,
  org, ...rest
}) {
  return (
    <Box sx={styles.wrapper}>
    <Box sx={styles.card}>
    <Box sx={styles.quoteWrapper}>

    <Image src={QuotesImg} altText='quotation marks' sx={styles.img}/>
      <Heading sx={styles.quoteText}>{quote}</Heading>
    </Box>
    <Box sx={styles.attributionWrapper}>

    <Box sx={styles.attribution}>
        <Text as="p" sx={styles.attributionName}>{name}</Text>
        <Text as="p" sx={styles.attributionOrg}>{org}</Text>
    </Box>
    </Box>

    </Box>
  </Box>
  );
}

const styles = {
  card: {
    display: 'inline-block',
    mb: -1,
    position: 'relative',
    left:' -12px',
    top: '-12px',
    padding: '0px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#00040f',
    backgroundColor: '#fff',
    textAlign: 'left',

  },
  quoteWrapper: {
    mb: 20,
    pt: 20,
    pr: [0,0,20,null, null, null],
    pl: [0,0,20,null, null, null],
    color: '#00040f',
    fontweight: [400, 400, 300, null, null, null],
    ml:['22px', '22px', 0, null, null, null],
    mr:['10px', '10px', 0, null, null, null],
  },
  attributionWrapper: {
    mt: 20,
    mb: 20,
    pt: 0,
    borderTop: '1px solid #00040f',
},

attribution: {
    mb: 20,
    pt: 20,
    pr: 20,
    pl: 20,
    color: '#00040f',

  },
  img: {
    width: ['40px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
  },
  wrapper: {
    width: ['100%', null, '534px', null, null, null],
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    position: 'relative',
    left: [0, null, null, '-20px', null,'-60px', null],
    maxWidth: ['100%', null,null, '534px',null,null, null],
    borderRight: '0px solid #00040f',
    borderBottom: '0px solid #00040f',
    boxShadow: 'inset 0 -12px 0 0 #000, inset -12px 0 0 0 #000',
  },
};
