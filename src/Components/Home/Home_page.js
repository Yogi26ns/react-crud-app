import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home_page = ({setIsAuthenticatedd}) => {
  const navigate = useNavigate();
  const handllleClick = () => {
    navigate('/login');
  };
  
  return (
    <div className='container'>
      <form>
          <h1 style={{ color: '#e6edf3', paddingTop: '70px',fontSize:"40px"}}>Admin Sign UP</h1>
          <div>
            <input
              id="email"
              style={{ fontSize: '17px', fontFamily: 'monospace', color: '#e6edf3' }}
              type="email"
              name="email"
              placeholder="admin@example.com"
               />
          </div>
          <div style={{ margin: '2px' }}>
            <input
              id="password"
              style={{ fontSize: '17px', fontFamily: 'monospace', color: '#e6edf3' }}
              type="password"
              name="password"
              placeholder="password"
              />
          </div>
          <input style={{ marginTop: '12px', background: '#122d4c', fontFamily: 'monospace', fontSize: '20px', border: '0' }} type="submit" className='btn btn-primary' value="Sign Up" />
        </form>
        <button onClick={handllleClick} className='btn btn-secondary' style={{fontSize:'12px'}}>Go to login page</button>
    </div>
  )
}

export default Home_page;

