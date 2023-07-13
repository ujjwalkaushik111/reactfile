import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import img11 from "../assets/image/png/image11.png";
import img12 from "../assets/image/png/image12.png";
import img13 from "../assets/image/png/image13.png";
import img14 from "../assets/image/png/image14.png";
import img15 from "../assets/image/png/image15.png";
import img16 from "../assets/image/png/image16.png";
import img17 from "../assets/image/png/image17.png";
import img18 from "../assets/image/png/image18.png";
import img2lineblack from "../assets/image/png/2line-black.png";

const Projects = () => {
  return (
    <section className="Homepage-css">
      <div className="white-img padding-top pb-5">
        <Container>
          <div className="text-center mb-5">
            <div className="position-relative">
              <h2 className="fs-lg fw-light ff-sunflower black-color py-4 text-uppercase">
                <img
                  className="position-absolute line-abs4 d-none d-md-block"
                  src={img2lineblack}
                  alt="#"
                />
                Projects
              </h2>
            </div>
            <p className="fs-sm ff-sunflower fw-normal black-color text-center">
              Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
              <span className="d-lg-block">
                {" "}
                egestas vehicula tellus. Molestie adipiscing diam nibh lectus.
                Magna
              </span>
              id nisl quis vestibulum rhoncus.
            </p>
          </div>
          <Row>
            <Col lg={3} sm={6} xs={12} className="mb-4">
              <div className="grid_container rotate_0">
                <div className="pt-3 grid_images">
                  <img className="w-100 " src={img11} alt="#" />
                  <div className="overlay1 ">
                    <p className="d-flex justify-content-center align-items-center pb-0 pt-1 ff-sunflower fs-md fw-bold white-color">
                      The Tokyo Tem
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={12} className="mb-4">
              <div className="grid_container rotate_0">
                <div className="pt-3 grid_images">
                  <img className="w-100 " src={img12} alt="#" />
                  <div className="overlay1 ">
                    <p className="d-flex justify-content-center align-items-center pb-0 pt-1 ff-sunflower fs-md fw-bold white-color">
                      The Tokyo Tem
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={12} className="mb-4">
              <div className="grid_container rotate_0">
                <div className="pt-3 grid_images">
                  <img className="w-100 " src={img13} alt="#" />
                  <div className="overlay1 ">
                    <p className="d-flex justify-content-center align-items-center pb-0 pt-1 ff-sunflower fs-md fw-bold white-color">
                      The Tokyo Tem
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={12} className="mb-4">
              <div className="grid_container rotate_0">
                <div className="pt-3 grid_images">
                  <img className="w-100 " src={img14} alt="#" />
                  <div className="overlay1 ">
                    <p className="d-flex justify-content-center align-items-center pb-0 pt-1 ff-sunflower fs-md fw-bold white-color">
                      The Tokyo Tem
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={12} className="mb-4">
              <div className="grid_container rotate_0">
                <div className="pt-3 grid_images">
                  <img className="w-100 " src={img15} alt="#" />
                  <div className="overlay1 ">
                    <p className="d-flex justify-content-center align-items-center pb-0 pt-1 ff-sunflower fs-md fw-bold white-color">
                      The Tokyo Tem
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={12} className="mb-4">
              <div className="grid_container rotate_0">
                <div className="pt-3 grid_images">
                  <img className="w-100 " src={img16} alt="#" />
                  <div className="overlay1 ">
                    <p className="d-flex justify-content-center align-items-center pb-0 pt-1 ff-sunflower fs-md fw-bold white-color">
                      The Tokyo Tem
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={12} className="mb-4">
              <div className="grid_container rotate_0">
                <div className="pt-3 grid_images">
                  <img className="w-100 " src={img17} alt="#" />
                  <div className="overlay1 ">
                    <p className="d-flex justify-content-center align-items-center pb-0 pt-1 ff-sunflower fs-md fw-bold white-color">
                      The Tokyo Tem
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={12} className="mb-4">
              <div className="grid_container rotate_0">
                <div className="pt-3 grid_images">
                  <img className="w-100 " src={img18} alt="#" />
                  <div className="overlay1 ">
                    <p className="d-flex justify-content-center align-items-center pb-0 pt-1 ff-sunflower fs-md fw-bold white-color">
                      The Tokyo Tem
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center py-5">
            <button className="B-view-2">View All</button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Projects;
