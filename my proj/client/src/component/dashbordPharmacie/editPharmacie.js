import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Editmedicaton } from '../redux/actions/medicationAction';


const EditPharmacie = () => {
    const   editOne = useSelector(state=>state.MedicationReducer.oneMedication)
    const [name, setName] = useState(editOne && editOne.name);
  const [description, setDescription] = useState(editOne && editOne.description);
  const [prise, setPrise] = useState(editOne && editOne.price);
  const [disponible, setdisponible] = useState(editOne && editOne.disponible);
  const dispatch = useDispatch ();

    
  return (
    <div>
        <h1>hi pharmacie</h1>
      <br />

      {/* <h3>{editOne.name}</h3> */}
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
      
      <button onClick={()=>dispatch(Editmedicaton(editOne._id,{name,description,price:prise , disponible}))} >EDIT MEDICATION</button> 
    </div>
  )
}

export default EditPharmacie