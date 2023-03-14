import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Example Component</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
