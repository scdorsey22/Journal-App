import React from 'react';
import { CssBaseline, AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom"
import SearchOutlined from '@mui/icons-material/SearchOutlined';

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
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Cultivate Journal
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          
            <Link className='navBarLink' to="/">
            <IconButton sx={{ fontSize: 60 }}>
              <EditOutlinedIcon />

              </IconButton>
            </Link>
            <Link class='navBarLink' to="/entries">
              <IconButton sx={{ fontSize: 32 }}>
              <SearchOutlined />

              </IconButton>
            </Link>
          </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }