import api from "src/core/configs/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.error("Error checking OTP:", error);
    },
  });
};
const useAddToBasket = () => {
  const mutationFn = ({ tourId, ...data }) =>
    api.put(`/basket/${tourId}`, data);

  return useMutation({ mutationFn });
};
const useFinalizeOrder = () => {
  const mutationFn = (data) => api.post("/order", data);

  return useMutation({ mutationFn });
};

const useUpdateEmail = () => {
  const queryClient = useQueryClient();
  const mutationFn = (email) => api.put("/user/profile", email);

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export {
  useSendOtp,
  useCheckOtp,
  useAddToBasket,
  useFinalizeOrder,
  useUpdateEmail,
};
