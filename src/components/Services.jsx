import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import image6 from "../assets/image/png/Ellipse22.png";
import img7 from "../assets/image/png/contract-2.png";
import img8 from "../assets/image/png/contract-3.png";
import img9 from "../assets/image/png/contract-4.png";
import img10 from "../assets/image/png/contract-5.png";
import img2line from "../assets/image/png/line-2up.png";

const Services = () => {
  return (
    <section class="Homepage-css overflow-hidden py-5">
      <div className="position-relative">
        <h2 className="fw-light fs-lg ff-sunflower white-color text-uppercase text-center">
          <img
            className="position-absolute line-abs2 d-none d-md-block"
            src={img2line}
            alt="#"
          />
          Services
        </h2>
      </div>
      <Container className="py-4 pb-5">
        <Row className="mt-5">
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className="ms-0 moon-unset position-relative"
          >
            <img className="position-abs moon-none" src={image6} alt="#" />
            <div class="box-shadow-1 border-1 p-3 ">
              <img src={img7} alt="#" />
              <h1 class="white-color fs-5 ff-space fw-bold pt-3">
                Smart Contract{" "}
              </h1>
              <p class="white-color fs-6 ff-space fw-normal">
                Eu faucibus libero leo, malesuada justo, tortor pellentesque
                quis sit. Dui viverra at odio sodales duis integer rhoncus
                pulvinar. Commodo massa aliquam.
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className="ms-0 moon-unset position-relative"
          >
            <img className="position-abs moon-none" src={image6} alt="#" />
            <div class="box-shadow-1 border-1 p-3">
              <img src={img8} alt="#" />
              <h1 class="white-color fs-5 ff-space fw-bold pt-3">Proof </h1>
              <p class="white-color fs-6 ff-space fw-normal">
                Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo
                ultricies quam vitae pellentesque tellus felis. Elementum tortor
                quis est morbi ullamcorper.
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className="ms-0 moon-unset position-relative"
          >
            <img className="position-abs moon-none" src={image6} alt="#" />
            <div class="box-shadow-1 border-1  p-3">
              <img src={img9} alt="#" />
              <h1 class="white-color fs-5 ff-space fw-bold pt-3">
                NFT solutions{" "}
              </h1>
              <p class="white-color fs-6 ff-space fw-normal">
                Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
                egestas vehicula tellus. Molestie adipiscing diam nibh lectus.
                Magna id nisl quis vestibulum rhoncus.
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className="ms-0 moon-unset position-relative"
          >
            <img className="position-abs moon-none" src={image6} alt="#" />
            <div class="box-shadow-1 border-1  p-3 ">
              <img src={img10} alt="#" />
              <h1 class="white-color fs-5 ff-space fw-bold pt-3">Support </h1>
              <p class="white-color fs-6 ff-space fw-normal">
                Tellus id et fringilla auctor. Ac viverra ullamcorper nec,
                senectus at nulla. Metus sem egestas volutpat cras phasellus
                cursus augue sagittis, enim. Sit et cras.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
