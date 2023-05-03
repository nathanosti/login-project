import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterForm />
    </>
  );
}
