import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>IMS</h2>
      <ul>
        <li>Dashboard</li>
        <li>Products</li>
        <li>Stock</li>
        <li>Suppliers</li>
        <li>Orders</li>
        <li>Reports</li>
        <li onClick={() => navigate("/")}>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
