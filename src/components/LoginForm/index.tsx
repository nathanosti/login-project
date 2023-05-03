import { useActions } from "@/hooks";
import { useForm } from "react-hook-form";
import { LoginFormWrapper } from "./styles";
import Link from "next/link";

export interface IFormInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { login } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    login(data);
  };
  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="email"
        {...register("email", {
          required: { value: true, message: "Obrigatorio" },
        })}
      />
      <input
        type="password"
        placeholder="password"
        {...register("password", {
          required: { value: true, message: "Obrigatorio" },
        })}
      />
      <button type="submit">logar</button>

      <p>
        Não tem conta? <Link href="/register">Crie uma!</Link>
      </p>
    </LoginFormWrapper>
  );
}
