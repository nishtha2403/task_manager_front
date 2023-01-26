import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [displaySpinner, setDisplaySpinner] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");


  const signupUser = async () => {
    setDisplaySpinner(true);
    await axios.post('https://task-manager-rear.onrender.com/register', {
      name,
      email,
      role: "manager",
      password,
      mobile
    });
    setDisplaySpinner(false);
    navigate("/login");  
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
      {
        !displaySpinner && 
        <Box
        component="form"
        className="Signup"
        >
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: '1rem' }}>
              Signup form
          </Typography>
          <Stack spacing={2} direction="column">
            <TextField className='FieldStyle1' id="name" label="Name" variant="outlined" value={name} onChange={(e) => { setName(e.target.value) }}/>
            <TextField className='FieldStyle1' id="email" label="Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
            <TextField className='FieldStyle1' id="role" label="Role" variant="outlined" value="manager" />
            <TextField className='FieldStyle1' id="password" label="Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
            <TextField className='FieldStyle1' id="mobile" label="Mobile" variant="outlined" value={mobile} onChange={(e) => { setMobile(e.target.value) }}/>
            <Button variant="contained" onClick={signupUser}>Register</Button>
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

export default Signup