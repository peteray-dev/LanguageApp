import React, { Component } from 'react';
import './Login.css';
import Navbar from '../../Components/NavBar/Navbar';
// import Form from './Form';
// import Form2 from './Form2'
import Login from './login';


class LoginMain extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="loginMain">
          <Navbar />
          <div className="loginWhite">
            <h2>Sign In</h2>
        
            <div style={{ width: '80%', margin: '1rem auto' }}>
              <Login />
              
            </div>

            
          </div>
        </div>
      </>
    );
  }
}

export default LoginMain;
