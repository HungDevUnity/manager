import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("products");

  const products = [
    { id: 1, name: "Sản phẩm A", price: 100000 },
    { id: 2, name: "Sản phẩm B", price: 200000 },
    { id: 3, name: "Sản phẩm C", price: 300000 },
  ];

  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com" },
    { id: 2, name: "Trần Văn B", email: "b@gmail.com" },
    { id: 3, name: "Lê Văn C", email: "c@gmail.com" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <h2>Dashboard</h2>

        <nav style={styles.nav}>
          <button
            onClick={() => setActiveTab("products")}
            style={styles.button}
          >
            Quản lý sản phẩm
          </button>

          <button
            onClick={() => setActiveTab("users")}
            style={styles.button}
          >
            Quản lý users
          </button>

          <button
            onClick={handleLogout}
            style={{ ...styles.button, backgroundColor: "#e74c3c" }}
          >
            Logout
          </button>
        </nav>
      </header>

      {/* Content */}
      <main style={styles.content}>
        {activeTab === "products" && (
          <>
            <h3>Danh sách sản phẩm</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price.toLocaleString()} VND</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeTab === "users" && (
          <>
            <h3>Danh sách users</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;

const styles = {
  header: {
    padding: "16px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#3498db",
    color: "#fff",
  },
  content: {
    padding: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
};
