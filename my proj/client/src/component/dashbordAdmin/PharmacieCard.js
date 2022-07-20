import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getoneph, pharmaciedelete } from "../redux/actions/pharmacieAction";
import "./pharmaciecard.css"

function PharmacieCard({ el }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  
  return (
    <div>
      <div className="card">
              <div className="imgBx">
                <img src="" />
              </div>
              <div className="contentBx1">
                <h2>{el.name}</h2>
                <div className="size"></div>
                <div className="color">
                  <h3>hi</h3>
                </div>
                <Link to="/addmedication/add"  > 
                <a href="#">EDIT</a>
                </Link>
                
                
                <br />
                <div className="ppp">
                <a  href="#">DELETE</a>
                </div>
                
                
                
              </div>
              
            </div>
      
      {/* <h1> {pharmacie.username} </h1>
      <Link to="/editadmin">
        {" "}
        <button
          onClick={() => {
            dispatch(getoneph(pharmacie._id));
          }}
        >
          edit
        </button>{" "}
      </Link>
      <button   onClick={()=>{dispatch(pharmaciedelete(pharmacie._id))}}   >delete</button> */}
    </div>
  );
}

export default PharmacieCard;
