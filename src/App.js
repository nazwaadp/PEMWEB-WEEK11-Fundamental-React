import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import ProductFormModal from "./components/ProductFormModal";
import { initialProducts } from "./data/products";
import "./App.css";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  // null = tidak ada pop-up. Contoh isi: { type: "add" }
  const [modal, setModal] = useState(null);

  const keyword = search.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );

  const closeModal = () => setModal(null);

  const handleAddProduct = ({ name, price }) => {
    const nextId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([...products, { id: nextId, name, price }]);
    closeModal();
  };

  return (
    <main className="app">
      <Header onAddClick={() => setModal({ type: "add" })} />

      <div className="toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <span className="toolbar__count">{filteredProducts.length} produk</span>
      </div>

      <ProductList
        products={filteredProducts}
        emptyMessage={keyword ? "Produk tidak ditemukan." : "Belum ada produk."}
      />

      <p className="app__footer">
        Menampilkan {filteredProducts.length} dari {products.length} produk
      </p>

      {modal?.type === "add" && (
        <ProductFormModal onClose={closeModal} onSubmit={handleAddProduct} />
      )}
    </main>
  );
}

export default App;
