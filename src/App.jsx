import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm) ||
    user.username.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app">
      <h1>User Cards</h1>
      <input
        type="text"
        placeholder="Buscar usuarios..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="user-cards-container">
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            imageUrl={`https://picsum.photos/seed/${user.id}/300/300`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
