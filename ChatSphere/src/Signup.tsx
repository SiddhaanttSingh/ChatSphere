import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from './api';
import { UserContext } from './UserContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await signup({ username, password });
      setUser(user);
      navigate('/chat');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
};

export default Signup;
