const API_URL = 'http://localhost:4000';

export interface Credentials {
  username: string;
  password: string;
}

export const signup = async (cred: Credentials) => {
  const res = await fetch(`${API_URL}/api/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cred)
  });
  if (!res.ok) throw new Error('Signup failed');
  return (await res.json()) as { username: string };
};

export const login = async (cred: Credentials) => {
  const res = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cred)
  });
  if (!res.ok) throw new Error('Login failed');
  return (await res.json()) as { username: string };
};
