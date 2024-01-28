import './AboutMe.css'
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
              I&apos;m Kuljit, <br />
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

          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
