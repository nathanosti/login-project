import { IInitalState, IAction } from "./types";

import { TYPES } from "./actionTypes";

export const initialState: IInitalState = {
  user: null,
};

export function reducer(state: IInitalState, action: IAction) {
  switch (action.type) {
    case TYPES.UPDATE_AUTH_USER:
      return {
        ...state,
        user: {
          email: action.payload.email,
          name: action.payload.name,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
      };
    default:
      return state;
  }
}
