import { Box, Typography } from '@mui/material'
import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Layout from '../../components/Layout/Layout'

import useStyles from './styles'
import aboutImg from '../../assets/aboutus.jpg'

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Announcement />
      <Layout>
        <Box className={classes.aboutPage}>
          <Box className={classes.aboutLeft}>
            <img src={aboutImg} alt="" className={classes.imageAbout} />
          </Box>
          <Box className={classes.aboutRight}>
            <Typography variant='h4' component='h2' fontWeight={600} gutterBottom>About Us</Typography>
            <Box mb={3}>
              <Typography variant='h6' component='h3' fontWeight={600} gutterBottom>Our company</Typography>
              <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</Typography>
              <Typography variant='subtitle2' component='p'>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                Top quality products
                Best customer service
                30-days money back guarantee
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h5' fontWeight={600} gutterBottom>Our team</Typography>
              <Typography variant='subtitle1' component='p'>Lorem set sint occaecat cupidatat non.</Typography>
              <Typography variant='subtitle2' component='p'>
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  )
}

export default About