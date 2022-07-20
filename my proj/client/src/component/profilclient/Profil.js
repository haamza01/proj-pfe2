import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcurrent, logout } from "../redux/actions/authAction";
import { get_medication } from "../redux/actions/medicationAction";
import Recharche from "./barerecherche/Recharche";

import CardForMap from "./CardForMap";
import Topbar from "./navbar/Topbar";
import Sidebar from "./slidebare/Sidebar";

function Profil() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(getcurrent());
  }, []);
  useEffect(() => {
    dispatch(get_medication());
  }, []);
  
  const medication = useSelector((state) => state.MedicationReducer.medication);
  return (
    <div>
      <Recharche  user={user}  />
      <Sidebar      />
      <Topbar/>
      
      <div className="container1">
        
      {medication.map(el=> <CardForMap  el={el} key={el.id} />)}
        </div>
      
     

      {/* <h1>{user.email}</h1>
      <br />
      <button onClick={() => dispatch(logout())}>logout</button>
      <h1>{medication.map((medication)=><div>

        <h2>{medication.name}</h2>
        
      </div>)}</h1> */}
      
    </div>
  );
}

export default Profil;
