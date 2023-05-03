import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from './reducer';

import { IContextProviderProps, IContext } from './types';

export { TYPES } from './actionTypes';

export const Context = createContext<IContext>({ ...initialState, dispatch: () => {} });

export function ContextProvider(contextProviderProps: IContextProviderProps) {
  const { children } = contextProviderProps;

  const [state, dispatch] = useReducer(reducer, initialState);

  const value: IContext = { ...state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
