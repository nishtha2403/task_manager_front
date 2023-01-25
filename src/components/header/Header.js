import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Header.css';

function Header({ userLoggedIn }) {
  return (
    <Box sx={{ flexGrow: 1 }}
    >
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Task Manager 
                </Typography>
                <Link className='LinkStyle' to="/">
                  <Typography variant="h6" component="div"  sx={{ flexGrow: 1}}>
                  Home
                  </Typography>
                </Link>
                <Link className='LinkStyle' to="/login">
                  <Typography variant="h6" component="div"  sx={{ flexGrow: 1}}>
                  Login
                  </Typography>
                </Link>
                <Link className='LinkStyle' to="/signup">
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                  Signup
                  </Typography>
                </Link>
                {
                  userLoggedIn && 
                  <Link className='LinkStyle' to="/dashboard">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    Dashboard
                    </Typography>
                </Link>
                }
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header