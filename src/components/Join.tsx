import React from 'react';
import  './home.css';
import Header from './header.tsx';
import { useState } from 'react';

const Join = () => {
 

  return (
     
       <div className="px-6 py-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Join the Gateway Guardians</h1>
          <p className="text-center text-gray-700 mb-8">
            Interested in playing for the Gateway Guardians? Fill out the form below and our team will reach out to you with more information.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbDvBIhwQ34qoQa4RrnQHMTUe6XXhIQEdY5nA4G5kWPVUUlQ/viewform">Submit Form</a>
          
        </div>
  );
};

export default Join;
