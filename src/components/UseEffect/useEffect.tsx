import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectTest = () => {
  interface Post {
    id: number;
    title: string;
  }

  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <ul>
      {data.slice(0, 10).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};


export default UseEffectTest;