import LoginForm from "@/components/LoginForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </>
  );
}
