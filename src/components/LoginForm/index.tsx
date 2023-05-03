import { useActions } from "@/hooks";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
}
