import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './login.css';

function Login({ setUserLoggedIn }) {
  const navigate = useNavigate();
  const [displaySpinner, setDisplaySpinner] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    setDisplaySpinner(true);
    const { data } = await axios.post('https://task-manager-rear.onrender.com/login', {
      email,
      password
    });
    setDisplaySpinner(false);
    const { name, mobile, role, team, token } = data.message;
    localStorage.clear();
    localStorage.setItem("user", JSON.stringify({
      name,
      email,
      role,
      mobile,
      teamId: team
    }));
    localStorage.setItem("accessToken",token.accessToken);
    localStorage.setItem("refreshToken",token.refreshToken);
    setUserLoggedIn(true);
    navigate("/");
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {
        !displaySpinner && 
        <Box
        component="form"
        className='Login'
        >
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: '1rem' }}>
            Login form
          </Typography>
          <Stack spacing={2} direction="column">
            <TextField className='FieldStyle1' id="email" label="Email" variant="outlined" value={email} onChange={(e) => {
              setEmail(e.target.value);
            }}/>
            <TextField className='FieldStyle1' id="password" label="Password" variant="outlined" value={password} onChange={(e) => {
              setPassword(e.target.value);
            }}/>
            <Button variant="contained"  onClick={loginUser}>Login</Button>
          </Stack>
        </Box>
      }
      {
        displaySpinner && 
        <CircularProgress />
      }
    </Box>
  )
}

export default Login