import { useActions } from "@/hooks";
import { useForm } from "react-hook-form";
import { LoginFormWrapper } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const onSubmit = (data: IFormInput) => {
    login(data);
    router.push("/");
  };
  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="email"
        {...register("email", {
          required: { value: true, message: "E-Mail é obrigatórios" },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Adicione um e-mail válido",
          },
          maxLength: {
            value: 64,
            message: "Campo e-mail só pode ter no máximo 64 caracteres",
          },
        })}
      />
      {errors.email && <p>{`${errors.email?.message}`}</p>}
      <input
        type="password"
        placeholder="password"
        {...register("password", {
          required: { value: true, message: "Obrigatorio" },
        })}
      />
      {errors.password && <p>{`${errors.password?.message}`}</p>}
      <button type="submit">logar</button>

      <p>
        Não tem conta? <Link href="/register">Crie uma!</Link>
      </p>
    </LoginFormWrapper>
  );
}
