import { useState } from "react";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "admin" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("User registered successfully!");
    } catch (err) {
      alert("Error registering user");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <br />
        <input placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <br />
        <input type="password" placeholder="Password" value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <br />
        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
