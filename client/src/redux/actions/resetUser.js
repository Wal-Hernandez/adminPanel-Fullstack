import { RESET_USER } from "../types";

export const resetUser = () => {
  return function (dispatch) {
    return dispatch({
      type: RESET_USER,
    });
  };
};
