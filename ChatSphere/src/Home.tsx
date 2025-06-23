import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome to Chat Sphere</h2>
    <p><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></p>
  </div>
);

export default Home;
