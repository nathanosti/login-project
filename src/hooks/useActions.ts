import { useStore } from "./";
import { TYPES } from "../Providers/store";
import { IFormInput } from "@/components/LoginForm";
import { IRegisterFormInput } from "@/components/RegisterForm";
import registerNewUser from "@/services/auth/register";

export function useActions() {
  const { dispatch, user } = useStore();

  function login(userCredentials: IFormInput) {
    dispatch({ type: TYPES.AUTH_USER, payload: userCredentials });
  }

  async function register(newUserCredentials: IRegisterFormInput) {
    const user = await registerNewUser(newUserCredentials);
    console.log({ user });
  }

  return {
    user,
    login,
    register,
  };
}
