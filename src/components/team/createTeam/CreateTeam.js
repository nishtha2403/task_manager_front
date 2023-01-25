import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Member from '../member/Member';
import './CreateTeam.css';

function CreateTeam() {
    const navigate = useNavigate();
    const [teamId, setTeamId] = useState("");
    const [teamName, setTeamName] = useState("");
    const [members, setMembers] = useState([1]);
    const [membersData, setMembersData] = useState([]);

    const addTeamMember = () => {
      setMembers([...members, members.length + 1]);
    }

    const handleMemberData = (newMemberData) => {
      setMembersData([...membersData, newMemberData]);
    }

    const createTeam = async () => {
      const token = localStorage.getItem("accessToken");
      await axios.post('http://localhost:5000/create-team', {
        team_id: teamId,
        name: teamName,
        members: membersData
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/dashboard');
    }

  return (
    <Box
    component="form"
    className="CreateTeam"
    >
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: '1rem' }}>
        Create Team
      </Typography>
        <Stack spacing={2} direction="column" alignItems="center">
            <Stack spacing={2} direction="row">
                <TextField id="teamId" label="Team ID" variant="outlined" value={teamId} onChange={e => setTeamId(e.target.value)}/>
                <TextField id="teamName" label="Team Name" variant="outlined" value={teamName} onChange={e => setTeamName(e.target.value)}/>
            </Stack>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginBottom: '1rem' }}>
              Team Members
            </Typography>            {
              members.map(member => <Member handleMemberData={handleMemberData} />)
            }
            <Button variant="contained" onClick={addTeamMember}>Add More Members</Button>
            <Button variant="contained" onClick={createTeam}>Done</Button>
        </Stack>
    </Box>
  )
}

export default CreateTeam