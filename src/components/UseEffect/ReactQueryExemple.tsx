import React from "react";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();


  interface Post {
    id: number;
    nome: string;
    descricao: string;
  }

    const fetchPosts = async (): Promise<Post[]> => {
      const response = await axios.get("http://localhost:3000/produtos");
      console.log(typeof response.data); // Deve ser "object"
      console.log(response);
      return response.data;
    };

const FetchWithReactQueryAndAxios = () => {
    const { data, error, isLoading } = useQuery<Post[], Error>({
      queryKey: ["posts"], 
      queryFn: fetchPosts,
      initialData: [], // garante que a data iniciallmente é vazia podendo ser falta de tal forma data && data.slice(0, 15)
    });


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <ul>
        {data.slice(0,15).map((post: any) => (
          <li key={post.id}>{post.nome}</li>
        ))}
      </ul>
    </div>
  );
};


export default FetchWithReactQueryAndAxios;
