import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src
                className=" avatar-img"
                src={process.env.PUBLIC_URL + "/myself.jpg"}
                alt="myself"
                // src="https://st2.depositphotos.com/4967775/11323/v/950/depositphotos_113235752-stock-illustration-avatar-girls-icon-vector-woman.jpg"
                // alt="avatar"
                style={{ height: "200px"}}
              />
            </div>
            <h3 style={{ paddingTop: "",textAlign:"center" }}>Jayshree Upadhyay</h3>
            <h4 style={{ color: "grey",textAlign:"center" }}>Front-End Developer</h4>
            
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <p style={{ textAlign:"left" }}>
              I enjoy building awesome websites and love to design clean, smart
              and effective works. As this area complements my studies, I am
              keen to gain more experience in the field. I currently aim to
              learn as much as I can, in a work environment, and to further my
              abilities in a professional setting, I would offer my full
              commitment and be a pleasant and friendly addition to your team.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            
            
            
            <h2>Skills</h2>
            <Skills skill="HTML5/CSS3    "  progress={70} />
            <Skills skill="Javascript  "  progress={60} />
            <Skills skill="React        "      progress={60} />
            <Skills skill="React Native    "       progress={50} />
            <Skills skill="NodeJS      "      progress={40} />
            <Skills skill="MySQL        "       progress={30} />
            <Skills skill="Git    "       progress={50} />
            <Skills skill="Basic UI/UX Design  " progress={40} />
            <Skills skill="Communication Skill    "       progress={70} />
            <Skills skill="Problem-Solving Abilities    "       progress={60} />
            <Skills skill="Teamwork & Collaboration    "       progress={60} />
            <Skills skill="Willingness to learn    "       progress={60} />
            
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          </Cell>
          

          <Cell className="resume-right-col" col={8}>
          <button >
    <a className="button" href="./Jayshree_CV.pdf" download = "Jayshree_CV.pdf">
      Download Resume
    </a>
</button>
            <h2>Education</h2>
            <Education
              startYear={2021}
              // endYear={2006}
              schoolName="Malmö University, Sweden "
              schoolDescription="Programming in C#"
            />
            <Education
              startYear={2020}
              // endYear={2006}
              schoolName="Högskolan Dalarna, Sweden"
              schoolDescription="Object-oriented programming and problem solving"
            />
            <Education
              startYear={2020}
              // endYear={2006}
              schoolName="Linköping University "
              schoolDescription="Svenska för utländska studenter - nivå A1,A2, distans"
            />
            <Education
              startYear={2019}
              // endYear={2006}
              schoolName="Hermods, Sweden "
              schoolDescription="English6"
            />
            <Education
              startYear={2015}
              // endYear={2006}
              schoolName="Institution of  Engineers, Kolkata (India) "
              schoolDescription="Bachelor of Computer Science & Engineering"
            />
             <Education
              startYear={2007}
              // endYear={2009}
              schoolName="D.A.V.V, Indore (India)"
              schoolDescription="Bachelor of Education, English"
            /> 
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Software Engineer"
              jobDescription="Developed website using HTML, CSS and JavaScript at Byblig Technologies Private Limited a web development IT company in
India."
            />
            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Substitute Teacher:"
              jobDescription="Worked as a substitute teacher in Internationella Engelska Skolan,Lund
"
            />
            <Experience
              startYear={2002}
              endYear={2018}
              jobName="Teacher:"
              jobDescription=" 
              Higher Secondary Schools Indore (INDIA) and One-on-One instruction to students (INDIA)"
            />
             <Experience
              
              
              jobName="Coach:"
              jobDescription=" 
              Trained teams for badminton and cricket during higher Education."
            />
             

            <hr style={{ borderTop: "3px solid #e22947" }} />
            
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
