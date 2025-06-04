import React from 'react';
import  './home.css';
import Header from './header.tsx';


const Home = () => {
  return (
    
    <div className="home-container">
        <Header />
    <div className="px-6 py-10 text-center"></div>
      <h1 className="text-4xl font-bold mb-4">Gateway Guardians Baseball</h1>
      <p className="text-lg mb-6">
        Starting in Fall 2025, Gateway Guardians is bringing a better way to play
        baseball to the St. Louis area. We’re launching a new era in youth baseball,
        built on consistent development plans, trained and licensed coaches, and resources
        for both parents and players.
      </p>
      <p className="text-lg mb-6">
        Whether you’re looking to compete at a high level or just love the game, we provide
        an environment where players of all skill levels can grow, improve, and have fun.
      </p>
    </div>
  );
};

export default Home;
