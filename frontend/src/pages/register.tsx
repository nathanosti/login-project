import RegisterForm from "@/components/RegisterForm";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterPageWrapper>
        <LeftSessionWrapper>
          <p>Welcome. Start your journey now with us!</p>
        </LeftSessionWrapper>
        <RightSessionWrapper>
          <RegisterForm />
          <p>Já tem conta? <Link href='/login'>Entre nela!</Link></p>
        </RightSessionWrapper>
      </RegisterPageWrapper>
    </>
  );
}

const RegisterPageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSessionWrapper = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 80px;

  p {
    width: 45%;

    font-size: 4rem;
    font-weight: 300;
    line-height: 67.2px;

    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

const RightSessionWrapper = styled.div`
  width: 100%;
  height: 100%;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.white};
`;
