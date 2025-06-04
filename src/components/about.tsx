import React from 'react';
import  './about.css';
import Video from "./video2.mp4";
import Header from './header.tsx';

const About = () => {

  return (
    <div className="max-w-3xl mx-auto p-8">
      <Header />
      <h1>Our Video</h1>
      <p>Here is a video of the amazing Gateway Guardians</p>
      <video width="750" height="500" controls>
        <source src={Video} type="video/mp4" autoPlay={true} />
      </video>
      <p>About Us</p>
     
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to the official page of the Gateway Guardians, a passionate and determined baseball team dedicated to excellence 
        both on and off the field. Our team was founded on the principles of hard work, sportsmanship, and community spirit. 
        Whether we're training in the off-season or giving our all during a nail-biting ninth inning, the Gateway Guardians 
        represent the heart and hustle of hometown baseball.
      </p>
      <p className="text-lg">
        From our humble beginnings to our current standing as regional champions, the journey of the Gateway Guardians has 
        been nothing short of inspiring. We believe in nurturing young talent, supporting each other like family, and thrilling 
        our fans with unforgettable performances. Join us in celebrating the love of the game and the pride of our community—go 
        Gateway Guardians!
      </p>
    </div>
  );
}

export default About;
