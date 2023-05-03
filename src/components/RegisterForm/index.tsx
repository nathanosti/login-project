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
      <input
        type="text"
        placeholder="E-mail"
        {...register("email", {
          required: { value: true, message: "Obrigatorio" },
        })}
      />
      <input
        type="password"
        placeholder="Senha"
        {...register("password", {
          required: { value: true, message: "Obrigatorio" },
        })}
      />
      <button type="submit">Registrar</button>
    </Form>
  );
}
