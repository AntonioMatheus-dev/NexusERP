import React from 'react';

const ProductRow = ({ product, selected, onSelect }) => (
  <tr className="product-row">
    <td className="product-checkbox-cell">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(product.id)}
        className="product-checkbox"
      />
    </td>
    <td className="product-name">{product.nome}</td>
    <td className="product-category">{product.categoria}</td>
    <td className="product-price">R$ {product.preco.toFixed(2)}</td>
  </tr>
);

const ProductTable = ({ products, selectedIds, onSelect }) => {
  return (
    <table className="stock-table">
      <thead>
        <tr>
          <th className="th-checkbox"></th>
          <th>Produto</th>
          <th>Categoria</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            selected={selectedIds.includes(product.id)}
            onSelect={onSelect}
          />
        ))}
        {products.length === 0 && (
          <tr>
            <td colSpan="4" className="empty-message">Nenhum produto cadastrado.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
