import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-img"
              // src="https://i.postimg.cc/wv6pFpZF/pic.jpg"
              src={process.env.PUBLIC_URL + "/myself.jpg"}
              alt="myself"
            />
            <div className="banner-text">
              <h1>Front-End Web Developer</h1>
              <hr />

              <p>
                HTML5/CSS3 | JavaScript | React | React Native |
                NodeJS
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jayshree-u/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/Jaaishri"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://www.freecodecamp.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Home;
