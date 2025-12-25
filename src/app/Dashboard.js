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

      <main style={styles.content}>
        {activeTab === "products" && (
          <>
            <h3>Danh sách sản phẩm</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Tên sản phẩm</th>
                  <th style={styles.th}>Giá</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td style={styles.td}>{p.id}</td>
                    <td style={styles.td}>{p.name}</td>
                    <td style={styles.td}>{p.price.toLocaleString()} VND</td>
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
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Tên</th>
                  <th style={styles.th}>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td style={styles.td}>{u.id}</td>
                    <td style={styles.td}>{u.name}</td>
                    <td style={styles.td}>{u.email}</td>
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
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nav: {
    display: "flex",
    gap: "12px",
  },

  button: {
    padding: "8px 16px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "0.3s",
  },

  content: {
    padding: "24px",
    backgroundColor: "#ecf0f1",
    minHeight: "calc(100vh - 80px)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  th: {
    backgroundColor: "#34495e",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
  },
};

