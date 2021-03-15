/** @format */

import React from "react";
import "../styles/components/About.css";
import about from "../imgs/profileImg2.JPG";

export default function About() {
  return (
    <section className="about_page" id="About">
      <div className="container">
        <h2 className="h2_a">Who Am I</h2>
        <h6 className="h6_y">
          I am Yarin Tagouri, Third-year Computer Science (B.sc) student.
        </h6>
        <h6 className="h6_y2">
          I have the character of a fighter, a self-learner and work well
          independently as well as in team.
          <br /> I am very mission driven and a perfectionist.
        </h6>
      </div>
      <div className="row">
        <div className="img_class">
          <img
            className="img-responsive"
            style={{ height: "30rem" }}
            src={about}
            alt=""
          />
        </div>
        <div className="education">
          <h3 className="h3_e"> Education </h3>
          <br />
          <h4 className="h4_e">2018-present:</h4>
          <br />
          <p className="p">
            ● 3nd year BSc. Computer Science degree at The College of Management
            Academic Studies.
          </p>
        </div>
      </div>
    </section>
  );
}
