import React, { useState } from 'react';
import axios from 'axios';

export default function DeleteUser() {
  const [uid, setUid] = useState('');

  const handleInputChange = (e) => {
    setUid(e.target.value);
  };

  const handleDeleteUser = () => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT',
    };

    axios
      .delete(`https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users/${uid}`, { headers })
      .then((res) => {
        console.log(`User with UID ${uid} deleted successfully.`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Delete User.</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Enter UID of the User Here."
          style={{ margin: '2rem' }}
          onChange={handleInputChange}
        />
        <button onClick={handleDeleteUser}>Delete User.</button>
      </div>
    </div>
  );
}
