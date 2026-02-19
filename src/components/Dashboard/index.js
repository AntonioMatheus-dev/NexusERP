import React, { useState } from 'react';
import { MdCalendarToday, MdAttachMoney, MdTrendingDown } from 'react-icons/md';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import StatCard from './StatCard';
import Estoque from '../Estoque';
import Pedidos from '../Pedidos';
import UnderDevelopment from '../shared/UnderDevelopment';
import './Dashboard.css';

const DashboardContent = () => {
  return (
    <>
      <h1 className="main-title">Dashboard</h1>

      <div className="cards-grid">
        <StatCard title="Vendas do dia"              icon={<MdCalendarToday size={32} />}  colorClass="card-blue" />
        <StatCard title="Contas a receber"           icon={<MdAttachMoney size={32} />} />
        <StatCard title="Produtos com estoque baixo" icon={<MdTrendingDown size={32} />} />
      </div>

      <div className="data-section">
        <div className="chart-container">
          <h4>Vendas do Dia</h4>
          <div className="mock-chart">
            <svg viewBox="0 0 400 200" className="line-chart">
              <path d="M0,180 L50,150 L100,100 L150,120 L200,60 L250,50 L300,40" fill="none" stroke="#2b88ff" strokeWidth="3" />
              <circle cx="50"  cy="150" r="4" fill="#2b88ff" />
              <circle cx="100" cy="100" r="4" fill="#2b88ff" />
              <circle cx="200" cy="60"  r="4" fill="#2b88ff" />
            </svg>
            <div className="chart-labels">
              <span>Manhã</span><span>Meio Dia</span><span>Tarde</span><span>Noite</span>
            </div>
          </div>
        </div>

        <div className="table-container">
          <h4>Ultimas vendas</h4>
          <table className="vendas-table">
            <tbody>
              <tr><td>Máquina de lavar</td><td className="qty">9</td></tr>
              <tr><td>Fritadeira Elétrica</td><td className="qty">2</td></tr>
              <tr><td>Iphone x19</td><td className="qty">2</td></tr>
              <tr><td>Panela Elétrica</td><td className="qty">2</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const Dashboard = ({ userEmail, onLogout }) => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'estoque':
        return <Estoque />;
      case 'pedidos':
        return <Pedidos />;
      case 'sistemas':
        return <UnderDevelopment pageName="Sistemas" />;
      case 'ajuda':
        return <UnderDevelopment pageName="Ajuda" />;
      case 'dashboard':
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="dashboard-wrapper">
      <Header onLogout={onLogout} />

      <div className="dashboard-container">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />

        <main className="dashboard-main">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
