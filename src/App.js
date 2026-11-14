import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { initialProducts } from "./data/products";
import "./App.css";

function App() {
  const [products] = useState(initialProducts);

  return (
    <main className="app">
      <Header />
      <ProductList products={products} />
    </main>
  );
}

export default App;
