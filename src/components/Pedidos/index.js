import React, { useState, useMemo } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import OrderFilters from './components/OrderFilters';
import OrderTable from './components/OrderTable';
import NewOrderModal from './components/NewOrderModal';
import Pagination from '../shared/Pagination';
import './Pedidos.css';

const ITEMS_PER_PAGE = 5;

const INITIAL_ORDERS = [
  { id: 1, clientName: 'João Silva',     date: '2026-02-19', paymentMethod: 'pix',            total: 450.00 },
  { id: 2, clientName: 'Maria Oliveira', date: '2026-02-18', paymentMethod: 'cartao_credito',  total: 1250.90 },
  { id: 3, clientName: 'Pedro Santos',   date: '2026-02-18', paymentMethod: 'boleto',          total: 3200.00 },
  { id: 4, clientName: 'Ana Costa',      date: '2026-02-17', paymentMethod: 'dinheiro',        total: 89.90 },
  { id: 5, clientName: 'Lucas Pereira',  date: '2026-02-17', paymentMethod: 'pix',             total: 620.00 },
  { id: 6, clientName: 'Carla Mendes',   date: '2026-02-16', paymentMethod: 'cartao_debito',   total: 175.50 },
];

const INITIAL_FILTERS = { date: '', paymentMethod: '' };

const Pedidos = () => {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  // Filtra os pedidos com base nos filtros ativos
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      if (filters.date && order.date !== filters.date) return false;
      if (filters.paymentMethod && order.paymentMethod !== filters.paymentMethod) return false;
      return true;
    });
  }, [orders, filters]);

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleAddOrder = (newOrder) => {
    setOrders((prev) => [...prev, newOrder]);
    setFilters(INITIAL_FILTERS);
    const newTotal = Math.ceil((orders.length + 1) / ITEMS_PER_PAGE);
    setCurrentPage(newTotal);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pedidos-page">
      <h1 className="main-title">Pedidos</h1>

      <div className="pedidos-content">
        <OrderFilters filters={filters} onChange={handleFilterChange} />

        <OrderTable
          orders={paginatedOrders}
          selectedIds={selectedIds}
          onSelect={handleSelect}
        />

        <button className="btn-new-order" onClick={() => setModalOpen(true)}>
          <MdAddCircleOutline size={18} />
          Novo Pedido
        </button>
      </div>

      <div className="pedidos-footer">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <NewOrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddOrder}
      />
    </div>
  );
};

export default Pedidos;
