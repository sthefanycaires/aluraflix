import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const navigate = useNavigate();

  const handleNewVideo = () => {
    navigate('/new-video');
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><NavLink exact={true} to="/" activeClassName="active-link">HOME</NavLink></li>
          <li><button className="secondary" onClick={handleNewVideo}>NOVO VÍDEO</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
