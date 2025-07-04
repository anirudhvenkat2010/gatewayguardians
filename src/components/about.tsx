import React from 'react';
import  './about.css';
import Header from './header.tsx';

const About = () => {

  return (
    <div className="home-container">
      <div>
      <Header />
      </div>     
      <div className="px-6 py-10 text-center"></div>
     
      <div className="about-us"> 

      <header className="hero">
        <h1>Gateway Guardians Baseball</h1>
        <p>
        Welcome to the official page of the Gateway Guardians, a passionate and determined baseball team dedicated to excellence 
        both on and off the field. Our team was founded on the principles of hard work, sportsmanship, and community spirit. 
        Whether we're training in the off-season or giving our all during a nail-biting ninth inning, the Gateway Guardians 
        represent the heart and hustle of hometown baseball.
 
        </p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
        From our humble beginnings to our current standing as regional champions, the journey of the Gateway Guardians has 
        been nothing short of inspiring. We believe in nurturing young talent, supporting each other like family, and thrilling 
        our fans with unforgettable performances. Join us in celebrating the love of the game and the pride of our community—go 
        Gateway Guardians!
  
        </p>
      </section>

      <section className="programs">
        <h2>Programs</h2>

        <div className="program">
          <h3>Gateway Guardian Program</h3>
          <p>
            Our Gateway Guardian Program includes players ranging from 6U to 18U.
            These teams are predominantly led by non-paid coaches.
            All training, practices, and tournaments are determined by the team.
          </p>
        </div>

        <div className="program">
          <h3>Gateway Guardians Development Program</h3>
          <p>
            Designed for players at all levels.
            This program teaches fundamental aspects of the game while providing ample opportunities to develop skills.
            We believe that by surrounding players with the right people, they will acquire the tools and knowledge to 
            compete.
          </p>
        </div>

       
      </section>

      <footer className="cta">
        <p>
          Ready to join the Gateway Guardians family? Explore our programs and find your path today.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAZBq8DVkgKeHHkG70WKnEgkMuqfplmnxVGO9-4-53g6GJfQ/viewform" className="button">View Tryouts</a>
      </footer>
    </div>
    </div>
  );
}

export default About;
