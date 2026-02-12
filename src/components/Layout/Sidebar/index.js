import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <nav className="sidebar-nav">
        <div className="nav-item"><span className="nav-icon">💼</span><span className="nav-arrow">⌄</span></div>
        <div className="nav-item"><span className="nav-icon">📂</span><span className="nav-arrow">⌄</span></div>
        <div className="nav-item"><span className="nav-icon">🖥️</span><span className="nav-arrow">⌄</span></div>
        <div className="nav-item active"><span className="nav-icon">📝</span><span className="nav-arrow">⌄</span></div>
        <div className="nav-item"><span className="nav-icon">❓</span><span className="nav-arrow">⌄</span></div>
      </nav>
    </aside>
  );
};

export default Sidebar;
