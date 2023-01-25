import React from 'react';
import { CssBaseline, AppBar, Box, Toolbar, Button, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom"

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
          <Toolbar>
            <Typography variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Cultivate Journal
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link className='navBarLink' to="/">Journal</Link>
            <Link class='navBarLink' to="/entries">Entries</Link>
          </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }