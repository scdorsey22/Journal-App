import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Background from '../assets/background.svg'; 
import Logo from '../assets/Logo.svg'

function SignIn() {


  return (
    <Box
    sx={{
        margin: 0,
      backgroundImage: `url(${Background})`, // set the background image
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh', // set the height of the container to fill the viewport
    }}
  >
    <Container maxWidth="sm" >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 0,
        }}
      >
       <img src={Logo} alt="Logo" style={{ height: '250px', marginRight: '10px' }} />
        <Typography component="h1" variant="h2" sx={{fontFamily: 'Alegreya', color: 'white', marginTop: '-20px'}}>
          Sign In
        </Typography>
        <Typography component="h6" variant="h5" sx={{fontFamily: 'Alegreya', color: 'white'}}>
          Journal. Stay Focused. 
        </Typography>
        <Typography component="h6" variant="h5" sx={{fontFamily: 'Alegreya', color: 'white'}}>
          Live well.
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',}}>
        <Button type="submit" fullWidth variant="contained" 
        sx={{ 
            mt: 3, 
            mb: 2, 
            width: '100%', 
            fontFamily: 'Alegreya', 
            backgroundColor: '#A9D571',
            '&:hover': {
            backgroundColor: '#5C7F73',
            },
            borderRadius: '8px' 

            }}>
        <Typography variant="subtitle1" fontWeight="bold" >
            Login with Email
        </Typography>
        </Button>
        <Typography component="h6" variant="h6" sx={{fontFamily: 'Alegreya', color: 'white'}}>
          Don't have an account? Sign up
        </Typography>
        </Box>

      </Box>
    </Container>
    </Box>
  );
}

export default SignIn;