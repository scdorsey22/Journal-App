import * as React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Background from '../assets/background.svg'; 
import Logo from '../assets/Logo.svg'

function SignIn() {


  return (
    <Box
    sx={{
      margin: 0,
      backgroundColor: '#253334',
      height: '100vh'
    }}
  >
    <Container maxWidth="sm" >
      <Box
        sx={{
          display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
            height: '100%',
            paddingLeft: '50px',
            paddingRight: '50px',
            
        }}
      >
       <img src={Logo} alt="Logo" style={{ height: '150px', marginLeft: '-30px'}} />
        <Typography component="h3" variant="h3" sx={{fontFamily: 'Alegreya', color: 'white', mb: 2}}>
          Sign In
        </Typography>
        <Typography component="h7" variant="h7" sx={{fontFamily: 'Alegreya', color: 'white', mb: 5}}>
          Sign in and start journalling
        </Typography>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', mb: 3 }}>
            <TextField
              variant='standard'
              label='Email Address'
              sx={{
                '& .MuiInputLabel-root': {
                  fontFamily: 'Alegreya', 
                  color: 'white'
                },
                width: '100%',
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white'
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'white'
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'white'
                },
              }}
            />
          </Box>
          <Box sx={{ width: '100%', mb: 3 }}>
            <TextField
              variant='standard'
              label='Password'
              sx={{
                '& .MuiInputLabel-root': {
                  fontFamily: 'Alegreya', 
                  color: 'white'
                },
                width: '100%',
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white'
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'white'
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'white'
                },
              }}
            />
          </Box>
        <Button 
        type="submit" 
        fullWidth variant="contained" 
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
            Sign In
        </Typography>
        </Button>
        </Box>

      </Box>
    </Container>
    </Box>
  );
}

export default SignIn;