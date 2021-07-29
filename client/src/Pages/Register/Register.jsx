import React, { Component } from 'react';
import './Register.css'
import Navbar from '../../Components/NavBar/Navbar'
// import Form from './Form';
import Form2 from './Form2'
import { withRouter } from 'react-router-dom';

class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div id="registerMain">
                    <Navbar/>
                    <div className="registerWhite">
                        <h2>join the community</h2>
                        <div style={{width:'80%', margin:'1rem auto'}}>
                          <Form2/>  
                        </div>
                        
                    </div>

                </div>
            </>
         );
    }
}
 
export default withRouter(Register) ;
