import React, { useState } from 'react';
import axios from 'axios';

export default function SearchUser() {
  const [userID, setUserID] = useState('');

  const handleInputChange = (e) => {
    setUserID(e.target.value);
  };

  const handleSearchUser = () => {
    console.log("User ID is: " + userID);

    let headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT',
    };

    axios
      .get(`https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users/${userID}`, { headers })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Search a User Via ID.</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Enter User ID."
          style={{ margin: '1rem' }}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchUser}>Search and Print User Details on console.</button>
      </div>
    </div>
  );
}
