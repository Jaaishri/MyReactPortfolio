import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import "./App.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Jayshree" scroll>
          <Navigation>
            <Link to="/Home">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
           
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Jayshree">
          <Navigation>
            <Link to="/Home">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
           
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
