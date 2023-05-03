import { IFormInput } from "@/components/LoginForm";
import api from "../api";

export default async function loginService(userCredentials: IFormInput) {
  const { data } = await api.post("/auth/login", userCredentials);

  return data;
}
