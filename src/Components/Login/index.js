import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './index.css'
import logo from "./logo512.png"; 
import { Routes,Route,useNavigate } from 'react-router-dom';
const Login = ({ setIsAuthenticated }) => {
  const adminEmail = ('nsyogi.2603@gmail.com');
  const adminPassword = '122333';
  // const getEmail=localStorage.getItem("emaildata")
  // const getPassword=localStorage.getItem('passworddata')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  const handleClickk = () => {
    navigate('/Contact_us')
  }
  const handleLogin = e => {
    e.preventDefault();
    
    // console.log(adminEmail.current.value,"emailID")
    //     localStorage.setItem("emaildata",adminEmail.current.value)
    //     localStorage.setItem("passworddata",adminPassword.current.value)

    if (email===adminEmail && password===adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          navigate('/dash')
          Swal.showLoading();
        },
        willClose: () => {
          
          localStorage.setItem('is_authenticated', true);
          // setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <><>
      <img src={logo} style={{ maxHeight: '50px', maxWidth: '50px' }} alt='/' />
      <a className='ContactUs' type='submit'  value='Conact Us' style={{textAlign:'center', display:'inline', float:'right',background:'none',border:'none',color:'#fff',width:'auto',textDecoration:'None',paddingRight:'9px',fontFamily:'monospace',fontSize:'15px'}} onClick={handleClickk}  >Contact Us</a>
      <a className='register' type='submit' style={{textAlign:'center', display:'inline', float:'right',background:'none',border:'none',color:'#fff',width:'auto',textDecoration:'None',paddingRight:'9px',fontFamily:'monospace',fontSize:'15px' }} onClick={handleClick} >Register</a>
    </><div className="small-container">
        <form onSubmit={handleLogin}>
          <h1 style={{ color: '#e6edf3', paddingTop: '70px',fontSize:"40px"}}>Admin Login</h1>
          <div>
            <input
              id="email"
              style={{ fontSize: '17px', fontFamily: 'monospace', color: '#e6edf3' }}
              type="email"
              name="email"
              placeholder="admin@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </div>
          {/* <label htmlFor="email" style={{color:'#e6edf3'}}>Email</label> */}
          {/* <label htmlFor="password" style={{color:'#e6edf3'}} >Password</label> */}
          <div style={{ margin: '2px' }}>
            <input
              id="password"
              style={{ fontSize: '17px', fontFamily: 'monospace', color: '#e6edf3' }}
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
          <input style={{ marginTop: '12px', background: '#122d4c', fontFamily: 'monospace', fontSize: '20px', border: '0' }} type="submit" className='btn btn-primary'  value="Login" />
        </form>
      </div></>
  );
};

export default Login;
