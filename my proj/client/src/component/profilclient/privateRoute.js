import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authReducer from '../redux/reducers/authReducer'

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.authReducer.auth);
  return <div>{token ? children : <Navigate to="/" />}</div>;
}

export default PrivateRoute;
