import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getcurrent } from "../../redux/actions/authAction";
import {
  addMedication,
  getone,
  get_medication,
} from "../../redux/actions/medicationAction";
import "../AddMedication/addmedication.css";

function AddMedication() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [prise, setPrise] = useState("");
  const [disponible, setdisponible] = useState("");

  const dispatch = useDispatch();
  const handlAdd = () => {
    // e.preventDefault();
    dispatch(addMedication({ name, description, price: prise }));
  };
  const navigate=useNavigate()

  useEffect(() => {
    dispatch(get_medication());
  }, []);
  useEffect(() => {
    dispatch(getone());
  });
  useEffect(() => {
    dispatch(getcurrent());
  }, []);

  const medication = useSelector((state) => state.MedicationReducer.medication);

  const edit = useSelector((state) => state.MedicationReducer.edit);
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div className="containeradd">
      <div className="contact-boxadd">
        <div className="left" />
        <div className="right">
          <h2>ADD MEDICATION</h2>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="field"
            placeholder="Name Medication"
          />
          <input  onChange={(e) => setPrise(e.target.value)}
        value={setPrise} type="number" className="field" placeholder="Price Medication" />
          <input
           onChange={(e) => setdisponible(e.target.value)}
           value={disponible}
            type="text"
            className="field"
            placeholder="Disponible Medication"
          />
          <textarea
           onChange={(e) => setDescription(e.target.value)}
           value={description}
            placeholder="Description Medication"
            className="field"
            defaultValue={""}
          />
          <button onClick={()=>{handlAdd(); navigate('/dashbord/pharmacie')}} className="btnadd">ADD MEDICATION</button>
        </div>
      </div>
    </div>
  );
}

export default AddMedication;
