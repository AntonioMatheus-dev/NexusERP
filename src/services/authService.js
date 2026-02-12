/**
 * Camada de Serviço para comunicação com o Backend
 * Futuramente aqui usaremos o Axios para chamadas reais.
 */

export const authService = {
    async signIn(email, password) {
        // Mock de comunicação com a API
        console.log("Chamando API para Login...", { email });
    
        // Simula um delay de rede
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Futuramente: return api.post('/login', { email, password });
        return {
            token: 'fake-jwt-token',
            user: {
                name: 'Antonio Matheus',
                email: email
            }
        };
    },

    async recoverPassword(email) {
        console.log("Chamando API para Recuperar Senha...");
        await new Promise(resolve => setTimeout(resolve, 800));
        return true;
    }
};
