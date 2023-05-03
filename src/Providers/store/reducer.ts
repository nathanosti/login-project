import { IInitalState, IAction } from "./types";

import { TYPES } from "./actionTypes";
import registerNewUser from "@/services/auth/register";
import loginService from "@/services/auth/login";

export const initialState: IInitalState = {
  user: null,
};

export function reducer(state: IInitalState, action: IAction) {
  switch (action.type) {
    case TYPES.AUTH_USER:
      loginService(action.payload).then(res => {
        return {
          ...state,
          user: {
            _id: res._id,
            name: res.name
          }
        }
      })
      return { ...state };
    default:
      return state;
  }
}
