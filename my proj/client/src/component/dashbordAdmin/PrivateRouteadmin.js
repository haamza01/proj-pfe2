import React, { useState } from "react";

import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcurrent } from "../redux/actions/authAction";

function PrivateRouteadmin({ children }) {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.authReducer.user);
  const hadndleEffect = async () => {
    try {
       dispatch(getcurrent()); 
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    hadndleEffect();
  }, [user]);
  return (
    <div>
      {loading ? (
        <h1>stana</h1>
      ) : token && user && user.role == "admin" ? (
        children
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}
export default PrivateRouteadmin;
