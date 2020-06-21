import React, { Component } from "react";
import img from "./background.png";
import styled from "@emotion/styled";
import { Rnd } from "react-rnd";

const Container = styled("div")`
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-size: contain;
  background-position: center;
  display: block;
  text-align: center;
  z-index: 0;
`;

const Jalapeno = styled("img")`
  height: 100%;
  width: auto;
`;

const Pho = () => (
  <Container>
    <Rnd
      default={{ x: 50, y: 50, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/jalapeno2.png" />
    </Rnd>
    <Rnd
      default={{ x: 70, y: 70, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/jalapeno2.png" />
    </Rnd>
    <Rnd
      default={{ x: 90, y: 40, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/jalapeno3.png" />
    </Rnd>
    <Rnd
      default={{ x: 110, y: 30, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/jalapeno3.png" />
    </Rnd>

    <Rnd
      default={{ x: 150, y: 120, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/scallion1.png" />
    </Rnd>
    <Rnd
      default={{ x: 170, y: 140, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/scallion2.png" />
    </Rnd>
    <Rnd
      default={{ x: 190, y: 110, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/scallion3.png" />
    </Rnd>
    <Rnd
      default={{ x: 210, y: 100, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/scallion4.png" />
    </Rnd>

    <Rnd
      default={{ x: 50, y: 230, width: 90, height: 90 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/onion1.png" />
    </Rnd>
    <Rnd
      default={{ x: 70, y: 240, width: 90, height: 90 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/onion2.png" />
    </Rnd>
    <Rnd
      default={{ x: 90, y: 220, width: 90, height: 90 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/onion3.png" />
    </Rnd>
    <Rnd
      default={{ x: 110, y: 240, width: 90, height: 90 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/onion4.png" />
    </Rnd>

    <Rnd
      default={{ x: 210, y: 350, width: 50, height: 50 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/mint1.png" />
    </Rnd>
    <Rnd
      default={{ x: 200, y: 320, width: 50, height: 50 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/mint3.png" />
    </Rnd>
    <Rnd
      default={{ x: 230, y: 330, width: 50, height: 50 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/mint2.png" />
    </Rnd>
    <Rnd
      default={{ x: 240, y: 330, width: 50, height: 50 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/mint4.png" />
    </Rnd>

    <Rnd
      default={{ x: 30, y: 400, width: 260, height: 260 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/noodles.png" />
    </Rnd>

    <Rnd
      default={{ x: 1000, y: 50, width: 130, height: 130 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/meat1.png" />
    </Rnd>
    <Rnd
      default={{ x: 1100, y: 80, width: 130, height: 130 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/meat3.png" />
    </Rnd>
    <Rnd
      default={{ x: 1050, y: 60, width: 150, height: 150 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/meat2.png" />
    </Rnd>

    <Rnd
      default={{ x: 990, y: 250, width: 85, height: 85 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/pepper2.png" />
    </Rnd>
    <Rnd
      default={{ x: 1020, y: 260, width: 80, height: 80 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/pepper1.png" />
    </Rnd>

    <Rnd
      default={{ x: 1110, y: 280, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/lime1.png" />
    </Rnd>
    <Rnd
      default={{ x: 1140, y: 260, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/lime3.png" />
    </Rnd>
    <Rnd
      default={{ x: 1090, y: 230, width: 70, height: 70 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/lime2.png" />
    </Rnd>

    <Rnd
      default={{ x: 1020, y: 390, width: 85, height: 280 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/spoon.png" />
    </Rnd>
    <Rnd
      default={{ x: 1150, y: 390, width: 80, height: 280 }}
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Jalapeno src="../pho/chopsticks.png" />
    </Rnd>
  </Container>
);

export default Pho;
