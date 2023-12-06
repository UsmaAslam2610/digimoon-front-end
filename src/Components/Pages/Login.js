import React, {useState} from 'react';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { Paper, Typography } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
export default function Login() {
  
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true); 
  const [password, setPassword] = useState('');
  const [isValidPass, setIsValidPass] = useState(true); 
  
  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    setIsValidPass(isValidPassword(inputPassword));
  };

  const isValidPassword = (password) => {
    const minLength = 8;
    const containsUppercase = /[A-Z]/;
    const containsLowercase = /[a-z]/;
    const containsNumber = /[0-9]/;
    const containsSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    return (
      password.length >= minLength &&
      containsUppercase.test(password) &&
      containsLowercase.test(password) &&
      containsNumber.test(password) &&
      containsSpecialChar.test(password)
    );
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(isValidEmail(inputEmail)); 
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <div>
      <Box
        sx={{
            marginTop: '2%',
            marginBottom: '2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
              }}>
          <Paper elevation={3} sx={{
                borderRadius: '20px',
                padding: '30px', 
            }} >
            <Container component="main" maxWidth="xs">
              {/* <CssBaseline /> */}
              <Box
                sx={{
                  marginTop: '5%',
                  marginBottom: '2%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h3" fontWeight={"bold"} style={{ color: '#5551ff'}} >
                  DigiMoon
                </Typography>
                <Typography component="h1" fontWeight={"light"} style={{ color: '#5551ff'}}  padding = {"20px"} >
                  Login To Marketing Automation Platform
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    fontWeight="light"
                    autoComplete="email"
                    error={!isValid} 
                    helperText={!isValid ? 'Invalid Email' : ''}
                    onChange={handleEmailChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    label="Password"
                    variant='outlined'
                    fontWeight="light"
                    autoComplete="current-password"
                    error={!isValidPass} 
                    helperText={!isValidPass ? 'Password should has eight characters or longer. And it must contain 1 lowercase character, 1 uppercase character, 1 number, and at least one special character in this set (!@#$%^&*).' : ''}
                    onChange={handlePasswordChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HttpsOutlinedIcon /> 
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Grid container>
                    <Grid item xs textAlign={"left"}>
                      <FormControlLabel 
                      control={<Checkbox  value="remember" style={{ color: '#5551ff'}} size = "small"  />}
                      label={<Typography variant="body1" style={{color: 'GrayText' }} fontSize={'14px'}>Remember me</Typography>}
                    />
                    </Grid>
                    <Grid item xs  margin={"auto"} textAlign={"end"}>
                      <Link href="#" variant="body2" underline="none" color = 'GrayText' >
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    text-color='white'
                    style={{ backgroundColor: '#5551ff'}}
                    sx={{ mt: 3, mb: 2 }}
                  >
                      Get Started
                  </Button>
                  <Link href="#" variant="body2" underline='none' color= 'GrayText'>
                      <p>Didn't have an account <b>Sign Up</b></p>
                  </Link>
                </Box>
              </Box>
            </Container>
          </Paper>
        </Box>
    </div>
  );
}