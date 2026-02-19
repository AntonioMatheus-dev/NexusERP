import React, { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import ProductTable from './components/ProductTable';
import AddProductModal from './components/AddProductModal';
import Pagination from '../shared/Pagination';
import './Estoque.css';

const ITEMS_PER_PAGE = 5;

const INITIAL_PRODUCTS = [
  { id: 1, nome: 'Furadeira', categoria: 'Ferramentas', preco: 299.90 },
  { id: 2, nome: 'Pneu Pilleri', categoria: 'Automotivo', preco: 189.00 },
  { id: 3, nome: 'Batedeira', categoria: 'Eletrodomésticos', preco: 149.90 },
  { id: 4, nome: 'Lava Jato', categoria: 'Ferramentas', preco: 599.90 },
  { id: 5, nome: 'Liquidificador', categoria: 'Eletrodomésticos', preco: 99.90 },
  { id: 6, nome: 'Serra Elétrica', categoria: 'Ferramentas', preco: 459.90 },
  { id: 7, nome: 'Fritadeira Air Fryer', categoria: 'Eletrodomésticos', preco: 349.90 },
  { id: 8, nome: 'Parafusadeira', categoria: 'Ferramentas', preco: 179.90 },
];

const Estoque = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    const newTotalPages = Math.ceil((products.length + 1) / ITEMS_PER_PAGE);
    setCurrentPage(newTotalPages);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="estoque-page">
      <h1 className="main-title">Produtos / StockList</h1>

      <div className="estoque-content">
        <ProductTable
          products={paginatedProducts}
          selectedIds={selectedIds}
          onSelect={handleSelect}
        />

        <button className="btn-new-product" onClick={() => setModalOpen(true)}>
          <MdAddCircleOutline size={18} />
          Novo Produto
        </button>
      </div>

      <div className="estoque-footer">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <AddProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
};

export default Estoque;
