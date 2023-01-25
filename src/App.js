import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/login';
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import CreateTeam from './components/team/createTeam/CreateTeam';
import NewTask from './components/task/newTask/NewTask';

function App() {
  const [ userLoggedIn, setUserLoggedIn ] = useState(false);
  
  return (
    <div className='App'>
      <Header userLoggedIn={userLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-task" element={<NewTask />} />
      </Routes>
    </div>
  )
}

export default App;
