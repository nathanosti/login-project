import { IFormInput } from "@/components/LoginForm";
import api from "../api";
import { setCookie } from "nookies";
import { parseJwt } from "@/utils/parseJwt";

export default async function loginService(userCredentials: IFormInput) {
  const { data } = await api.post<{
    email: string;
    accessToken: string;
    refreshToken: string;
  }>("/auth/login", userCredentials);

  const parsedAccessTokenObj = parseJwt(data.accessToken);

  setCookie(
    null,
    "tokens",
    JSON.stringify({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    }),
    {
      maxAge: parsedAccessTokenObj.exp,
      sameSite: true,
    }
  );

  return data;
}