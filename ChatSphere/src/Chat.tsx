import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';
import { io, Socket } from 'socket.io-client';

interface ChatMessage {
  user: string;
  text: string;
}

const Chat = () => {
  const { user } = useContext(UserContext);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const s = io('http://localhost:4000');
    setSocket(s);
    s.on('chat message', (msg: ChatMessage) => {
      setMessages(prev => [...prev, msg]);
    });
    return () => { s.disconnect(); };
  }, []);

  const sendMessage = () => {
    if (socket && message && user) {
      const msg = { user: user.username, text: message };
      socket.emit('chat message', msg);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((m, i) => (
          <div key={i}><strong>{m.user}: </strong>{m.text}</div>
        ))}
      </div>
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
