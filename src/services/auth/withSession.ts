import { User } from "@/Providers/store/types";
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next/types";

interface GetServerSidePropsContextWithSession
  extends GetServerSidePropsContext {
  session?: User | null;
}

export type GetServerSidePropsWithSession<
  P extends { [key: string]: any } = { [key: string]: any }
> = (
  context: GetServerSidePropsContextWithSession
) => Promise<GetServerSidePropsResult<P>>;

export default function withSession(gssp: GetServerSidePropsWithSession) {
  return async (ctx: GetServerSidePropsContext) => {
    const session = null
    
    try {
      if (!session) {
        const ctxWithSession = { ...ctx, session };

        return await gssp(ctxWithSession);
      }

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
