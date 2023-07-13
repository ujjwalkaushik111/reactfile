import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import imgsame17 from "../assets/image/png/image17.png";
import imgsame11 from "../assets/image/png/image11.png";
import imgsame12 from "../assets/image/png/image12.png";
import imgkarmic from "../assets/image/png/KARMIC.png";
import imginsta from "../assets/image/png/insta.png";
import imgtwitter from "../assets/image/png/twitter.png";
import imgfacebook from "../assets/image/png/facebook.png";
import imgyoutube from "../assets/image/png/youtube.png";
import img2line from "../assets/image/png/line-2up.png";

const About = () => {
  return (
    <section className="Homepage-css py-5">
      <Container>
        <div className="text-center py-5">
          <div className="position-relative">
            <h2 className="fs-lg fw-light ff-sunflower white-color py-4 text-uppercase">
              <img
                className="position-absolute line-abs3 d-none d-md-block"
                src={img2line}
                alt="#"
              />
              ABOUT
            </h2>
          </div>
          <p className="fs-sm ff-sunflower fw-normal white-color text-center">
            Eros, amet, feugiat sit nec duis. Tellus in faucibus consectetur
            dapibus.
            <span className="d-lg-block">
              {" "}
              Eget sem eget nec tincidunt. Urna nulla scelerisque pretium diam
              aliquam
            </span>
            montes, interdum malesuada.
          </p>
        </div>
        <Row className="pb-5">
          <Col lg={4} sm={6} xs={12} className="mb-4">
            <img className="w-100" src={imgsame17} alt="#" />
          </Col>
          <Col lg={4} sm={6} xs={12} className="mb-4">
            <img className="w-100" src={imgsame11} alt="#" />
          </Col>
          <Col lg={4} sm={6} xs={12} className="mb-4">
            <img className="w-100" src={imgsame12} alt="#" />
          </Col>
        </Row>
        <div className="d-flex justify-content-center py-5 mt-5">
          <img src={imgkarmic} alt="#" />
        </div>
        <div className="d-flex align-items-center gap-3 justify-content-center mb-5 ">
          <a href="https://instagram.com/">
            <img src={imginsta} alt="#" />
          </a>
          <a href="https://twitter.com/">
            <img src={imgtwitter} alt="#" />
          </a>
          <a href="https://facebook.com/">
            <img src={imgfacebook} alt="#" />
          </a>
          <a href="https://youtube.com/">
            <img src={imgyoutube} alt="#" />
          </a>
        </div>
      </Container>
      <div className="line"></div>
      <div className="text-center ff-space fs-sm fw-normal white-color opacity_last">
        © Karmic labs 2022
      </div>
    </section>
  );
};

export default About;
