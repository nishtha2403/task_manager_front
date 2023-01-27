import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Member from '../member/Member';
import CircularProgress from '@mui/material/CircularProgress';
import './NewMember.css';

function NewMember() {
    const navigate = useNavigate();
    const [isDisable, setisDisabled] = useState(true);
    const [displaySpinner, setDisplaySpinner] = useState(false);
    const [member, setMember] = useState([1]);

    const handleMemberData = (newMemberData) => {
        if (newMemberData?.name) {
            setisDisabled(false);
        }
        setMember(newMemberData);
    }

    const addMember = async () => {
    setDisplaySpinner(true);
    const token = localStorage.getItem("accessToken");
    await axios.post('https://task-manager-rear.onrender.com/member', member,
    {
        headers: { Authorization: `Bearer ${token}` }
    });
    setDisplaySpinner(false);
    navigate('/');
    }
  
  return (
    <div className='NewMemberWrapper'>
    {
      !displaySpinner && 
      <Box
      className="NewMembers"
      >
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: '1rem' }}>
            Add New Member
        </Typography>
        <Stack spacing={2} direction="column" alignItems="center">
            <Member key={member} handleMemberData={handleMemberData} />
            <Button disabled={isDisable} variant="contained" onClick={addMember}>Done</Button>
        </Stack>
      </Box>
    }
    {
      displaySpinner && 
      <CircularProgress />
    }
  </div>
  )
}

export default NewMember