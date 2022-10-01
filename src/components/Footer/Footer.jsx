import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import LinkMui from '../Link'
import useStyles from './styles'
import logo from '../../assets/commerce.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  const classes = useStyles();
  const [inputValue, setInputvalue] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer>
      <Box className={classes.footerBox}>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography
                  variant="h6"
                  component={LinkMui} to="/" className={classes.title} color="inherit"
                >
                  <img src={logo} alt="commerce.js" className={classes.image} />
                  eCommerce
                </Typography>
                <Typography variant='subtitle2' component='p' mt={3}>Address: Hai Boi, Dong Anh, Ha Noi</Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  mt={3}
                >
                  <a href='https://facebook.com/' target='_blank' className='link-social'><FacebookIcon /></a>
                  <a href='https://facebook.com/' target='_blank' className='link-social'><InstagramIcon /></a>
                  <a href='https://facebook.com/' target='_blank' className='link-social'><PinterestIcon /></a>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant='h4' sx={{ fontSize: '16px', fontWeight: '600' }}>About</Typography>
              <Typography variant='subtitle2' component='p' mt={3}>Shop</Typography>
              <Typography variant='subtitle2' component='p' mt={3}>Delivery</Typography>
              <Typography variant='subtitle2' component='p' mt={3}>Returns</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant='h4' sx={{ fontSize: '16px', fontWeight: '600' }}>HELP</Typography>
              <Typography variant='subtitle2' component='p' mt={3}>Payment Options</Typography>
              <Typography variant='subtitle2' component='p' mt={3}>Contact Us</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='h4' sx={{ fontSize: '16px', fontWeight: '600' }}>NEWSLETTER</Typography>
              <form onSubmit={handleSubmit} className={classes.formNewsletter}>
                <input name="email" type="email" value={inputValue} className={classes.inputNewsletter} placeholder="Your email address" onChange={e => setInputvalue(e.target.value)} />
                <button className={classes.buttonNewsletter} name="submitNewsletter" type="submit">
                  <span>Subscribe</span>
                </button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.footerBox}>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={9}>
              <Typography variant='caption'>© 2022 - Ecommerce software by AnhPham™</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <LinkMui to='/about' variant='caption' className='link-social'>About us</LinkMui>
                <LinkMui to='/blog' variant='caption' className='link-social'>Blog</LinkMui>
                <LinkMui to='/faqs' variant='caption' className='link-social'>FAQs</LinkMui>
                <LinkMui to='/contact' variant='caption' className='link-social'>Contact</LinkMui>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer