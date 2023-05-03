import React, { ReactNode } from "react";

import { ContextProvider } from "./store";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/theme";
import { CookiesProvider } from "react-cookie";

interface IProps {
  children?: ReactNode;
}

export default function Providers(props: IProps) {
  const { children } = props;

  return (
    <CookiesProvider>
      <ContextProvider>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </ContextProvider>
    </CookiesProvider>
  );
}
