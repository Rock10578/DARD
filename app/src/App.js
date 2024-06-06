import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SignIn from './components/loginComponent';
import SignUp from './components/signUpComponent';
import UserDetails from './components/userDetails';
import Courses from './components/courses';
import News from './components/News';
import About from './components/About';
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();

// signOut(auth)
// .then((data) => {
//   // window.location.href = "./";
// }).catch((error) => {
//   // alert("Error in Signing Out")
// });


function App() {
  const apikey = '1834ad42eb01433d83facfb182fd15c9'
  let category = 'technology', language = 'en', country = 'in';

  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 bg-body rounded">
          <div className="container-fluid">
            <Link className="navbar-brand" to={'/sign-in'}>DARD</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/sign-in'}>Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/sign-up'}>Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/courses'}>Courses</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href='http://127.0.0.1:5000/'>Books</a>
                </li>
                <li>
                  <Link className='nav-link' aria-current="page" to={'/news'}>News</Link>
                </li>
                <li>
                  <Link className='nav-link' aria-current="page" to={'/about'}>About</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success bg-white" type="submit">Search</button>
              </form>

              {/* User */}
              <div class="dropdown px-3">
                <Link to="/" data-mdb-toggle="dropdown" aria-expanded="false">
                  <img src="https://avatars.githubusercontent.com/u/84198247?v=4" class="rounded-circle" height="25" alt="Black and White Portrait of a Man"/>
                </Link>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                  {/* <li><Link class="dropdown-item" to="/">My profile</Link></li>
                  <li><Link class="dropdown-item" to="/">Settings</Link></li> */}
                  <li><Link class="dropdown-item" to="/">Logout</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>

        {/* COMPONENTS */}
        <Routes>
          <Route path="/" exact element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/userDetails" element={<UserDetails />}/>
          <Route path="/news" element={<News country={country} pageSize={12} category={category} language={language} apikey={apikey}/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
