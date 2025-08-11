import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios";

interface loginPayload {
  username: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: loginPayload) => {
      const { data } = await axiosInstance.post("/admin/auth/login", payload);
      return data;
    },
    onSuccess: async (data) => {
      toast.success(`Welcome, ${data.username}!`);

      await signIn("credentials", { ...data, redirect: false });

      console.log(signIn);

      router.push("/dashboard");
    },
  });
};
