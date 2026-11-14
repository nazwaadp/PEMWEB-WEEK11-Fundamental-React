import Modal from "./Modal";
import { formatRupiah } from "../utils/formatRupiah";
import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ product, onClose, onConfirm }) {
  return (
    <Modal onClose={onClose} labelId="confirm-delete-title">
      <div className="confirm">
        <div className="confirm__icon" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
          </svg>
        </div>

        <h2 id="confirm-delete-title" className="confirm__title">
          Anda yakin ingin menghapus produk ini?
        </h2>
        <p className="confirm__description">
          Produk yang telah dihapus tidak bisa dikembalikan.
        </p>

        <div className="confirm__detail">
          <span className="confirm__detail-id">ID: {product.id}</span>
          <strong className="confirm__detail-name">{product.name}</strong>
          <span className="confirm__detail-price">
            {formatRupiah(product.price)}
          </span>
        </div>
      </div>

      <div className="confirm__actions">
        <button type="button" className="btn btn-outline" onClick={onClose}>
          Batal Hapus.
        </button>
        <button type="button" className="btn btn-danger" onClick={onConfirm}>
          Hapus produk!
        </button>
      </div>
    </Modal>
  );
}

export default ConfirmDeleteModal;
