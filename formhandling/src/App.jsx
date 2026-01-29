import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Products from "./components/Products.jsx";
import Suppliers from "./components/Suppliers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="products" element={<Products />} />
          {/* <Route path="suppliers" element={<Suppliers />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
