import { Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Layout from '../../components/Layout/Layout'

import useStyles from './styles'

const Contact = () => {
  return (
    <>
      <Announcement />
      <Layout>
        <Container maxWidth='md'>
          <Grid container>
            <Grid item xs={12}>
              <form>
                <Grid container>
                  <Grid>
                    
                  </Grid>
                </Grid>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <TextField name='subject' variant='outlined' />
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <TextField name='email' variant='outlined' />
                </div>
                <div>
                  <label htmlFor="subject">Attachment</label>
                  <TextField name='subject' variant='outlined' />
                </div>
                <div>
                  <label htmlFor="Message">Message</label>
                  <textarea name="message" id="" cols="30" rows="10"></textarea>
                </div>
              </form>
            </Grid>
            <Grid item xs={12}>

            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default Contact