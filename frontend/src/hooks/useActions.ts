import { useStore } from "./";
import { IFormInput } from "@/components/LoginForm";
import { IRegisterFormInput } from "@/components/RegisterForm";
import registerNewUser from "@/services/auth/register";
import loginService from "@/services/auth/login";
import { TYPES } from "@/Providers/store";

export function useActions() {
  const { user, dispatch } = useStore();

  async function login(userCredentials: IFormInput) {
    const authUser = await loginService(userCredentials);

    dispatch({ type: TYPES.UPDATE_AUTH_USER, payload: authUser });
  }

  async function register(newUserCredentials: IRegisterFormInput) {
    await registerNewUser(newUserCredentials);
  }

  return {
    user,
    login,
    register,
  };
}
