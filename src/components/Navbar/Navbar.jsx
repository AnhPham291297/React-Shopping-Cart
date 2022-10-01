import React, { useEffect, useState } from "react";
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Paper, Badge, InputBase, Avatar, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { useSelector } from "react-redux";
import useStyles from './styles';
import LinkMui from "../Link";

import logo from '../../assets/commerce.png';
import { auth } from "../../firebase";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const navItems = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Products', path: '/products' },
  { id: 3, title: 'About', path: '/about' },
  // { id: 4, title: 'Contact', path: '/contact' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {
  const state = useSelector((state) => state.handleCartReducer);
  const classes = useStyles();
  const auth = getAuth()
  const [user, setUser] = useState(null);
  const {logout} = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
  }, [])

  const handleLogout = () => {
    auth.signOut();
    Navigate('/')
  }

  return (
    <>
      <AppBar className={classes.appBar} component="nav" color='inherit' position="sticky">
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
            component={LinkMui} to="/" className={classes.title} color="inherit"
          >
            <img src={logo} alt="commerce.js" className={classes.image} />
            eCommerce
          </Typography>
          <Box component='ul' className={classes.navItem} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <LinkMui to={item.path} className={classes.navLink}>{item.title}</LinkMui>
              </li>
            ))}
          </Box>
          <Box className={classes.navRight}>
            <Box className={classes.search}>
              <Button className="searchIconWrapper">
                <SearchIcon />
              </Button>
              <InputBase placeholder="Search" className={classes.inputBase} />
            </Box>
            {user ? (
              <>
                <p>{user?.email}</p>
                <Button variant="contained" onClick={handleLogout}>logout</Button>
              </>
            ) : (
              <Box className={classes.login}>
                <LinkMui to='/login' sx={{ display: 'flex', gap: '5px' }} className={classes.navLink}>
                  <LoginIcon />
                  Login
                </LinkMui>
              </Box>
            )}
            <IconButton component={LinkMui} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={state.length} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
