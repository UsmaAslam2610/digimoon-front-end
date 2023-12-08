import React, {useState,useRef} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { Paper, Typography } from '@mui/material';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true); 
  const [password, setPassword] = useState('');
  const [isValidPass, setIsValidPass] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');

  
  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    setIsValidPass(isValidPassword(inputPassword));
    if(!isValidPass){
      setPasswordError(true);
      setPasswordHelperText('Password should have at least eight characters and contain 1 lowercase, 1 uppercase, 1 number, and 1 special character (!@#$%^&*).')
    } else{
      setPasswordError(false);
      setPasswordHelperText('');
    }};

  const isValidPassword = (password ) => {
    const minLength = 8;
    const containsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const containsLowercase = "abcdefghijklmnopqrstuvwxyz";
    const containsNumber = "0123456789";
    const containsSpecialChar = [" ", "!", "@","#","$","%","^","&","*","(",")","{","}","[","]","_","-","+","=","|","\\'","/",";", "<",">","?","~","`", ","]
    let upperFlag = false, lowerFlag = false, numberFlag = false, specialCharFlag = false;
    Array.from(password).forEach((element) =>{ 
      if(containsSpecialChar.indexOf(element) !== -1)
        specialCharFlag = true;
      else if(containsUppercase.indexOf(element) !== -1)
         upperFlag = true;
      else if(containsLowercase.indexOf(element) !== -1)
         lowerFlag = true;
      else if(containsNumber.indexOf(element) !== -1)
         numberFlag = true;
    });
    return (password.length >= minLength && numberFlag && lowerFlag && upperFlag && specialCharFlag );
  };
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(isValidEmail(inputEmail)); 
    if(!isValid){
      setEmailError(true);
      setEmailHelperText('Invalid Email');
    } else{
      setEmailError(false);
      setEmailHelperText('');
    }
    };

  const isValidEmail = (email) => {
    const atChar  = email.indexOf('@');
    const dotChar  = email.lastIndexOf('.');
    if(atChar > 0 && dotChar > 0 && dotChar>atChar+1 && dotChar < email.length - 1)
     return true;
    else 
      return false;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(!isValidEmail(data.get('email')) && !isValidPassword(data.get('password')))
    {
      setEmailError(true);
      setEmailHelperText('Invalid Email');
      setPasswordError(true);
      setPasswordHelperText('Password should have at least eight characters and contain 1 lowercase, 1 uppercase, 1 number, and 1 special character (!@#$%^&*).'); 
    }
    else if (!isValidEmail(data.get('email'))){
      setEmailError(true);
      setEmailHelperText('Invalid Email');
   }
   else if (!isValidPassword(data.get('password'))) {
        setPasswordError(true);
        setPasswordHelperText('Password should have at least eight characters and contain 1 lowercase, 1 uppercase, 1 number, and 1 special character (!@#$%^&*).');  
    }
    else {
      setEmailError(false);
      setEmailHelperText('');
      setPasswordError(false);
      setPasswordHelperText(''); 
    }
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };
  return (
    <div>
      <Box
        sx={{
            marginTop: '2%',
            marginBottom: '1%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
              }}>
          <Paper elevation={3} sx={{
                borderRadius: '20px',
                padding: '30px', 
            }} >
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  marginTop: '5%',
                  marginBottom: '2%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h3" fontWeight={"bold"} fontFamily={'Arial'} style={{ color: '#4b4af7'}} >
                  DigiMoon
                </Typography>
                <Typography component="h1" fontSize = {'15px'} fontWeight={"normal"} fontFamily={'Arial'} style={{ color: '#4b4af7'}}  padding = {"22px"} >
                  Login To Marketing Automation Platform
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="emailid"
                    ref = {emailRef}
                    name="email"
                    fontWeight="light"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    error={emailError} 
                    helperText= {emailHelperText}
                    label = {<span style={{display: "flex", justifyContent: "center"}}><EmailOutlinedIcon fontSize='small'/> <span style = {{paddingLeft:'5px',fontSize:'14px',fontFamily:'Arial' }} >Email</span></span>}                  
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    type="password"
                    id="passwordid"
                    ref = {passwordRef}
                    variant='outlined'
                    fontWeight="light"
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                    error={passwordError} 
                    helperText={passwordHelperText}
                    label = {<span style={{display: "flex", justifyContent: "center"}}><HttpsOutlinedIcon fontSize='small'/> <span style = {{paddingLeft:'5px',fontSize:'14px',fontFamily:'Arial'  }}>Password</span></span>}
                  />
                  <Grid container>
                    <Grid item xs textAlign={"left"}>
                      <FormControlLabel 
                      control={<Checkbox  
                        value="remember" 
                        style={{ color: '#4b4af7'}} 
                        size = "small"  
                        />}
                      label={<Typography variant="body1" style={{color: 'GrayText' }} fontFamily={'Arial'} fontSize={'14px'}>Remember me</Typography>}
                    />
                    </Grid>
                    <Grid item xs  margin={"auto"} textAlign={"end"}>
                      <Link href="#" variant="body2" underline="none" color = 'GrayText' fontFamily={'Arial'}>
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    text-color='white'
                    style={{ backgroundColor: '#4b4af7'}}
                    sx={{ mt: 3, mb: 2 }}
                    fontFamily={'Arial'}
                  >
                      <b>Get Started</b>
                  </Button>
                  <Link href="#" variant="body2" underline='none' color= 'GrayText' fontFamily={'Arial'}>
                      <p>Didn't have an account <b>Signup</b></p>
                  </Link>
                </Box>
              </Box>
            </Container>
          </Paper>
      </Box>
    </div>
  );
}