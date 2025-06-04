import React, { useState } from 'react';
import './contact.css';
import Header from './header.tsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Handle form submission here
  };
  return (
    <div>
        <Header />
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Name:
        <input className="input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea className="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button className="button" type="submit">Submit</button>
    </form>
    </div>
  );
};
export default Contact;
