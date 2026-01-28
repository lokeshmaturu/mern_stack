import "../styles/common.css";

function Suppliers() {
  const suppliers = [
    { id: 1, name: "ABC Traders", contact: "9876543210" },
    { id: 2, name: "Global Supplies", contact: "9123456780" },
    { id: 3, name: "Tech Distributors", contact: "9988776655" }
  ];

  return (
    <div className="page">
      <h2>Suppliers</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier Name</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Suppliers;