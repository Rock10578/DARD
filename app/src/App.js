import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/loginComponent';
import SignUp from './components/signUpComponent';
import UserDetails from './components/userDetails';

function App() {
  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow p-3 mb-5 bg-body rounded">
          <div className="container-fluid">
            <Link className="navbar-brand" to={'/sign-in'}>DARD</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/sign-in'}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/sign-up'}>Sign up</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success bg-white" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        {/* CONATAINER */}
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
