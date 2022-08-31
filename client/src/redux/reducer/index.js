import {
  DELETE_USER,
  PUT_USER,
  GET_USERS,
  PAGINATE_RESULTS,
  LOGIN_USER,
  POST_USER,
  RESET_USER,
} from "../types";

const initialState = {
  allUsers: [],
  userLogged: [],
  newUser: [],
  showedUsers: [],
  paginatedResults: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
        paginatedResults:
          typeof action.payload === "string"
            ? action.payload
            : state.paginatedResults,
      };
    case PUT_USER:
      return {
        ...state,
        form: action.payload,
      };
    case POST_USER:
      return {
        ...state,
        newUser: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        form: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        userLogged: action.payload,
      };
    case PAGINATE_RESULTS:
      return {
        ...state,
        paginatedResults: action.payload,
      };
    case RESET_USER:
      return {
        ...state,
        newUser: [],
      };
    default:
      return state;
  }
}

export default rootReducer;
