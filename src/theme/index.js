

export default {
  // example colors with dark mode
  colors: {
    text: '#00040F', // body color and primary color
    text_secondary: '#0A1435', // secondary body color
    text_tertiary: '#040815', // secondary body color
    heading: '#00040F', // primary heading color
    hero_color: '#040815', // heading color
    background: '#FFFFFF', // body background color
    background_secondary: '#F9FBFD', // secondary background color
    border_color: '#040815', // border color
    yellow: '#FFA740', // border color
    primary: '##4e6cff', // primary button and link color
    secondary: '#17fecb', // secondary color - can be used for hover states
    muted: '#E4E4E4', // muted color
    accent: '#fe17c2', // a contrast color for emphasizing UI


    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#17fecb',
        secondary: '#4e6cff',
        accent: '#fe17c2', // a contrast color for emphasizing UI
        muted: '#111',
      },
    },
  },
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',
  ],
  fonts: {
    body: "'Roobert', Roobert, impact, sans-serif",
    heading: "'Roobert', Roobert, impact, sans-serif",
    form:"'Messina_Sans_Mono', impact, monospace, sans-serif",
    alt:"'Messina_Sans_Mono', impact, monospace, sans-serif",
    footer:"'Messina_Sans_Mono', impact, monospace, sans-serif",
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 300,
    heading: 300,
    bold: 500,
  },
  lineHeights: {
    body: 1.45,
    heading: 1.2,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '0',
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: [
        'calc(100%-20px)',
        null,
        '750px',
        '1000px',
        '1150px',
        null,
        null,
        '1150px',
      ],
      mx: 'auto',
      px: ['10px', null, 0, null, null, null],
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    main: {},
  },
  section: {
    hero: {
      minHeight:'100vh',
      pt: ['80px', null, '12%', null, null, null, null, '12%'],
      pb: ['40px', null, 'auto', null, null, null, null, 'auto'],
      my:0,
    },
    panel: {
      pt: ['40px', null, '10px', null, null, null, null, '90px'],
      pb: ['40px', null, '10px', null, null, null, null, '90px'],
    },
    getInTouch: {
      minHeight:'calc(100vh-30px)',
      pt: ['60px', null, '15%', null, null, null, null, '15%'],
      pb: ['60px', null, '15%', null, null, null, null, '15%'],
    },
  },
  sectionHeader: {
    width: ['100%', null, '100%'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    mt: ['-3px', null, -1],
    pb: '20px',
    borderBottom: 'solid 1px #00040F',
    fontFamily:'form',
    textTransform:'uppercase',
    mb: '30px',
    mx: '0',
    fontSize: '14px',
    color: 'heading',
    lineHeight: [1.3, null, null, 1.25],
    textAlign: 'left',
    fontWeight: '400',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: '200',
      fontSize: ['24px', '26px', '28px', '30px', '32px', '34px'],
      letterSpacing: '-.2px',
      color: 'heading',
    },
    altText: {
      fontFamily: 'form',
      lineHeight: '1.2',
      fontWeight: '300',
      color: 'heading',
    },
    heroPrimary: {
      color: 'hero_color',
      fontSize: ['36px', '42px', '48px', '56px', '64px', '72px', '79px' ],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 200,
      mb: [4, null, null, null, null, 5],
    },
    heroSecondary: {
      maxWidth: ['100%', '100%', '420px', '480px', '560px' ],
      fontWeight:300,
      fontSize: ['18px', '20px', '22px', '24px', '26px', '28px'],
      lineHeight: [1.6, null, null, 1.4],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 0, 0, null, 0, 0],
      pb: '30px',
      color: 'hero_color',
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: '300',
      fontSize: ['24px', null, '34px'],
      lineHeight: 1.25,
      mb: 1,
    },
    lead: {
      fontSize: 40,
      fontFamily: 'heading',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137',
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px',
    },
  },
  links: {
    default: {
      cursor: 'pointer',
    },
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal',
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary',
      },
    },
    footer: {
      color: '#fff',
      textDecoration: 'none',
      fontSize:'16px',
      m:0,
      p:0,
      display: 'block',
      fontFamily:'footer',
    },
    logo: {
      display: 'flex',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none'],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      //borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0,
      },
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: '#00040F',
      fontFamily:'footer',
      '&:hover': {
        boxShadow: "#4e6cff 0px 9px 20px -5px",
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontFamily:'form',
      fontWeight: 400,
    },
    input: {
      py:'3px',
      px:'10px',
      fontFamily:'form',
      borderColor: 'border_color',
      '&:focus': {
        borderColor: '#4e6cff',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      py:'6px',
      px:'10px',
      mb:'20px',
      borderColor: 'border_color',
      fontFamily:'form',
      fontSize: '0.8em',
      lineHeight:1.8,
      textTransform:'uppercase',
      '&:focus': {
        borderColor: '#4e6cff',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.2px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontSize: '18px',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#00040F',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};
