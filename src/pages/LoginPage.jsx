import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, putAccessToken, getUserLogged } from '../utils/network-data';
import { AuthContext } from '../contexts/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error, data } = await login({ email, password });
    if (!error) {
      putAccessToken(data.accessToken);

      const { error: userError, data: user } = await getUserLogged();
      if (!userError) {
        setAuth({
          user,
          initializing: false,
        });
        navigate('/');
      } else {
        alert('Gagal mengambil data user.');
      }
    } else {
      alert('Login gagal. Periksa email dan password.');
    }

    setLoading(false);
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="accent"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
