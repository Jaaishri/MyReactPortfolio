import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src
                className=" lego-img"
                src={process.env.PUBLIC_URL + "/Autumn.jpg"}
                alt="myself"
                // src="https://st2.depositphotos.com/4967775/11323/v/950/depositphotos_113235752-stock-illustration-avatar-girls-icon-vector-woman.jpg"
                // alt="avatar"
                style={{ height: "350px" }}
              />
            </div>
            <h2 style={{ paddingTop: "",textAlign:"center" }}>Jayshree Upadhyay</h2>
            <h4 style={{ color: "grey",textAlign:"center" }}>Front-End Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <p>
              I enjoy building awesome websites and love to design clean, smart
              and effective works. As this area complements my studies, I am
              keen to gain more experience in the field. I currently aim to
              learn as much as I can, in a work environment, and to further my
              abilities in a professional setting, I would offer my full
              commitment and be a pleasant and friendly addition to your team.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <h5> Address</h5>
            <p>Lund,Skane County,Sweden</p>
            <h5>Phone</h5>
            <p>076 745 44 96</p>
            <h5>Email</h5>
            <p>jaaishri@gmail.com</p>
            
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h3>About me</h3>
            <hr style={{ borderTop: "3px solid #e22947" }} />
             <h1>Stand Out</h1>
            <img
                src
                className="standOut-img"
                src={process.env.PUBLIC_URL + "/standout.jpg"}
                alt="Stand Out"
                
                // src="https://st2.depositphotos.com/4967775/11323/v/950/depositphotos_113235752-stock-illustration-avatar-girls-icon-vector-woman.jpg"
                // alt="avatar"
                //style={{ height: "300px" , paddingTop:"0px"}}
                
                
              />
             
            <hr style={{ borderTop: "3px solid #e22947",paddingTop: "20px", }} />
            <p>Although,I enjoy building awesome websites and love to design
           clean,smart, meaningful and effective works.I love listening to music,
           play badminton/Tennis and sometimes I try musical instruments too.</p>
           
          <p> I have been efficiently coding
websites and applications using modern HTML, CSS, JavaScript and React.
As this area complements my studies, I am keen to gain more experience
in the field. </p>
            

            <hr style={{ borderTop: "3px solid #e22947" }} />

            
            

            
            <h2></h2>
            
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
