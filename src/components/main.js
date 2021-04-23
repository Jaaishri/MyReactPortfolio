import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid, Cell,Button } from "react-mdl";
import Home from "./Home";
import AboutMe from "./aboutme";
import Contact from "./contact";
// import Education from "./education";
// import Experience from "./experience";
//import Projects from "./projects";
import Resume from "./resume";
// import Skills from "./skills";
const divStyle = {
  bcolor: 'blue',
  
};

const Main = () => (
  <div style={{ width: "100%", margin: "auto" }}>
  <Grid className="landing-grid">
  <Cell col={12}>
  <img
              className="main-img"
              // src="https://i.postimg.cc/wv6pFpZF/pic.jpg"
              src={process.env.PUBLIC_URL + "/Laptop.jpeg"}
              alt="myself"
            />
            
            
    <Switch>
    <Route exact path="/Home" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
  </Switch>
  </Cell>
  </Grid>
  </div>
);

export default Main;
