import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import block from '../../Assets/images/block.svg';
const InfoFront = () => {
  return (
    <>
      <div className="info-body">
          <h1 style={{color:'white'}}>Recent Posts</h1>
        <Container className='header1'>
          <Row>
            <Col md={8} style={{ }}>
              <h2 className="info-h1" >
                Nigerian Languages: A Prominent Cultural Heritage
              </h2>
              <p className="info-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti nobis sed necessitatibus illo praesentium amet magni
                tenetur ea quod neque eius animi quam, quisquam blanditiis,
                quos, dignissimos itaque quis ut! ......{' '}
              </p>
              <a
                href="#"
                ClassName="info-btn"
              >
                Read More .....
              </a>
            </Col>
            <Col md={4} className='svg-img'>
            <img src={block} alt="" style={{ width: '100%' }} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default InfoFront;
