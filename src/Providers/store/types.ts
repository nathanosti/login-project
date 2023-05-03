import { Dispatch, ReactNode } from "react";

export interface IContextProviderProps {
  children: ReactNode;
}

export interface User {
  _id?: string;
  name?: string;
  email: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface IInitalState {
  user: User | null;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IContext extends IInitalState {
  dispatch: Dispatch<IAction>;
}
