import React from 'react';
import  './about.css';
import Video from "./video2.mp4";
import Header from './header.tsx';
import { useState } from 'react';

const Join = () => {
 
  return (
    <div className="home-container">
      <div>
      <Header />
      </div>     
      <div className="px-6 py-10 text-center"></div>
      <div className="about-us"> 
        <header className="hero">
      <h1 className="text-4xl font-bold mb-4">Join the Gateway Guardians</h1>
      <p className="text-lg mb-6">
      Interested in playing for the Gateway Guardians? Fill out the form below and our team will reach out to you with 
      more information.
      </p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAZBq8DVkgKeHHkG70WKnEgkMuqfplmnxVGO9-4-53g6GJfQ/viewform">Click to View Form</a>
       
      </header>
      </div>
      <div className="program">
      <section className="mission">
      <h2>Here is a video of the amazing Gateway Guardians</h2>
        <p>
      <div className='video'>   
        <video width="650" height="500" controls className='video-container'>
        <source src={Video} type="video/mp4" autoPlay={true} />
      </video>
      </div>
        </p>
      </section>
      </div>
    </div>

      
    
  );
};

export default Join;
