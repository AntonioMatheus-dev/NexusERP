import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <header className="login glass-morphism">
      <div className="login-left">
        <h1>Login</h1>
      </div>
      <div className="login-right">
        <div className="login-profile">
          <div className="login-info">
            <span className="login-name">Admin User</span>
            <span className="login-role">Super Admin</span>
          </div>
          <div className="avatar">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" alt="Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Login;
