import './AboutMe.css'

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
              a passionate photographer and videographer with a heart that beats
              for the untamed beauty of nature, the majestic allure of
              mountains, and the vibrant tapestry of social events. My journey
              behind the lens began with a simple desire: to capture the
              fleeting moments and translate them into timeless stories. Each
              frame I capture is a testament to my love for the natural world
              and the diverse tapestry of human experiences.
            </p>
            {/* <p>
              As a nature enthusiast, my camera finds its true calling in the
              great outdoors. From the serene whispers of the forest to the
              grandeur of mountain peaks at dawn, my photography is an ode to
              the Earth's unspoken tales. These landscapes are not just
              backdrops, but active characters in my visual narratives.
            </p>
            <p>
              But my lens doesn't stop at nature. The pulsating energy of social
              events captivates me equally. I specialize in encapsulating the
              essence of these gatherings, be it intimate gatherings or grand
              celebrations. My videos and photos not only reflect the event's
              atmosphere but also the unique stories of its participants.
            </p>
            <p>
              Professional portfolios are another realm where my expertise
              shines. Understanding the importance of a powerful first
              impression, I work closely with professionals to create imagery
              that encapsulates their personal brand. Whether it’s for a budding
              entrepreneur or a seasoned professional, my goal is to craft
              visuals that resonate with their audience and amplify their
              professional narrative.
            </p> */}
            <p>
              Through my camera, I strive to not just see, but to understand;
              not just to capture, but to narrate. Every click is an opportunity
              to tell a story, and every story is an avenue to connect with
              others. Let’s embark on a visual journey together. Your story is
              waiting to be told.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
