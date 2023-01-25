import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");


  const signupUser = async () => {
    await axios.post('http://localhost:5000/register', {
      name,
      email,
      role: "manager",
      password,
      mobile
    });
    navigate("/login");  
  }

  return (
    <Box
    component="form"
    className="Signup"
    >
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: '1rem' }}>
          Signup form
      </Typography>
      <Stack spacing={2} direction="column">
        <TextField id="name" label="Name" variant="outlined" value={name} onChange={(e) => { setName(e.target.value) }}/>
        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
        <TextField id="role" label="Role" variant="outlined" value="manager" />
        <TextField id="password" label="Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
        <TextField id="mobile" label="Mobile" variant="outlined" value={mobile} onChange={(e) => { setMobile(e.target.value) }}/>
        <Button variant="contained" onClick={signupUser}>Register</Button>
      </Stack>
    </Box>
  )
}

export default Signup