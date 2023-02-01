import * as types from "./actionTypes";
const initialState = {
  Message: "",
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        Message: payload,
        isLoggedIn: true,
      };
    case types.SIGNIN_FAILURE:
      return {
        ...state,
        Message: payload,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        Message: payload,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        Message: payload,
      };

    default:
      return state;
  }
};

export { reducer };