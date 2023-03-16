import React from 'react';
import { CssBaseline, AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom"
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import logo from '../assets/Logo.png'

const theme = createTheme()


export default function Header() {
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
         
            overflow: 'hidden'
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src={logo} alt="Logo" style={{width: '150px', marginLeft: 10,  }} />
            <Typography variant="h5"
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
            
              justifyContent: 'center',
              fontFamily: 'Alegreya'
            }}
            >
              Cultivate Journal
          
            </Typography>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
          
            <Link className='navBarLink' to="/">
            <IconButton sx={{ fontSize: 60 }}>
              <EditOutlinedIcon />

              </IconButton>
            </Link>
            <Link className='navBarLink' to="/entries">
              <IconButton sx={{ fontSize: 100 }}>
              <SearchOutlined />

              </IconButton>
            </Link>
          </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }