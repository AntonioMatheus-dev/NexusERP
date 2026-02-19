import React from 'react';

const PAYMENT_METHODS = [
  { value: '', label: 'Todas' },
  { value: 'pix', label: 'PIX' },
  { value: 'cartao_credito', label: 'Cartão de Crédito' },
  { value: 'cartao_debito', label: 'Cartão de Débito' },
  { value: 'boleto', label: 'Boleto' },
  { value: 'dinheiro', label: 'Dinheiro' },
];

const OrderFilters = ({ filters, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="order-filters">
      <div className="filter-group">
        <label htmlFor="filterDate">Data</label>
        <input
          id="filterDate"
          name="date"
          type="date"
          value={filters.date}
          onChange={handleChange}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="filterPayment">Forma de Pagamento</label>
        <select
          id="filterPayment"
          name="paymentMethod"
          value={filters.paymentMethod}
          onChange={handleChange}
          className="filter-select"
        >
          {PAYMENT_METHODS.map((method) => (
            <option key={method.value} value={method.value}>
              {method.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OrderFilters;
