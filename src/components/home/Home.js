import React from 'react';
import { Stack, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

function Home() {
  const user = localStorage.getItem('user');
  let name, role;
  if (user) {
    const parsedUser = JSON.parse(user); 
    name = parsedUser.name;
    role = parsedUser.role;
  };
  const navigate = useNavigate();
  return (
    <div className='Home'>
      <p className='Title'>Task <span className='TitlePart2'>Manager</span></p>
      {
        user && 
        <div>
          <p className='Description'>Welcome! {name}</p>
          <Stack direction='column' spacing={2}>
            <Button variant="contained" onClick={() => { navigate('/create-team') }}>Create Team</Button>
            <Button variant="contained" onClick={() => { navigate('/create-task') }}>Create Task</Button>
            <Button variant="contained" onClick={() => { navigate('/view-task') }}>View All Task</Button>
          </Stack>
        </div>
      }
      {
        !user && 
        <Stack direction='row' spacing={2} sx={{ marginTop: '2rem' }}>
          <Button variant="contained" onClick={() => { navigate('/login') }}>Login</Button>
          <Button variant="contained" onClick={() => { navigate('/signup') }}>Signup</Button>
        </Stack>
      }
    </div>
  )
}

export default Home