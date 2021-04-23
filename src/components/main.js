import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./aboutme";
import Contact from "./contact";
// import Education from "./education";
// import Experience from "./experience";
//import Projects from "./projects";
import Resume from "./resume";
// import Skills from "./skills";
const Main = () => (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    
    <Route path="/resume" component={Resume} />
  </Switch>
);
export default Main;
