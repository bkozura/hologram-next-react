import { isWhitespace } from 'prettier';
import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';
import {  Label, Input, Select, Textarea } from 'theme-ui'
import ButtonBox from 'assets/hologram/button-box.png';


export default function ContactForm({ src, ...rest }) {
    return (
<Box as="form" onSubmit={(e) => e.preventDefault()} sx={styles.contactForm}>
  <Label htmlFor="firstName">First Name</Label>
  <Input name="firstName" id="First Name" mb={3} />
  <Label htmlFor="lastName">Last Name</Label>
  <Input type="lastName" name="lastName" id="lastName" mb={3} />
  <Label htmlFor="email">Email Address</Label>
  <Input type="email" name="email" id="email" mb={3} />
  <Label htmlFor="AreaofInterest">Area of Interest</Label>
  <Select name="AreaofInterest" id="AreaofInterest" mb={3} sx={styles.forms.select}>
    <option>Micromobility</option>
    <option>Option 1</option>
    <option>Option 3</option>
  </Select>
 <Box as="div" className='formButtonBox'  sx={styles.buttonWrap}><Button  sx={styles.button}>Sign Up</Button></Box>
</Box>
    )
};



const styles = {
    buttonWrap: {
          color: 'white',
        },
    button: {
        color: 'white',
        backgroundColor:'#00040F',
        },
    contactForm: {   
        position: 'relative',
        fontFamily:"'Messina Sans Mono', monospace, sans-serif",
     },
     forms: {
        label: {
          fontSize: 1,
          fontWeight: 'bold',
        },
        input: {
          borderColor: 'gray',
          '&:focus': {
            borderColor: 'primary',
            boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
            outline: 'none',
          },
        },
  
        option: {
            fontFamily:"'Messina Sans Mono', monospace, sans-serif",
  
          },
      },
    
buttonWrap: {
  display: 'inline-block',
  mt: '10px',
  pr: '6px',
  pb: '6px',
  backgroundImage: `url(${ButtonBox})`,
  backgroundPosition: '0px 0px',
  backgroundSize: '100% 100%',
},
}
