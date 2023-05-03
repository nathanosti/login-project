import { IRegisterFormInput } from "@/components/RegisterForm";
import api from "../api";
import { User } from "@/Providers/store/types";

export default async function registerNewUser(newUserCredentials: IRegisterFormInput) {
  const { data } = await api.post<User>("/auth/signup", newUserCredentials);

  return data;
}
