import React from 'react';
import Header from './header.tsx';


const Home = () => {
  return (
    
    <div className="home-container">
      <div>
      <Header />
      </div>     
      <div className="px-6 py-10 text-center"></div>
      <div className="about-us"> 
        <header className="hero">
      <h1 className="text-4xl font-bold mb-4">Gateway Guardians Baseball</h1>
      <p className="text-lg mb-6">
        Starting in Fall 2025, Gateway Guardians is bringing a better way to play
        baseball to the St. Louis area. We’re launching a new era in youth baseball,
        built on consistent development plans, trained and licensed coaches, and resources
        for both parents and players.
      </p>
      </header>
      </div>
      <div className="program">
      <section className="mission">
      <h2>Our Mission</h2>
        <p>
        From our humble beginnings to our current standing as regional champions, the journey of the Gateway Guardians has 
        been nothing short of inspiring. We believe in nurturing young talent, supporting each other like family, and thrilling 
        our fans with unforgettable performances. Join us in celebrating the love of the game and the pride of our community—go 
        Gateway Guardians!
  
        </p>
      </section>
      <p className="text-lg mb-6">
        Whether you’re looking to compete at a high level or just love the game, we provide
        an environment where players of all skill levels can grow, improve, and have fun.
      </p>
      </div>
    </div>
  );
};

export default Home;
