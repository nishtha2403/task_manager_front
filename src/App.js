import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/login';
import Signup from './components/signup/Signup';
import CreateTeam from './components/team/createTeam/CreateTeam';
import NewTask from './components/task/newTask/NewTask';
import Task from './components/task/Task';

function App() {
  const [ userLoggedIn, setUserLoggedIn ] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("user")) setUserLoggedIn(true);
  },[]);
  
  return (
    <div className='App'>
      <Header userLoggedIn={userLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/create-task" element={<NewTask />} />
        <Route path="/view-task" element={<Task />} />
      </Routes>
    </div>
  )
}

export default App;
