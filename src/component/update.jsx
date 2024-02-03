import axios from 'axios';
import user from './User';
import { useState } from 'react';

export default function UpdateUser() {
  const [userData, setUser] = useState(user);
  const [id, setID] = useState('');

  const handleInputChange = (field, value) => {
    setUser({ ...userData, [field]: value });
  };

  const handleTagsChange = (e) => {
    let tags = e.target.value.split(',');
    setUser({ ...userData, tags });
  };

  const handleUpdateUser = () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT',
    };

    axios
      .patch(`https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users/${id}`, userData, { headers })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Update User.</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="id"
          style={{ margin: '1rem' }}
          onChange={(e) => setID(e.target.value)}
        />
        {Object.keys(userData).map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            style={{ margin: '1rem' }}
            onChange={(e) => handleInputChange(field, e.target.value)}
          />
        ))}
        <input
          type="text"
          placeholder="tags"
          style={{ margin: '1rem' }}
          onChange={handleTagsChange}
        />
        <button onClick={handleUpdateUser}>Update User.</button>
      </div>
    </div>
  );
}
