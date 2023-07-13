import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import img2 from "../assets/image/png/up-projects-1.png";
import img3 from "../assets/image/png/up-projects-2.png";
import img4 from "../assets/image/png/up-projects-3.png";
import img5 from "../assets/image/png/up-projects-4.png";
import img2line from "../assets/image/png/line-2up.png";

const UpcomingProjects = () => {
  return (
    <section className="Homepage-css py-5">
      <Container className="py-5">
        <div className="position-relative">
          <h2 className="ff-sunflower fs-lg fw-light white-color text-center text-uppercase">
            <img
              className="position-absolute line-abs d-none d-sm-block"
              src={img2line}
              alt="#"
            />
            Upcoming Projects
          </h2>
        </div>
        <Row>
          <Col lg={3} sm={6} xs={12} className="py-4">
            <div className="Box-up">
              <img className="w-100" src={img2} alt="#" />
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h5 className="fs-md ff-sunflower fw-medium white-color">
                  Candle Queen
                </h5>
                <h5 className="fw-bold fs-sm white-color ff-sunflower">
                  15 : 54 : 12
                </h5>
              </div>
              <p className="fw-light ff-sunflower fs-sm white-color">NFT</p>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12} className="my-4">
            <div className="Box-up">
              <img className="w-100" src={img3} alt="#" />
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h5 className="fs-md ff-sunflower fw-medium white-color">
                  Candle Queen
                </h5>
                <h5 className="fw-bold fs-sm white-color ff-sunflower">
                  15 : 54 : 12
                </h5>
              </div>
              <p className="fw-light ff-sunflower fs-sm white-color">NFT</p>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12} className="my-4">
            <div className="Box-up">
              <img className="w-100" src={img4} alt="#" />
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h5 className="fs-md ff-sunflower fw-medium white-color">
                  Candle Queen
                </h5>
                <h5 className="fw-bold fs-sm white-color ff-sunflower">
                  15 : 54 : 12
                </h5>
              </div>
              <p className="fw-light ff-sunflower fs-sm white-color">NFT</p>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12} className="my-4">
            <div className="Box-up">
              <img className="w-100" src={img5} alt="#" />
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h5 className="fs-md ff-sunflower fw-medium white-color">
                  Candle Queen
                </h5>
                <h5 className="fw-bold fs-sm white-color ff-sunflower">
                  15 : 54 : 12
                </h5>
              </div>
              <p className="fw-light ff-sunflower fs-sm white-color">NFT</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center pb-5">
        <button className="fs-sm fw-medium ff-sunflower white-color B-view">
          View All
        </button>
      </div>
    </section>
  );
};

export default UpcomingProjects;
