import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(({ theme }) => {
  return {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'normal'
  };
});

const LinkMui = (props) => {
  return <LinkStyled component={NavLink} {...props} />;
};

export default LinkMui;
