import api from "@/configs/api";
import { useMutation } from "@tanstack/react-query";

const useSendOtp = () => {
    const mutationFn = (data) => api.post("auth/send-otp", data);
  
    return useMutation({ mutationFn });
  };
  
  const useCheckOtp = () => {
    const mutationFn = (data) => api.post("auth/check-otp", data);
  
    return useMutation({ mutationFn });
  };

  export {useSendOtp , useCheckOtp}