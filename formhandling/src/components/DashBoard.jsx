import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Inventory Dashboard</h2>

      <div className="cards">
        <div className="card">Products<br />120</div>
        <div className="card">Stock<br />5400</div>
        <div className="card">Suppliers<br />18</div>
        <div className="card">Orders<br />245</div>
      </div>
    </div>
  );
}

export default Dashboard;
