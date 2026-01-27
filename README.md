# NexusERP – Micro-ERP Web

O **NexusERP** é uma solução de micro-ERP web projetada especificamente para pequenas e médias empresas. O foco principal é a automação de rotinas de vendas, controle rigoroso de estoque e uma gestão financeira totalmente integrada, eliminando a dependência de planilhas manuais e processos descentralizados.

## 🚀 Visão Geral
O sistema centraliza as operações fundamentais do negócio em uma interface intuitiva, permitindo que donos de empresas e gerentes tomem decisões baseadas em dados reais e atualizados instantaneamente.

---

## 🛠️ Principais Funcionalidades (Roadmap)

### 1. Autenticação e Segurança
- Login seguro com validação de senha e recuperação via e-mail (NodeMailer).
- Estrutura multi-tenant (vários clientes em uma mesma infraestrutura com dados isolados).
- Controle de permissões: Admin, Vendedor e Financeiro.

### 2. Gestão de Produtos e Estoque
- Cadastro completo com SKU, categorias e preços (custo/venda).
- **Alerta de Estoque Mínimo**: Notificações automáticas ao atingir limites críticos.
- Histórico completo de movimentações (entradas, saídas e ajustes).

### 3. Gestão de Clientes e Vendas
- CRM simplificado com histórico de compras por cliente.
- Registro de vendas rápido com cálculo automático de subtotais e descontos.
- Atualização automática em tempo real do estoque e do financeiro após cada venda.

### 4. Gestão Financeira
- **Fluxo de Caixa**: Resumo diário, semanal e mensal de entradas e saídas.
- Contas a Receber e Contas a Pagar integradas.
- Relatórios consolidados de faturamento e lucro.

### 5. Dashboard e BI
- Visão em tempo real do faturamento e vendas.
- Gráficos de desempenho dos últimos 7 dias.
- Top 5 produtos mais vendidos e alertas de pendências.

---

## 💻 Stack Tecnológica (MVP)
- **Frontend**: React (Interface Responsiva)
- **Backend**: Node.js / Express
- **Banco de Dados**: PostgreSQL (com Sequelize ORM)
- **Comunicação**: WebSockets (Socket.io) para atualizações real-time.

---

## 📉 Público-Alvo
- **Comércio Varejista**: Lojas de roupas, eletrônicos, casa e construção.
- **Setor de Serviços**: Oficinas, salões de beleza, clínicas.
- **Pequena Manufatura**: Marcenarias, confecções e fábricas de alimentos.

---

## 🏁 Roadmap de Desenvolvimento

### Fase 1: MVP (Semanas 1-12)
- [ ] Autenticação e multi-tenant básico.
- [ ] Cadastro de produtos, clientes e usuários.
- [ ] Registro de vendas e atualização de estoque.
- [ ] Dashboard com métricas principais.

### Fase 2: Expansão (Meses 4-6)
- [ ] Fluxo de caixa completo.
- [ ] Relatórios em PDF/Excel.
- [ ] Integração com WhatsApp para alertas.

### Fase 3: Maturidade (Meses 7+)
- [ ] Integração com NF-e.
- [ ] App Mobile (React Native).
- [ ] Análise de dados preditiva (Sazonalidade).

---

## 🔒 Segurança e Performance
- Criptografia de senhas com **bcrypt**.
- Proteção contra SQL Injection e CSRF.
- Backups diários automáticos.
- Carregamento otimizado (Dashboards em < 1s).

---

## 📄 Conclusão
O NexusERP não é apenas um software de controle, mas um parceiro estratégico para a digitalização de pequenos negócios, oferecendo simplicidade onde os grandes ERPs entregam complexidade.
