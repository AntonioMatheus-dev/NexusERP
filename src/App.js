import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src="/image/NexusERP_1_-removebg-preview 2.png" alt="NexusERP Logo" className="logo-img"
          />
        </div>
        <form className="login-form">
          <div className="input-group">
            <input type="email" placeholder="E - mail" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Senha" />
          </div>

          <button type="submit" className="btn-entrar">ENTRAR</button>
          
          <a href="#" className="forgot-password">Esqueci minha senha</a>

          <button type="button" className="btn-google">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
            <span>ENTRAR</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
