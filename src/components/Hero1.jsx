import React from "react";
import img1 from "../assets/image/png/Group-3.png";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import imgsingle from "../assets/image/png/single-line.png";
import imgsingle2 from "../assets/image/png/single-line2.png";

const Hero1 = () => {
  return (
    <section className="pt-5 Homepage-css">
      <div className="rotate-color">
        <Container className="padding-top padding-bottom">
          <Row>
            <Col lg={6}>
              <div className="position-relative">
                <h1 className="fs-xl white-color ff-sunflower uppercase fw-light pt-5 ">
                  <img
                    className="position-absolute single-abs d-none d-sm-block "
                    src={imgsingle}
                    alt="#"
                  />
                  <img
                    className="position-absolute single-abs2 d-none d-sm-block "
                    src={imgsingle2}
                    alt="#"
                  />
                  We are believers decentralization and Web3.{" "}
                </h1>
              </div>
              <p className="fs-sm white-color ff-space fw-medium">
                Vulputate tristique habitant neque, accumsan. Vitae ultrices
                nulla erat nibh aliquam, quis tempus volutpat arcu. Leo
                convallis luctus dis malesuada turpis non consequat ac.{" "}
              </p>
              <div className="d-flex align-items-center gap-4 mt-4">
                <button className="Button-G">
                  Get Started{" "}
                  <span>
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.495 6.49497C17.7683 6.22161 17.7683 5.77839 17.495 5.50503L13.0402 1.05025C12.7668 0.776886 12.3236 0.776886 12.0503 1.05025C11.7769 1.32362 11.7769 1.76684 12.0503 2.0402L16.01 6L12.0503 9.9598C11.7769 10.2332 11.7769 10.6764 12.0503 10.9497C12.3236 11.2231 12.7668 11.2231 13.0402 10.9497L17.495 6.49497ZM0 6.7H17V5.3H0V6.7Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </button>
                <button className="Button-R">Read More</button>
              </div>
            </Col>
            <Col lg={6}>
              <img className="w-lg-100" src={img1} alt="img1" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero1;
