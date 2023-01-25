import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Task() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get('http://localhost:5000/task', {
          headers: { Authorization: `Bearer ${token}` }
      });
      const mappedTasksData = data.message.map(task => {
        const { title, description, status, priority, due_date } = task;
        return { title, description, status, priority, due_date };
      });
      setRows(mappedTasksData);
      console.log(mappedTasksData);
    }
    fetchAllTasks();
  }, []);

  return (
    <div>
      <h1>All Tasks</h1>
       <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Priority</TableCell>
                <TableCell align="right">Due Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.priority}</TableCell>
                  <TableCell align="right">{row.due_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
    </div>
  )
}

export default Task