import { useState } from "react";
import Modal from "./Modal";
import "./ProductFormModal.css";

// Mengembalikan objek berisi pesan error. Objek kosong = data valid.
function validate({ name, price }) {
  const errors = {};

  if (name.trim() === "") {
    errors.name = "Nama produk wajib diisi.";
  }

  const priceNumber = Number(price);
  if (price === "" || Number.isNaN(priceNumber) || priceNumber <= 0) {
    errors.price = "Harga harus lebih dari 0.";
  } else if (!Number.isInteger(priceNumber)) {
    errors.price = "Harga harus berupa angka bulat.";
  }

  return errors;
}

function ProductFormModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ name: "", price: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const foundErrors = validate(form);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    onSubmit({ name: form.name.trim(), price: Number(form.price) });
  };

  return (
    <Modal onClose={onClose} labelId="product-form-title">
      <h2 id="product-form-title" className="form-modal__title">
        Tambah Produk
      </h2>
      <p className="form-modal__description">Masukkan informasi produk baru.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="product-name">Nama Produk</label>
          <input
            id="product-name"
            name="name"
            type="text"
            maxLength={50}
            placeholder="Contoh: Pulpen"
            autoFocus
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="field__hint field__hint--error">{errors.name}</p>}
        </div>

        <div className="field">
          <label htmlFor="product-price">Harga (Rp)</label>
          <input
            id="product-price"
            name="price"
            type="number"
            inputMode="numeric"
            min="1"
            step="1"
            placeholder="Contoh: 5000"
            value={form.price}
            onChange={handleChange}
            aria-invalid={Boolean(errors.price)}
          />
          <p className={errors.price ? "field__hint field__hint--error" : "field__hint"}>
            {errors.price ?? "Harga harus lebih dari 0."}
          </p>
        </div>

        <div className="form-modal__actions">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn btn-primary">
            Simpan Produk
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ProductFormModal;
