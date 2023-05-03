import LoginForm from "@/components/LoginForm";
import withSession, { GetServerSidePropsWithSession } from "@/services/auth/withSession";
import Head from "next/head";
import styled from "styled-components";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginPageWrapper>
        <LoginForm />
      </LoginPageWrapper>
    </>
  );
}

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
