/** @format */

import React from "react";
import { DiMongodb } from "react-icons/di";
import {
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "react-animations";
import { FaCss3, FaHtml5, FaJava, FaReact, FaAngular } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { SiMysql } from "react-icons/si";
import styled, { keyframes } from "styled-components";
import "../styles/components/skills.css";

const FadeLeftAnimation = keyframes`${fadeInLeft}`;
const FadeDownAnimation = keyframes`${fadeInDown}`;
const FadeUpAnimation = keyframes`${fadeInUp}`;
const FadeRightAnimation = keyframes`${fadeInRight}`;
const FadeRight = styled.div`
  animation: infinite 8s ${FadeRightAnimation};
`;
const FadeLeft = styled.div`
  animation: infinite 8s ${FadeLeftAnimation};
`;
const FadeDown = styled.div`
  animation: infinite 8s ${FadeDownAnimation};
`;
const FadeUp = styled.div`
  animation: infinite 8s ${FadeUpAnimation};
`;
const Skills = () => {
  return (
    <section className="skills_page py-5" id="skills">
      <div className="container">
        <div className="skills_title">
          <h1 className="skills__title">Skills</h1>
        </div>
        <div className="test flex-wrap">
          <div className="skills_link">
            <FadeLeft>
              <a className="skill__link react">
                <FaReact />
              </a>
            </FadeLeft>
            <FadeDown>
              <a className="skill__link html">
                <FaHtml5 />
              </a>
            </FadeDown>
            <FadeUp>
              <a className="skill__link mongo">
                <DiMongodb />
              </a>
            </FadeUp>
            <FadeRight>
              <a className="skill__link skill__java">
                <FaJava />
              </a>
            </FadeRight>
          </div>
        </div>

        <div className="test flex-wrap ">
          <div className="skills_link">
            <FadeLeft>
              <a className="skill__link css">
                <FaCss3 />
              </a>
            </FadeLeft>
            <FadeUp>
              <a className="skill__link mongo">
                <FcAndroidOs />
              </a>
            </FadeUp>
            <FadeDown>
              <a className="skill__link mysql">
                <SiMysql />
              </a>
            </FadeDown>
            <FadeRight>
              <a className="skill__link skill__java">
                <FaAngular />
              </a>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
