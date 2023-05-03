import { useStore } from "@/hooks";
import withSession, {
  GetServerSidePropsWithSession,
} from "@/services/auth/withSession";
import Head from "next/head";

import styled from "styled-components";

export default function Home() {
  const { user } = useStore();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeWrapper>
        <h1>Bem vindo, {user?.email}</h1>
      </HomeWrapper>
    </>
  );
}

export const getServerSideProps: GetServerSidePropsWithSession | any =
  withSession(async (ctx) => {
    return {
      props: {},
    };
  });

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;
