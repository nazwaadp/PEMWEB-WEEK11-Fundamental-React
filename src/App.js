import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { initialProducts } from "./data/products";
import "./App.css";

function App() {
  return (
    <main className="app">
      <Header />
      {/* Sementara menampilkan satu kartu dulu */}
      <ProductCard product={initialProducts[0]} />
    </main>
  );
}

export default App;
