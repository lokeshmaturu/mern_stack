import "../styles/common.css";

function Products() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", quantity: 20 },
    { id: 2, name: "Mouse", category: "Accessories", quantity: 150 },
    { id: 3, name: "Keyboard", category: "Accessories", quantity: 80 }
  ];

  return (
    <div className="page">
      <h2>Products</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;