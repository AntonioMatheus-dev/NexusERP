import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [view, setView] = useState('login'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const getPasswordError = (senha) => {
    if (!senha) return '';
    let faltam = [];
    if (senha.length < 6) faltam.push('6+ dígitos');
    if (!/[A-Z]/.test(senha)) faltam.push('uma letra maiúscula');
    if (!/[-_.!@#$%^&*(),.?":{}|<>]/.test(senha)) faltam.push('um símbolo');
    
    if (faltam.length > 0) {
      return 'A senha precisa de: ' + faltam.join(', ') + '.';
    }
    return '';
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return setError('E-mail e senha são obrigatórios.');
    
    const senhaErro = getPasswordError(password);
    if (senhaErro) return setError(senhaErro);
    
    try {
      setIsLoading(true);
      setError('');
      await login(email, password); // Chama o Contexto Global
    } catch (err) {
      setError('Falha no login. Verifique seus dados.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecoverPassword = (e) => {
    e.preventDefault();
    if (!validarEmail(email)) return setError('Insira um e-mail para receber o link.');
    setError('');
    setSuccess('E-mail enviado! Digite o código enviado para ' + email);
    setTimeout(() => { setView('verify'); }, 1500); 
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (code.length !== 6) return setError('O código deve ter 6 dígitos.');
    setError('');
    alert('Código validado!');
    setView('login');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src="/image/NexusERP_logo.png" alt="NexusERP Logo" className="logo-img" />
        </div>
        
        {view === 'login' && (
          <form className="login-form" onSubmit={handleLogin} noValidate>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="E - mail" 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                className={error && (error.toLowerCase().includes('e-mail')) ? 'input-error' : ''}
              />
              {error && error.toLowerCase().includes('e-mail') && (
                <span className="error-message">{error}</span>
              )}
            </div>
            
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Senha" 
                value={password}
                onChange={(e) => { 
                  const val = e.target.value;
                  setPassword(val); 
                  if (error || val.length > 0) {
                    setError(getPasswordError(val));
                  }
                }}
                className={error && error.toLowerCase().includes('senha') ? 'input-error' : ''}
              />
              {error && error.toLowerCase().includes('senha') && (
                <span className="error-message">{error}</span>
              )}
            </div>

            <button type="submit" className="btn-entrar" disabled={isLoading}>
              {isLoading ? 'ENTRANDO...' : 'ENTRAR'}
            </button>
            <button type="button" className="forgot-password-btn" onClick={() => { setView('forgot'); setError(''); }}>
              Esqueci minha senha
            </button>

            <button type="button" className="btn-google">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
              <span>ENTRAR</span>
            </button>
          </form>
        )}

        {view === 'forgot' && (
          <form className="login-form" onSubmit={handleRecoverPassword} noValidate>
            <h2 className="title-recovery">Recuperar Senha</h2>
            <p className="desc-recovery">Enviaremos um link de verificação para o seu e-mail.</p>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Seu e-mail cadastrado" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={error ? 'input-error' : ''}
              />
              {error && <span className="error-message">{error}</span>}
              {success && <span className="success-message">{success}</span>}
            </div>
            <button type="submit" className="btn-entrar">ENVIAR VERIFICAÇÃO</button>
            <button type="button" className="forgot-password-btn" onClick={() => { setView('login'); setError(''); setSuccess(''); }}>
              Voltar para o Login
            </button>
          </form>
        )}

        {view === 'verify' && (
          <form className="login-form" onSubmit={handleVerifyCode} noValidate>
            <h2 className="title-recovery">Verifique seu E-mail</h2>
            <p className="desc-recovery">Insira o código de 6 dígitos enviado para você.</p>
            <div className="input-group">
              <input 
                type="text" 
                maxLength="6"
                placeholder="000000" 
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                className={error ? 'input-error' : 'input-code'}
              />
              {error && <span className="error-message">{error}</span>}
            </div>
            <button type="submit" className="btn-entrar">VERIFICAR CÓDIGO</button>
            <button type="button" className="forgot-password-btn" onClick={() => { setView('forgot'); setError(''); setSuccess(''); }}>
              Reenviar e-mail
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
