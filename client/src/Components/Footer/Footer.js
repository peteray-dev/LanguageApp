import React from 'react';
import { HiMail, HiPhoneIncoming } from 'react-icons/hi';
import { SiFacebook, SiInvision, SiTwitter, SiPlayerfm } from "react-icons/si";
import './Footer.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Contact from './contact.js'

const Footer = () => {
    return (
        <div id='myFooter'>
            <footer>
                <br></br>
                <div class="main-content">
                  
                    <div class="left box"> 
                        <h2>LAN-APP</h2>
                        <br></br>
                        <div class="">
                            <p>loremipsum target lorem ipsum target <br></br>loremipsum target lorem ipsum target <br></br>loremipsum target lorem ipsum target</p><br></br>
                            <h4> <HiPhoneIncoming />  +23480 8256 0000 </h4>
                            <h4> <HiMail />  info@gmail.com </h4>
                        </div>
                        <br></br>
                        <ul className="social-media" style={{listStyleType:'none'}}>
                            <li><a href="#" style={{color: 'black', fontSize:'1.2rem'}}><SiFacebook /></a></li>
                            <li><a href="#" style={{color: 'black', fontSize:'1.2rem'}}><SiInvision /></a></li>
                            <li><a href="#" style={{color: 'black', fontSize:'1.2rem'}}><SiTwitter /></a></li>
                        </ul>
                           
                    </div>

                    <div class="center box">
                    <h2>PAGES</h2>
                    <br></br>
                         <ul class="pagesList">
                             <li> <a href='#'>Home</a> </li>
                             <li> <a href='#'>Blog</a> </li>
                             <li> <a href='#'>About</a> </li>
                             <li> <a href='#'>Login</a> </li>
                             <li> <a href='#'>Signup</a> </li>
                         </ul>
                    </div>

                    <div class="right box">
                    <h2>Contact us</h2>
                    {/* style={{backgroundColor: 'white', color:"black !important"}} */}
                        <br></br> 
                        <div class="contnt">
                            {/* <  */}
                            <div>
                                <form>                   
                                    <TextField label="Email" fullWidth autocomplete="none" />
                                    <TextField label="Message" fullWidth multiline rows={5} autocomplete="none"/><br></br>
                                    <Button  className="mbutton" variant="contained"  href="#contained-buttons">
                                    Send
                                    </Button>                                   
                                </form>
                                <Contact />
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="bottom">
                    <center>
                    Created By <a href="#">LAN-APP</a> |
                    © 2021 All rights reserved.
                    </center>
                </div>
            </footer>
        </div>
    )
}

export default Footer