import { Outlet } from "react-router-dom";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>IMS</h2>
        <ul>
          <li><Link to="/dashboard/products">Products</Link></li>
          <li><Link to="/dashboard/suppliers">Suppliers</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <h2>Dashboard</h2>

        {/* 🔥 THIS IS WHERE PRODUCTS & SUPPLIERS APPEAR */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
