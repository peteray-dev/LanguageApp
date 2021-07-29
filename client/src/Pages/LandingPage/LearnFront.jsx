import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import img1 from '../../Assets/images/research2.svg';

const LearnFront = () => {
  return (
    <>
      <div className="learn-body">
        <h1>Learning</h1>

        <Container className="header2">
          <Row>
            <Col md={6} className="hero-img">
              <img src={img1} alt="" style={{ width: '100%', fill: 'green' }} />
            </Col>

            <Col md={6} className="hero_caption2">
              <h1>
                Learn <br></br> Any Language
              </h1>
              <p style={{ textAlign: 'justify', marginTop: '20px' }}>
                We offer a free learning to everyone interested in understand in
                a Nigerian Language, this will help us to sustain our culture.
                You're a foreigner?, Engage yourself today
              </p>
              <a
                href="#"
                class=" hero-btn-learn"
                data-animation="fadeInUp"
                data-delay="0.7s"
                style={{ fontSize: '1.4rem' }}
              >
                Learn A Language
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default LearnFront;
