// src/components/UserCard.jsx
import React from 'react';
import './UserCard.css';

const UserCard = ({ name, username, email, imageUrl }) => {
  return (
    <div className="user-card">
      <img src={imageUrl} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>@{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;

