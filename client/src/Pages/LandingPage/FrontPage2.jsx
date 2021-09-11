import React from 'react';
import { Navbar, NavDropdown, Nav, Row, Container, Col } from 'react-bootstrap';
import { FaLevelUpAlt } from 'react-icons/fa';
import './Landing.css';
import img1 from '../../Assets/images/cultural_all2.jpg';
import LearnFront from './LearnFront';
import NavFront from './NavFront';
import InfoFront from './InfoFront';
import CommunityFront from './CommunityFront';
import Footer from './FooterFront';

const FrontPage2 = (props) => {
  return (
    <>
      <header style={{ backgroundColor: '#e6f9f5' }}>
        <div class="logo">
          {/* <a href="index-2.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a> */}
        </div>

        <NavFront isAuth={props.isAuthenticated} />

        <Container className="header1">
          <Row>
            <Col md={6} className="hero_caption">
              <h1>Translate, Learn and Expert a Language</h1>
              <p style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                id minus placeat facere magni fugit, laboriosam minima
                laudantium laborum at nisi distinctio. Commodi quos dolor eum
                est architecto sit qui! Laborum sit atque qui ducimus ad
                necessitatibus a corporis ipsum, quod illo fugit, unde
                reprehenderit iu
              </p>
              <a
                href="#"
                class="btn_10 hero-btn"
                data-animation="fadeInUp"
                data-delay="0.7s"
                style={{ fontSize: '1.4rem' }}
              >
                Translate
              </a>
            </Col>
            <Col md={6} className="hero-img">
              <img src={img1} alt="" />
            </Col>
          </Row>
        </Container>
      </header>

      <LearnFront />

      <InfoFront />

      <CommunityFront />

      <Footer />

      <div id="back-top">
        <a title="Go to Top" href="#">
          {' '}
          <FaLevelUpAlt style={{ color: '#176352' }} />
        </a>
      </div>
    </>
  );
};

export default FrontPage2;
