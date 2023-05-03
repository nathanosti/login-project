import { useStore } from "@/hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { user } = useStore();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>{user ? `Bem vindo, ${user?.name}` : "clique aqui para logar"}</h1>
      </main>
    </>
  );
}
