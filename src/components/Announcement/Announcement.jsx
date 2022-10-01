import { Box } from '@mui/material'
import React from 'react'

const style = {
  height: '30px',
  backgroundColor: '#cd8f5c',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: '500',
}

const Announcement = () => {
  return (
    <Box sx={style}>Super Deal! Free Shipping on Orders Over $50</Box>
  )
}

export default Announcement