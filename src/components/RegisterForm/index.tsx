import { useRouter } from "next/router";
import { useActions } from "@/hooks";
import { useForm } from "react-hook-form";
import { Form } from "./styles";

export interface IRegisterFormInput {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const { register: registerUser } = useActions();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInput>();

  const onSubmit = async (data: IRegisterFormInput) => {
    console.log("entrei aqui");
    await registerUser(data);
    router.push("/login");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nome"
        {...register("name", {
          required: { value: true, message: "Obrigatorio" },
        })}
      />
      {errors.name && <p>{`${errors.name?.message}`}</p>}
      <input
        type="text"
        placeholder="E-mail"
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
        placeholder="Senha"
        {...register("password", {
          required: { value: true, message: "Obrigatorio" },
        })}
      />
      {errors.password && <p>{`${errors.password?.message}`}</p>}
      <button type="submit">Registrar</button>
    </Form>
  );
}
