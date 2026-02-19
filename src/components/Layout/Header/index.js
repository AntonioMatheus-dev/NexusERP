import React from 'react';
import { FaBell, FaUserCircle, FaGlobe, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <img src="/image/NexusERP_logo.png" alt="Nexus Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <button className="icon-btn" title="Notificações">
          <FaBell size={18} />
        </button>
        <div className="user-profile">
          <FaUserCircle size={26} className="user-icon" />
          <span className="user-name">User</span>
        </div>
        <button className="icon-btn" title="Idioma">
          <FaGlobe size={18} />
        </button>
        <button className="btn-logout-header" onClick={onLogout} title="Sair">
          <FaSignOutAlt size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
