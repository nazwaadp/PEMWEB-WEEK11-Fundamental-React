import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({
  products,
  onEdit,
  onDelete,
  emptyMessage = "Belum ada produk.",
}) {
  if (products.length === 0) {
    return <p className="product-list__empty">{emptyMessage}</p>;
  }

  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default ProductList;
