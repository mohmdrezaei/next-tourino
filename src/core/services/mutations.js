import api from "src/core/configs/api";
import { useMutation } from "@tanstack/react-query";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const mutationFn = (data) => api.post("auth/check-otp", data);

  return useMutation({ mutationFn });
};
const useAddToBasket = () => {
  const mutationFn = ({tourId ,...data}) => api.put(`/basket/${tourId}`, data);

  return useMutation({ mutationFn });
};
const useFinalizeOrder = () => {
  const mutationFn = (data) =>  api.post("/order", data);

  return useMutation({ mutationFn });
};

export { useSendOtp, useCheckOtp,useAddToBasket ,useFinalizeOrder};
