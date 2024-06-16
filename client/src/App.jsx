import './App.css'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import Registration from './pages/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { useState } from 'react';
import JobDetail from './pages/JobDetail';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState("jobseeker");

  const jobsData = [
    { id: 1, title: 'Software Engineer', salaryRange: '1000-2000', type: 'full-time', location: 'Budapest', homeOffice: true },
    { id: 2, title: 'Marketing Specialist', salaryRange: '800-1500', type: 'part-time', location: 'Debrecen', homeOffice: false },
    { id: 3, title: 'Intern Developer', salaryRange: '500-800', type: 'internship', location: 'Szeged', homeOffice: true },
];

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  }

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} userRole={userRole} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home jobsData={jobsData} />} />
          <Route path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/job/:id" element={<JobDetail jobsData={jobsData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
