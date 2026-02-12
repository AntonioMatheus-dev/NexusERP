import React from 'react';

const StatCard = ({ title, icon, colorClass }) => {
  return (
    <div className={`card ${colorClass || ''}`}>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-icon-large">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
