import React, { useEffect } from 'react';
import { Navbar, NavDropdown, Nav, Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Landing.css';
import img1 from '../../Assets/images/cultural_all2.jpg';
import LearnFront from './LearnFront';

import { logout } from '../../Actions/authActions';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

const NavFront = ({ isAuth }) => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userLogout = bindActionCreators(logout, dispatch);
  useEffect(() => {}, [state.isAuthenticated]);
  return (
    <>
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="header-area sticky fixed-top"
          style={{ backgroundColor: '#e6f9f5', paddingTop: '20px' }}
        >
          <Navbar.Brand href="#home" className="home-logo">
            HISPEEK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ borderColor: 'none' }}
          >
            <Nav className="nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <NavDropdown
                title="About"
                id="collasible-nav-dropdown"
                style={{ backgroundColor: '#e6f9f5' }}
              >
                <NavDropdown.Item href="#action/3.1" className="list-item">
                  Support
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="list-item-drop">
                  App Info
                </NavDropdown.Item>
                <NavDropdown.Item href="/team" className="list-item">
                  Meet Our Team
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} href="/contact">
                Contact
              </Nav.Link>
            </Nav>

            <Nav>
              <li className="button-header">
                {!isAuth ? (
                  <>
                    <Link to="/login" className="header-btn mb-1  ">
                      Login
                    </Link>
                    <Link to="/register" className="header-btn ">
                      Register
                    </Link>
                  </>
                ) : (
                  <Link onClick={() => userLogout} className="header-btn ">
                    Logout
                  </Link>
                )}
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ zIndex: '2' }}
        ></Navbar.Collapse>
      </Container>
    </>
  );
};
export default NavFront;
