import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

const INITIAL_FORM = { nome: '', categoria: '', preco: '' };

const AddProductModal = ({ isOpen, onClose, onAdd }) => {
  const [form, setForm] = useState(INITIAL_FORM);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.categoria.trim() || !form.preco) return;

    onAdd({
      id: Date.now(),
      nome: form.nome.trim(),
      categoria: form.categoria.trim(),
      preco: parseFloat(form.preco),
    });

    setForm(INITIAL_FORM);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Novo Produto</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <MdClose size={22} />
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome do Produto</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Ex: Furadeira"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <input
              id="categoria"
              name="categoria"
              type="text"
              placeholder="Ex: Ferramentas"
              value={form.categoria}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="preco">Preço (R$)</label>
            <input
              id="preco"
              name="preco"
              type="number"
              step="0.01"
              min="0"
              placeholder="0,00"
              value={form.preco}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-save">
              Salvar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
