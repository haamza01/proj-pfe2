import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletemedication, getone } from "../redux/actions/medicationAction";
import "./medicationcard.css";
function MedicationCard({ el }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const handlDelete = ()=>{
    dispatch(deletemedication(el._id))
  }

  return (
    <div>
      {user._id == el.pharmacyId._id ? (
        <>
          <div className="card00">
            <div className="imgBx00">
              <img src="" />
            </div>
            <div className="contentBx100">
              <h1>{el.name}</h1>
              <div className="size"></div>
              <div className="color00">
                <h2>{el.price}DT</h2>
              </div>
              <div className="color00">
              <h3>{el.description}</h3>
              </div>
              <Link to="/addmedication/add" >
                
                <button class="noselect">Glass</button>
                
              </Link>

              <br />
              <button class="noselect">Glass</button>

              {/* <div className="ppp">
                <button  onClick={()=> dispatch(getone(el._id))}  > <a  onClick={()=> dispatch(getone(el._id))} href="#">DELETE</a></button>
               
              </div> */}
            </div>
          </div>
        </>
      ) : null}
    </div>

    //   <div>
    //       {user._id==medication.pharmacyId._id ? <>
    //        <h2>{medication.name}</h2>
    //   <button
    //     onClick={() => dispatch(deletemedication(medication._id))}
    //   >
    //     delete
    //   </button>
    //     <Link   to="/editpharmacie" onClick={()=> dispatch(getone(medication._id))} >  <button   >edit</button></Link> </>: null}

    // </div>
  );
}

export default MedicationCard;
