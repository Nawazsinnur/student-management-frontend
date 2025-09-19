import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/dashboard" style={{ marginRight: "15px", color: "white" }}>Dashboard</Link>
      <Link to="/students" style={{ marginRight: "15px", color: "white" }}>Students</Link>
      {token ? (
        <button onClick={handleLogout} style={{ background: "red", color: "white" }}>
          Logout
        </button>
      ) : (
        <Link to="/" style={{ color: "white" }}>Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
