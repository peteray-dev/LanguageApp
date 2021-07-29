import React, { Component } from 'react';
import "./FooterFront.css"
import { makeStyles, withStyles} from '@material-ui/core/styles';
// import {
//   createMuiTheme,
//   makeStyles,
//   ThemeProvider,
//   withStyles,
// } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Row, Container, Col } from 'react-bootstrap';
import { HiChevronDoubleRight, HiMail, HiPhoneIncoming, } from 'react-icons/hi';
import { FaAngleDoubleRig } from 'react-icons/fa';
import { SiFacebook, SiInvision, SiTwitter, SiPlayerfm } from 'react-icons/si';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        marginLeft: '20px',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const style = theme => ({
  textField:{
    width: '100%'
  },
  input:{
    color: 'white'
  }
})
const Footer = () => {
  const classes = style();

  return (
    <>
      <div className="info-body">
        <Container>
          <Row className="Row" >
            <Col md={4} className="center-box">
              <h4>HISPEEK</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                voluptates soluta totam adipisci earum exercitationem dicta
                saepe sit, labore impedit. Dolorum sunt, in aliquid nam
                repellendus eius dolorem adipisci nobis.
              </p>

              <span className="text-white" style={{ display: 'block' }}>
                {' '}
                <HiPhoneIncoming /> +23480 8256 0000{' '}
              </span>
              <span className="text-white" style={{ display: 'block' }}>
                {' '}
                <HiMail /> info@gmail.com{' '}
              </span>
              <ul
                className="social-media"
                
              >
                <li className="social-media-list">
                  <a href="#"  style={{ fontSize: '1.2rem' }}>
                    <SiFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" style={{ fontSize: '1.2rem' }}>
                    <SiInvision />
                  </a>
                </li>
                <li>
                  <a href="#" style={{ fontSize: '1.2rem' }}>
                    <SiTwitter />
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={1}></Col>
            <Col md={2}>
              <div class="center-box">
                <h4 >Quick links</h4>
                <ul className="footerNav">
                  <li>
                    {' '}
                    <a
                      href=""
                    >
                    <HiChevronDoubleRight/>  Home
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      href=""
                    >
                     <HiChevronDoubleRight/> Blog
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      href=""
                    >
                     <HiChevronDoubleRight/> About
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      href=""
                    >
                     <HiChevronDoubleRight/> Help
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={4} className="center-box">
              <h4>Contact Us</h4>
              <form className={classes.root} noValidate autoComplete="off">
                <CssTextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className={classes.textField}
                  InputProps={{
                    className: classes.input
                  }}
                />
                <CssTextField
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
