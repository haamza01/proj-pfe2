import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Recharche from "../dashbordAdmin/barerecherche/Recharche";
import Topbar from "../dashbordAdmin/navbar/Topbar";
import { getcurrent } from "../redux/actions/authAction";
import { get_medication } from "../redux/actions/medicationAction";
import { get_pharmacie } from "../redux/actions/pharmacieAction";

import PharmacieCard from "./PharmacieCard";


function DashbordAdmin() {
  const pharmacieone = useSelector(
    (state) => state.PharmacieReducer.onePharmacie
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_medication());
  }, []);
  const pharmacie = useSelector((state) => state.PharmacieReducer.pharmacie);
  useEffect(() => {
    dispatch(get_pharmacie());
  }, []);
  
  
  useEffect(() => {
    dispatch(getcurrent());
  }, []);
  
  const medication = useSelector((state) => state.MedicationReducer.medication);


  const edit=useSelector((state)=>state.MedicationReducer.edit)
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <Recharche   user={user}  />
      <Topbar/>
      {/* {pharmacie.map((pharmacie) => (
        <PharmacieCard pharmacie={pharmacie} />
      ))} */}
      <div className="container100">
        
        {pharmacie.map(el=> <PharmacieCard   el={el} key={el.id} />)}
          </div>



      
       
    </div>
  );
}

export default DashbordAdmin;
