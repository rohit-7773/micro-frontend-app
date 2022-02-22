import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Register from './components/Register';

const UserRoutes = ({isAuthenticated, authenticate}) => {
  return (
    <Routes>
      <Route exact path='/profile' element={<Profile isAuthenticated={isAuthenticated} />} />
      <Route path='/login' element={<Login isAuthenticated={isAuthenticated} authenticate={authenticate} />} />
      <Route path='/logout' element={<Logout authenticate={authenticate} />} />
      <Route path='/register' element={<Register isAuthenticated={isAuthenticated} authenticate={authenticate} />} />
    </Routes>
  )
}

export default UserRoutes;