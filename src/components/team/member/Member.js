import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Member.css';

function Member({ handleMemberData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <Box
    component="form"
    className="Member"
    >
    <Stack spacing={2} direction="row" >
        <TextField id="memberName" label="Member Name" variant="outlined" value={name} onChange={(e) => { setName(e.target.value) }}/>
        <TextField id="memberEmail" label="Member Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
        <TextField id="role" label="Member Password" variant="outlined" value="employee" />
        <TextField id="memberPassword" label="Member Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
        <TextField id="memberMobile" label="Member Mobile" variant="outlined" value={mobile} onChange={(e) => { setMobile(e.target.value) }}/>
        <Button variant="contained"  onClick={() => {
          handleMemberData({ name, email, password, mobile, role: "employee"})
        }}>Add</Button>
    </Stack>
    </Box>
  )
}

export default Member