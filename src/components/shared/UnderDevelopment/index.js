import React from 'react';
import { MdBuild } from 'react-icons/md';
import './UnderDevelopment.css';

const UnderDevelopment = ({ pageName }) => {
  return (
    <div className="under-dev-container">
      <div className="under-dev-card">
        <div className="under-dev-icon-wrapper">
          <MdBuild size={48} className="under-dev-icon" />
        </div>
        <h2 className="under-dev-title">Página em Desenvolvimento</h2>
        <p className="under-dev-message">
          A página <strong>{pageName}</strong> está sendo construída e estará disponível em breve.
        </p>
        <div className="under-dev-progress-bar">
          <div className="under-dev-progress-fill"></div>
        </div>
        <span className="under-dev-status">Em progresso...</span>
      </div>
    </div>
  );
};

export default UnderDevelopment;
