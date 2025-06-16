import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const DataFetcher = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())  
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);
    //it will run only once when the component mounts
    

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
