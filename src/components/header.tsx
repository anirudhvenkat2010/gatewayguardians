import React from 'react';
import  './header.css';
import Logo from "./logo.jpg";

const Header = () => {
  return (
        <header>
          <nav>
            <ul className="header-container">
            <li class="special_text"><img width="150px" heigth="40px" src={Logo} href="/"></img></li>
              <li><a href="/">Home</a></li>
              <li><a href="/Contact">Contact Us</a></li>
              <li><a href="/About">About Us</a></li>
            </ul>
          </nav>
        </header>
      );
    }   
    export default Header;
