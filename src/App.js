import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { initialProducts } from "./data/products";
import "./App.css";

function App() {
  const [products] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const keyword = search.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );

  return (
    <main className="app">
      <Header />

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
    </main>
  );
}

export default App;
