import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import community from '../../Assets/images/community2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js'
AOS.init();

const CommunityFront = () => {
  return (
    <>
      <h1 >
        Our Community
      </h1>
      <Container className="header3">
        <Row>
          <Col md={6} className="hero_caption3 " >
            <h1>Join our Community</h1>
            <p style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id
              minus placeat facere magni fugit, laboriosam minima laudantium
              laborum at nisi distinctio. Commodi quos dolor eum est architecto
              sit qui! Laborum sit atque qui ducimus ad necessitatibus a
              corporis ipsum, quod illo fugit, unde reprehenderit iu
            </p>
            <a
              href="#"
              class="btn_10 hero-btn"
              data-animation="fadeInUp"
              data-delay="0.7s"
              style={{ fontSize: '1.4rem' }}
            >
              Join Community
            </a>
          </Col>
          <Col md={6} className="hero-img2">
            <img
              src={community}
              alt=""
              style={{ width: '100%', marginTop: '50pX' }}
            />
          </Col>
        </Row>

        {/* <div class="row count-numbers">
          <div class="col-lg-6" data-aos="fade-up"  data-aos-delay="0">
            <span class="counter d-block">
              <span data-number="59">0</span>
              <span>M</span>
            </span>
            <span class="caption-2">Members</span>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <span class="counter d-block">
              <span data-number="14">0</span>
              <span></span>
            </span>
            <span class="caption-2">Team</span>
          </div>
        </div> */}
      </Container>
    </>
  );
};
export default CommunityFront;
