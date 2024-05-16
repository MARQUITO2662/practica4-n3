// src/components/UserDetails.jsx
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h2>Detalles del Usuario</h2>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Nombre de Usuario:</strong> {user.username}</p>
      <p><strong>Correo Electrónico:</strong> {user.email}</p>
      {/* Agrega más detalles del usuario aquí, como dirección, empresa, etc. */}
    </div>
  );
};

export default UserDetails;
