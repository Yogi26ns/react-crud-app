import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
const Logout = ({ setIsAuthenticated }) => {
  const navigatee = useNavigate();
  // const handleeClickk = () => {
  //   navigatee('/login')
  // }
  const handleLogout = () => {
    
    Swal.fire({
      icon: 'question',
      title: 'Logging Out',
      text: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            navigatee('/login')
            localStorage.setItem('is_authenticated', false);
            // setIsAuthenticated(false);
          },
        });
      }
    });
  };

  return (
      <button value={click}
        className="btn btn-danger" style={{background:'#77789c',border:'0',fontSize:'10px',float:'right',fontFamily:'monospace'}}
        onClick={handleLogout}
      >
        Logout
      </button>

  );
};

export default Logout;
