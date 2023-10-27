import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className="wrapper aboutMeDiv">
      <h1 className='aboutMeTitle'>ABOUT ME</h1>
      <div className='introDiv'>
        <div className='introDivHello'>
          <h2>HELLO</h2>
        </div>
        <div className='introText'>
         <h3>I'm Kuljit, <br/>Photographer & Videographer</h3>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ex soluta itaque, tenetur quia ea error mollitia quos. </p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure numquam aperiam libero perferendis ab optio sapiente excepturi, magnam similique nihil quis totam. Quasi repudiandae, magnam tempora exercitationem laborum consectetur.</p>

         <div className='introSkill'>
          <div className="introSkillPhoto">
            <h4>Photography</h4>
            <div className="skillPercent">
              <p>95%</p>
            </div>
          </div>
          <div className="introSkillEvents">
            <h4>Events</h4>
          </div>
          <div className="introSkillVideo">
            <h4>Videography</h4>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
