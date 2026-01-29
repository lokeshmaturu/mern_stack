import { Link, Outlet } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">IMS</h2>

        <nav>
          <Link to="/dashboard/products">📦 Products</Link>
          <Link to="/dashboard/suppliers">🚚 Suppliers</Link>
          <Link to="/">🚪 Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <h1>Dashboard</h1>

        {/* Pages will load here */}
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
