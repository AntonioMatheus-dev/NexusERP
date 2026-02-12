import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const AppContent = () => {
  const { signed, loading, user, logout } = useAuth();

  if (loading) {
    return <div style={{ color: '#fff' }}>Carregando Nexus...</div>;
  }

  return signed ? (
    <Dashboard userEmail={user?.email} onLogout={logout} />
  ) : (
    <Login />
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
