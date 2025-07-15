import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
    retry: 3,
  });
};

export const getBestProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/api/best");
    if (!response.ok) {
      throw new Error("Failed to fetch best products");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const useGetBestProducts = () => {
  return useQuery({
    queryKey: ["bestProducts"],
    queryFn: getBestProducts,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
    retry: 3,
  });
};
