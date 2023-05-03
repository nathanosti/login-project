import { parseJwt } from "@/utils/parseJwt";
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next/types";
import { parseCookies, destroyCookie } from "nookies";

interface GetServerSidePropsContextWithSession
  extends GetServerSidePropsContext {
  session?: { accessToken: string; refreshToken: string } | null;
}

export type GetServerSidePropsWithSession<
  P extends { [key: string]: any } = { [key: string]: any }
> = (
  context: GetServerSidePropsContextWithSession
) => Promise<GetServerSidePropsResult<P>>;

export default function withSession(gssp: GetServerSidePropsWithSession) {
  return async (ctx: GetServerSidePropsContext) => {
    const { tokens } = parseCookies(ctx);
    if (!tokens) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }

    const session: { accessToken: string; refreshToken: string } = JSON.parse(
      tokens || ""
    );

    const parsedAccessToken = parseJwt(session.accessToken);
    console.log(parsedAccessToken);

    const tokenIsValid = parsedAccessToken.exp < Date.now();

    try {
      if (tokenIsValid) {
        const ctxWithSession = { ...ctx, session };

        return await gssp(ctxWithSession);
      }

      destroyCookie(ctx, "tokens");

      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    } catch (err) {
      console.log("withSession Error", { err });
    }
  };
}
