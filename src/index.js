import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home_page from './Components/Home/Home_page.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <App />
    {/*<Routes>
      <Route path="/" element={<Home_page />}>
         <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes> */}
  </BrowserRouter>
  // <Router>
  //   <App />
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// root.render(<App />);
