import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import img from "./background.png";
import styled from "@emotion/styled";
import Pho from "./Pho";

const Container = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: #83c0f9;
  display: block;
  text-align: center;
  font-family: "Josefin Sans";
`;

const Love = styled("div")`
  text-align: center;
  font-size: 50px;
  padding-top: 20%;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Be = styled("div")`
  text-align: center;
  font-size: 40px;
  margin-bottom: 5px;
`;

const Li = styled(Link)`
  text-align: center;
  font-size: 20px;
  margin-top: 300px;
  color: #004d6d;
  text-decoration: none;
  &:hover {
    background-color: #fff8b2;
    opacity: 80%;
  }
`;

const Landing = () => (
  <Container>
    <Love>with lots of love,</Love>
    <Be>Bé Phương Khánh</Be>
    <Be>& Bé Phương Quỳnh</Be>
    <br />
    <br />
    <Li to="/pho">🍜 let's make lunch!</Li>
  </Container>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/pho" component={Pho} />
      </Switch>
    </Router>
  );
}

export default App;
