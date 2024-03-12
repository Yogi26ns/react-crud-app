import Dasshh from "./Components/Dashboard/Dasshh";
// import {Navigate} from 'react-router-dom';
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from 'react';
import Login from "./Components/Login";
import Home_page from "./Components/Home/Home_page";
import Contactus from "./Components/Contact_us/Contactus";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Route } from "react-router-dom";
import { BrowserRouter, Routes,Route,Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(null);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  // }, []);
  const [isAuthenticated, setIsAuthenticated ] = useState(null);
  // const toggleRoute = () =>{
  //   setIsAuthenticated(!loggedIn)
  // }

  return (
    <>
      {/* {isAuthenticated ? (
        <><Route path="/dash" Component={Dasshh} />
        <Dasshh setIsAuthenticated={setIsAuthenticated} /></>
      ) : (
        <><Login setIsAuthenticated={setIsAuthenticated} />
        <Route path="/dash" Component={Dasshh} /></>
      )} */}
      {/* <BrowserRouter> */}
        <Routes>
        <Route path="start"
           Component=
           
          {isAuthenticated ? (
            <><Navigate to="/dash" replace={true} /><Dasshh setIsAuthenticated={setIsAuthenticated} /></> 
              ) : (<><Login setIsAuthenticated={setIsAuthenticated} /></>
              )
            }
        />
        <Route path="/dash" Component={Dasshh}/>
        <Route path="/login" Component={Login} />
        
        {/* <Route path="/dash" Component={ setIsAuthenticated?(Login):( Dasshh)} /> */}
          
          <Route path="/Contact_us" Component={Contactus}/>
          <Route path="/home" Component={Home_page} />
        </Routes>
        
      {/* </BrowserRouter> */}
    </>
  );
};
// const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
// root.render(<App/>)




// const App = () => {

//   return (
//     <div className="app-container">
//       <Dasshh/>
//     </div>
//   );
// };

// export default App;
