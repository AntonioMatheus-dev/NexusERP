import React from 'react';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <img src="/image/NexusERP_1_-removebg-preview 2.png" alt="Nexus Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <button className="icon-btn">🔔</button>
        <div className="user-profile">
          <span className="user-icon">👤</span>
          <span className="user-name">User</span>
        </div>
        <button className="icon-btn">🌐</button>
        <button className="btn-logout-header" onClick={onLogout} title="Sair">🚪</button>
      </div>
    </header>
  );
};

export default Header;
