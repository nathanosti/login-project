import React, { ReactNode } from 'react';

import { ContextProvider } from './store';

interface IProps {
  children?: ReactNode;
}

export default function Providers(props: IProps) {
  const { children } = props;

  return (
    <ContextProvider>
      {children}
    </ContextProvider>
  );
}
