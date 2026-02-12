import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Futuramente: Verificar se existe um Token no localStorage ao carregar a página
        const storageUser = localStorage.getItem('@Nexus:user');
        if (storageUser) {
            setUser(JSON.parse(storageUser));
        }
        setLoading(false);
    }, []);

    async function login(email, password) {
        // Simulando chamada de backend (API)
        return new Promise((resolve) => {
            setTimeout(() => {
                const userData = { email, name: 'Usuário Nexus' };
                setUser(userData);
                localStorage.setItem('@Nexus:user', JSON.stringify(userData));
                resolve(true);
            }, 1000);
        });
    }

    function logout() {
        localStorage.removeItem('@Nexus:user');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
