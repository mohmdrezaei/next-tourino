import api from "@/configs/api";
import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";


const useGetUser = () => {
    const queryFn = () => api.get("/user/profile");
    const queryKey = ["user"];
    const { data, error, isPending } = useQuery({
      queryKey,
      queryFn,
    });
  
    return { data, error, isPending };
  };

  const useGetUserTours = () => {
    const queryFn = () => api.get("/user/tours");
    const queryKey = ["myTours"];
    const { data, error, isPending } = useQuery({
      queryKey,
      queryFn,
    });
  
    return { data, error, isPending };
  };

  const useGetTransactions = () => {
    const queryFn = () => api.get("/user/transactions");
    const queryKey = ["transactions"];
    const { data, error, isPending } = useQuery({
      queryKey,
      queryFn,
    });
  
    return { data, error, isPending };
  };

  const useGetTours = (query) => {
    const url = "tour?" + QueryString.stringify(query);
  
    const queryFn = () => api.get(url);
    const queryKey = ["tour", query];
  
    return useQuery({ queryFn, queryKey, enabled: false });
  };
  export {useGetUser , useGetUserTours , useGetTransactions , useGetTours}