import { useQuery } from "@tanstack/react-query";

export const getPoints = async () => {
  try {
    const response = await fetch("/api/points");
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const useGetPoints = () => {
  return useQuery({
    queryKey: ["points"],
    queryFn: getPoints,
  });
};
