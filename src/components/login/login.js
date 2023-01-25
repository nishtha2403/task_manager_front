import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './login.css';

function Login({ setUserLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const { data } = await axios.post('http://localhost:5000/login', {
      email,
      password
    });
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
    navigate("/dashboard");
  }

  return (
    <Box
    component="form"
    className='Login'
    >
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: '1rem' }}>
        Login form
      </Typography>
      <Stack spacing={2} direction="column">
        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => {
          setEmail(e.target.value);
        }}/>
        <TextField id="password" label="Password" variant="outlined" value={password} onChange={(e) => {
          setPassword(e.target.value);
        }}/>
        <Button variant="contained"  onClick={loginUser}>Login</Button>
      </Stack>
    </Box>
  )
}

export default Login