import api from "@/configs/api";
import { useQuery } from "@tanstack/react-query";


const useGetUser = () => {
    const queryFn = () => api.get("/user/profile");
    const queryKey = ["user"];
    const { data, error, isPending } = useQuery({
      queryKey,
      queryFn,
    });
  
    return { data, error, isPending };
  };

  export {useGetUser}