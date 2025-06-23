const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

const users = [{ username: 'demo', password: 'demo' }];

app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const exists = users.find(u => u.username === username);
  if (exists) {
    return res.status(400).json({ error: 'User exists' });
  }
  users.push({ username, password });
  res.json({ username });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
