import './AboutMe.css'
import { useState, useEffect } from "react";
import CircularProgress from './CircularProgress';
const AboutMe = () => {
  
  return (
    <div className="wrapper aboutMeDiv">
      <h1 className="aboutMeTitle">ABOUT ME</h1>
      <div className="introDiv">
        <div className="introDivHello">
          <h2>HELLO</h2>
        </div>
        <div className="introText">
          <div className="introTextContainer">
            <h3>
              I'm Kuljit, <br />
              Photographer & Videographer
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ex
              soluta itaque, tenetur quia ea error mollitia quos.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              iure numquam aperiam libero perferendis ab optio sapiente excepturi,
              magnam similique nihil quis totam. Quasi repudiandae, magnam tempora
              exercitationem laborum consectetur.
            </p>
          </div>

          <div className='introSkillContainer'>
            <ul className="introSkill">
              <li>
                <CircularProgress skill="Photography" percentage={95} />
              </li>
              <li>
                <CircularProgress skill="Events" percentage={85} />
              </li>
              <li>
                <CircularProgress skill="Videography" percentage={95} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
