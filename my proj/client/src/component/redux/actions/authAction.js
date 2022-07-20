import axios from "axios";
import { FAIL, GET_CURRENT, LOGOUT, SIGNIN, SIGNUP } from "../types/authTypes";

export const signup = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/signUp", data);
    dispatch({ type: SIGNUP, payload: res.data });
    navigate("/profil");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const signin = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/login", data);
    dispatch({ type: SIGNIN, payload: res.data });
    if (res.data.user.role == "pharmacie") {
      return navigate("/dashbord/pharmacie");
    }
    if (res.data.user.role == "user") {
      return navigate("/profil");
    }
    if (res.data.user.role == "admin") {
      return navigate("/dashbord/admin");
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const getcurrent = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { authorisation: token },
  };
  try {
    const res = await axios.get("/auth/me", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const logout = () => {
  return { type: LOGOUT };
};
