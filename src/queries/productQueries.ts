import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  stock: number;
  image: string;
  description: string;
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

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`/api/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
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

export const useGetProductById = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
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

export interface MainProduct {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const getMainProducts = async (): Promise<MainProduct[]> => {
  try {
    const response = await fetch("/api/main");
    if (!response.ok) {
      throw new Error("Failed to fetch main products");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const useGetMainProducts = () => {
  return useQuery({
    queryKey: ["mainProducts"],
    queryFn: getMainProducts,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
    retry: 3,
  });
};
