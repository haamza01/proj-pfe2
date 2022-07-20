import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getcurrent } from "../redux/actions/authAction";

function PrivateRoutephar({ children }) {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(true)
  const user = useSelector((state) => state.authReducer.user);
  const hadndleEffect= async ()=>{
    try {
      await   dispatch(getcurrent());
      setLoading(false)
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
  hadndleEffect()
  }, [user]);
  return (
    <div>
      {   loading ? <h1>stana</h1> : (token && user && user.role == "pharmacie") ? children : <Navigate to="/" />}
    </div>
  );
}

export default PrivateRoutephar;
