import React from "react";
// import Language from "../Card/Language";
import CardList from "../Card/CardList";
import { Col, Row, Container } from "react-bootstrap";
// import Footer from "../../Components/Footer/Footer";
import Footer from '../LandingPage/FooterFront';
import Navbar from "../../Components/NavBar/Navbar";
import Drawer from "../../Components/Drawer/Drawer";
// import Footer from "../../Components/Footer/Footer";
import "../Learn/Learn.css"


class Learn extends React.Component {
  render() {
    const { languages } = this.props;
    const item = languages.map((list) => {
      return (
        <Col md={4} className="" style={{ marginBottom: "100px" }}>
          <CardList {...list} />
        </Col>
      );
    });
    return (
      <>
         <Navbar />
        <Drawer />
        <div className="bg-light">
          <h1 className="title" style={{ textAlign: "center", fontWeight: "700" }}>
            Learn a Language Today
          </h1>
          <Container>
            <Row className="my-5 mx-auto">{item}</Row>
          </Container>
        </div>
        <Footer />
        {/* <Footer/> */}

      </>
    );
  }
}

export default Learn;
