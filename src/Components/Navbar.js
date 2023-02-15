// import React from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './navbar.css';
export default function Topnav() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>

    //       <Typography variant="h6" component="div" sx={{ flexGrow: 0 , margin : 2 }}>
    //         <Button>Home</Button>
    //       </Typography>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         <Button>About</Button>
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <div>
        <div className='navbar'>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
}