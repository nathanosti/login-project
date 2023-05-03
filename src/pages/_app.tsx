import Providers from "@/Providers";
import { GlobalStyle } from "@/styles/globalStyles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <GlobalStyle />
      <Component {...pageProps} />
    </Providers>
  );
}
