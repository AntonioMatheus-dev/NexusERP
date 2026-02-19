import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const PAYMENT_LABELS = {
  pix: 'PIX',
  cartao_credito: 'Cartão de Crédito',
  cartao_debito: 'Cartão de Débito',
  boleto: 'Boleto',
  dinheiro: 'Dinheiro',
};

const OrderRow = ({ order, selected, onSelect }) => (
  <tr className="order-row">
    <td className="order-checkbox-cell">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(order.id)}
        className="order-checkbox"
      />
    </td>
    <td className="order-client">
      <FaUserCircle size={22} className="order-client-icon" />
      <span>{order.clientName}</span>
    </td>
    <td className="order-date">{order.date}</td>
    <td className="order-payment">{PAYMENT_LABELS[order.paymentMethod] || order.paymentMethod}</td>
    <td className="order-total">R$ {order.total.toFixed(2)}</td>
  </tr>
);

const OrderTable = ({ orders, selectedIds, onSelect }) => {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th className="th-checkbox"></th>
          <th>Cliente</th>
          <th>Data</th>
          <th>Pagamento</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderRow
            key={order.id}
            order={order}
            selected={selectedIds.includes(order.id)}
            onSelect={onSelect}
          />
        ))}
        {orders.length === 0 && (
          <tr>
            <td colSpan="5" className="empty-message">Nenhum pedido encontrado.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default OrderTable;
