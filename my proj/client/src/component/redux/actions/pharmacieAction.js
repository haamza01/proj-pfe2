import axios from "axios";


import { GETONEPHARMACIE, GETPHARMACIE } from "../types/pharmacieTypes";
export const get_pharmacie = () => async (dispatch) => {
  try {
    const res = await axios.get("/pharmacie/all");
    
    dispatch({ type: GETPHARMACIE, payload: res.data });
    console.log(res.data)
  } catch (error) {
    console.log(error);
  }
};

export const pharmaciedelete = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { authorisation: token },
  };
  try {
    await axios.delete(`/pharmacie/${id}`, config);
    dispatch(get_pharmacie());
  } catch (error) {
    console.log(error);
  }
};
export const EditPharmacie = (id, data) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { authorisation: token },
  };
  try {
    await axios.put(`/pharmacie/${id}`, data, config);
    dispatch(get_pharmacie());
  } catch (error) {
    console.log(error);
  }
};
export const getoneph = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { authorisation: token },
  };
  try {
    const res = await axios.get(`/pharmacie/${id}`, config);
    dispatch({ type: GETONEPHARMACIE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

