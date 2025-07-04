import React from 'react';
import { useNavigate } from 'react-router-dom';
import  './header.css';

import Logo from "./Logo-h.png";

const Header = () => {
  const navigate = useNavigate();
  return (
        <header>
           <nav>
           <div className="header">
              <img alt="Gateway Guardians Logo" width="75px" height="50px" src={Logo} onClick={() => navigate('/')}></img>
              <button onClick={() => navigate('/')} className='button' >Home</button>
               <button onClick={() => navigate('/about')} className='button'>About</button>
               <button onClick={() => navigate('/join')} className='button'>Join</button>
            </div>
          </nav>
        </header>
      );
      
    }   
    export default Header;
