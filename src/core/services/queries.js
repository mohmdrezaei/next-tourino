import { useQuery } from "@tanstack/react-query";
import api from "@/configs/api";


const useGetBasket = (page) => {
  const queryFn = () => api.get("/basket");
  const { data, error, isLoading, isPending } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, error, isLoading, isPending };
};

export { useGetProducts };
