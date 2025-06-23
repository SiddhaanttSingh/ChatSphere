import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from './api';
import { UserContext } from './UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login({ username, password });
      setUser(user);
      navigate('/chat');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <p>New user? <Link to="/signup">Sign up</Link></p>
    </form>
  );
};

export default Login;
