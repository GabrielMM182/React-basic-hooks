import React from "react";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();


  interface Post {
    id: number;
    title: string;
    body: string;
  }

    const fetchPosts = async (): Promise<Post[]> => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return response.data;
    };

const FetchWithReactQueryAndAxios = () => {
    const { data, error, isLoading } = useQuery<Post[], Error>({
      queryKey: ["posts"], 
      queryFn: fetchPosts,
    });


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <ul>
        {data && data.slice(0,15).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};


export default FetchWithReactQueryAndAxios;
