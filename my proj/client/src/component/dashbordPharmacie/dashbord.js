import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMedication,
  deletemedication,
  
  getone,
  get_medication,
} from "../redux/actions/medicationAction";
import Recharche from "./barerecherche/Recharche";
import Topbar from "./navbar/Topbar"
import MedicationCard from "./MedicationCard";
import { getcurrent } from "../redux/actions/authAction";
import FormAdd from "./FormAdd/FormAdd";
import AddMedication from "./AddMedication/AddMedication";
import { Route, Routes } from "react-router-dom";

function Dashbord() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [prise, setPrise] = useState("");
  const [disponible, setdisponible] = useState("");
  const dispatch = useDispatch();
  const handlAdd = (e) => {
    e.preventDefault();
    dispatch(addMedication({ name, description, price: prise }));
  };
  const handlDelete = ()=>{
    dispatch(deletemedication())
  }
  

  useEffect(() => {
    dispatch(get_medication());
  }, []);
  useEffect(()=>{
    dispatch(getone())
  })
  useEffect(() => {
    dispatch(getcurrent());
  }, []);
  
  const medication = useSelector((state) => state.MedicationReducer.medication);


  const edit=useSelector((state)=>state.MedicationReducer.edit)
  const user = useSelector((state) => state.authReducer.user);
  

 
  return (
    <div className="dash">
      {/* <AddMedication/> */}
      <Recharche   user={user}  />
      <Topbar />

      {/* <FormAdd/> */}
      {/* <h1>hi pharmacie</h1>
      <br />

      <h3>name</h3>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />
      <h3>descriptipn</h3>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
      />
      <h3>prise</h3>
      <input
        onChange={(e) => setPrise(e.target.value)}
        value={prise}
        type="number"
      />
      <h3>disponible</h3>
      <input
        onChange={(e) => setdisponible(e.target.value)}
        value={disponible}
        type="text"
      />
      <br />
      
      <button onClick={handlAdd}>ADD NEW MEDICATION</button>
      <br /> */}
      {/* <h1>hi pharmacie</h1>
      <br />

      <h3>name</h3>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />
      <h3>descriptipn</h3>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
      />
      <h3>prise</h3>
      <input
        onChange={(e) => setPrise(e.target.value)}
        value={prise}
        type="number"
      />
      <h3>disponible</h3>
      <input
        onChange={(e) => setdisponible(e.target.value)}
        value={disponible}
        type="text"
      />
      <br />
      
      <button onClick={handledit}>ADD NEW MEDICATION</button> */}
      
      <div className="container100">
        
        {medication.map(el=> <MedicationCard user={user}  el={el} key={el.id} />)}
          </div>
    
    </div>
  );
}

export default Dashbord;
