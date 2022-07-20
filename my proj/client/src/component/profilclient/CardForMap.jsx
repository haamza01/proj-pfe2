import React from "react";
import "../profilclient/productList.css";

function CardForMap({ el }) {
  return (
    <div >
    <div className="card"    >
      <div className="imgBx">
        <img src="" />
      </div>
      <div className="contentBx">
        <h2>{el.name}</h2>
        <div className="size">
        </div>
        <div className="color">
          <h3>{el.des}</h3>
        </div>
        <a href="#">Buy Now</a>
      </div>
    </div>
    
  </div>
  );
}

export default CardForMap;
