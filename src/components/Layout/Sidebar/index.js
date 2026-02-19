import React from 'react';
import {
  MdDashboard,
  MdInventory,
  MdMonitor,
  MdAssignment,
  MdHelpOutline,
} from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi';
import './Sidebar.css';

const navItems = [
  { icon: <MdDashboard size={20} />, key: 'dashboard', label: 'Dashboard' },
  { icon: <MdInventory size={20} />,  key: 'estoque',   label: 'Estoque' },
  { icon: <MdMonitor size={20} />,    key: 'sistemas',  label: 'Sistemas' },
  { icon: <MdAssignment size={20} />, key: 'pedidos',   label: 'Pedidos' },
  { icon: <MdHelpOutline size={20} />,key: 'ajuda',     label: 'Ajuda' },
];

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <aside className="dashboard-sidebar">
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item.key}
            className={`nav-item${activePage === item.key ? ' active' : ''}`}
            onClick={() => onNavigate(item.key)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            <FiChevronDown size={14} className="nav-arrow" />
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
