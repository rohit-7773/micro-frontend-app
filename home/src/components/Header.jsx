import React from 'react';
import {Link, Router} from 'react-router-dom';

const Header = ({isAuthenticated}) => {
  return (
    <>
      <h1>Header</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        {!isAuthenticated && <>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </>}
        {isAuthenticated && <li><Link to='/logout'>Logout</Link></li>}
      </ul>
     
    </>
  )
}

export default Header