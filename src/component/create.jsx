import React, { useState } from "react";
import axios from "axios";
import user from "./User";

export default function CreateUser() {
  const [userData, setUser] = useState(user);

  const handleInputChange = (field, value) => {
    setUser({ ...userData, [field]: value });
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(",");
    setUser({ ...userData, tags });
  };

  const handleSubmit = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT",
    };

    axios
      .post("https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users", userData, { headers })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Create A User.</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(userData).map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            style={{ margin: "1rem" }}
            onChange={(e) => handleInputChange(field, e.target.value)}
          />
        ))}
        <input
          type="text"
          placeholder="tags"
          style={{ margin: "1rem" }}
          onChange={handleTagsChange}
        />
        <button onClick={handleSubmit}>Submit.</button>
      </div>
    </div>
  );
}
