import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
        <h4 style={{color:'#e6edf3'}}>Employee Management Software</h4>
        <div>
          {/* <button onClick={() => setIsAdding(true)}>Add Employee</button> */}
          <Logout setIsAuthenticated={setIsAuthenticated} />
        </div>
    </header>
  );
};

export default Header;
