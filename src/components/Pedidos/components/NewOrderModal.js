import React, { useState } from 'react';
import { MdClose, MdAddCircleOutline, MdDelete } from 'react-icons/md';

const PAYMENT_OPTIONS = [
  { value: 'pix', label: 'PIX' },
  { value: 'cartao_credito', label: 'Cartão de Crédito' },
  { value: 'cartao_debito', label: 'Cartão de Débito' },
  { value: 'boleto', label: 'Boleto' },
  { value: 'dinheiro', label: 'Dinheiro' },
];

const EMPTY_ITEM = { productName: '', quantity: 1, price: '' };

const INITIAL_FORM = {
  clientName: '',
  date: new Date().toISOString().split('T')[0],
  paymentMethod: 'pix',
  items: [{ ...EMPTY_ITEM }],
};

const NewOrderModal = ({ isOpen, onClose, onAdd }) => {
  const [form, setForm] = useState(INITIAL_FORM);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, field, value) => {
    setForm((prev) => {
      const items = [...prev.items];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, items };
    });
  };

  const addItem = () => {
    setForm((prev) => ({
      ...prev,
      items: [...prev.items, { ...EMPTY_ITEM }],
    }));
  };

  const removeItem = (index) => {
    if (form.items.length <= 1) return;
    setForm((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const calculateTotal = () => {
    return form.items.reduce((sum, item) => {
      return sum + (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 0);
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.clientName.trim()) return;

    const validItems = form.items.filter(
      (item) => item.productName.trim() && item.price && item.quantity
    );
    if (validItems.length === 0) return;

    onAdd({
      id: Date.now(),
      clientName: form.clientName.trim(),
      date: form.date,
      paymentMethod: form.paymentMethod,
      items: validItems,
      total: calculateTotal(),
    });

    setForm(INITIAL_FORM);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Novo Pedido</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <MdClose size={22} />
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {/* Dados do cliente */}
          <div className="form-row">
            <div className="form-group form-group-grow">
              <label htmlFor="clientName">Cliente</label>
              <input
                id="clientName"
                name="clientName"
                type="text"
                placeholder="Nome do cliente"
                value={form.clientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="orderDate">Data</label>
              <input
                id="orderDate"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Forma de Pagamento</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="filter-select"
            >
              {PAYMENT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Itens do pedido */}
          <div className="order-items-section">
            <label className="section-label">Itens do Pedido</label>

            {form.items.map((item, index) => (
              <div key={index} className="order-item-row">
                <input
                  type="text"
                  placeholder="Produto"
                  value={item.productName}
                  onChange={(e) => handleItemChange(index, 'productName', e.target.value)}
                  className="item-product"
                  required
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Qtd"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                  className="item-qty"
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Preço"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                  className="item-price"
                  required
                />
                <button
                  type="button"
                  className="btn-remove-item"
                  onClick={() => removeItem(index)}
                  disabled={form.items.length <= 1}
                  title="Remover item"
                >
                  <MdDelete size={18} />
                </button>
              </div>
            ))}

            <button type="button" className="btn-add-item" onClick={addItem}>
              <MdAddCircleOutline size={16} />
              Adicionar Item
            </button>
          </div>

          {/* Total + ações */}
          <div className="order-total-row">
            <span className="total-label">Total:</span>
            <span className="total-value">R$ {calculateTotal().toFixed(2)}</span>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-save">
              Criar Pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOrderModal;
