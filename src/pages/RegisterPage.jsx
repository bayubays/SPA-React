import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password and confirm password do not match!");
      return;
    }

    setLoading(true);

    const { error } = await register({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (!error) {
      alert("Registration successful! Please log in.");
      navigate("/login");
    } else {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Konfirmasi Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="accent" disabled={loading}>
          {loading ? "Loading..." : "Daftar"}
        </button>
      </form>
    </div>
  );
}
