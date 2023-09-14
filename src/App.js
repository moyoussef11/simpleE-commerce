import { Route, Routes } from "react-router-dom";
import Home from "./Website/Home";
import Products from "./components/Products";
import Details from "./components/Details";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
