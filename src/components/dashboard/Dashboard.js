import React from 'react';
import { useNavigate } from 'react-router-dom';
import Task from '../task/Task';
import Button from '@mui/material/Button';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className='Dashboard'>
      <h1>Dashboard</h1>
      <Button variant="contained" onClick={() => { navigate('/create-team') }}>Create Team</Button>
      <Button variant="contained" onClick={() => { navigate('/create-task') }}>Create Task</Button>
      <Task />
    </div>
  )
}

export default Dashboard;