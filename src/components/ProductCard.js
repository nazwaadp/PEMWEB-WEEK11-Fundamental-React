import { formatRupiah } from "../utils/formatRupiah";
import "./ProductCard.css";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <article className="product-card">
      <span className="product-card__id">ID: {product.id}</span>
      <h2 className="product-card__name">{product.name}</h2>
      <p className="product-card__price">{formatRupiah(product.price)}</p>

      <div className="product-card__actions">
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => onEdit?.(product)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger-outline"
          onClick={() => onDelete?.(product)}
        >
          Hapus
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
