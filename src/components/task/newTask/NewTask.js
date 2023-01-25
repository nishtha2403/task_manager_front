import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NewTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status,setStatus] = useState("to-do");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const createTask = () => {
    const token = localStorage.getItem("accessToken");
    axios.post('http://localhost:5000/task', {
      title,
      description,
      status,
      priority,
      due_date: dueDate
    },{
      headers: { Authorization: `Bearer ${token}` }
    });
    navigate('/dashboard');
  }
  return (
    <div>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: '1rem' }}>
        Create Task
      </Typography>
      <Stack spacing={2} direction="column">
        <TextField id="title" label="Title" variant="outlined" value={title} onChange={(e) => {
          setTitle(e.target.value);
        }}/>
        <TextField id="desc" label="Description" variant="outlined" value={description} onChange={(e) => {
          setDescription(e.target.value);
        }}/>
        <TextField id="status" label="Status" variant="outlined" value={status} onChange={(e) => {
          setStatus(e.target.value);
        }}/>
         <TextField id="priority" label="Priority" variant="outlined" value={priority} onChange={(e) => {
          setPriority(e.target.value);
        }}/>
         <TextField id="dueDate" label="Due Date" variant="outlined" value={dueDate} onChange={(e) => {
          setDueDate(e.target.value);
        }}/>
        <Button variant="contained"  onClick={createTask}>Create</Button>
      </Stack>
    </div>
  )
}

export default NewTask