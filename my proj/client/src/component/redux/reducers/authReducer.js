import { FAIL, GET_CURRENT, LOGOUT, SIGNIN, SIGNUP } from "../types/authTypes";

const initialStore = {
  user: {},
  auth: false,
  errors: [],
};
const authReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SIGNUP:
    case SIGNIN:
      localStorage.setItem("token", action.payload.token);
      return { ...state, user: action.payload.user, auth: true };
    case FAIL:
      return { ...state, errors: action.payload, user: null, auth: false };
    case GET_CURRENT:
      return { ...state, user: action.payload, auth: true };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, auth: false, user: null };

    //   localStorage.setItem("token",action.payload.token)
    //   return {...state,user : action.payload.user,auth:true }

    default:
      return state;
  }
};
export default authReducer;
