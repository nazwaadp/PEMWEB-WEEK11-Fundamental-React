import "./Header.css";

function Header({ onAddClick }) {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">Manajemen Produk</h1>
        <p className="header__subtitle">
          Kelola daftar produk dan harga.
        </p>
      </div>

      <button type="button" className="btn btn-primary" onClick={onAddClick}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        Tambah Produk
      </button>
    </header>
  );
}

export default Header;
