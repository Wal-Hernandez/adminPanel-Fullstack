import { PAGINATE_RESULTS } from "../types";

export const paginatedUsers = (users) => {
  return function (dispatch) {
    return dispatch({
      type: PAGINATE_RESULTS,
      payload: users,
    });
  };
};
