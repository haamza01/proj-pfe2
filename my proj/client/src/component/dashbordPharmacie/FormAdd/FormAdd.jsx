import React from "react";
import "../FormAdd/formadd.css";

function FormAdd() {
  return (
    <div>
      <div className="container500">
        <a className="button500" href="#popup">
          ADD MEDICATION
        </a>
        <div className="popup" id="popup">
          <div className="popup-inner">
            <div className="popup__photo">
              <img
                src="https://www.centrecountyrecycles.org/vertical/Sites/%7B19100380-CED0-47E2-8734-43A86A251C04%7D/uploads/Medication-Review.png"
                alt=""
              />
            </div>
            <div className="popup__text">
              <h1>ADD MEDICATION</h1>
              <h2>Name</h2>
              <div className="input-field">
                <i class="fa-solid fa-hexagon-plus"></i>

                <input type="text" placeholder="text" />
              </div>
              <h2>DESCRIPTION</h2>
              <div className="input-field">
                <i class="fa-solid fa-hexagon-plus"></i>
                <input type="text" placeholder="DESCRIPTION" />
              </div>
              <h2>PRICE</h2>
              <div className="input-field">
                <i />
                <input type="number" placeholder="PRICE" />
              </div>
              <h2>DISBPNIBLE</h2>

              <form method="post" encType="multipart/form-data">
                <label htmlFor="apply">
                  <input type="file" name id="apply" accept="image/*,.pdf" />
                  Get file
                </label>
              </form>

              <br />
              <input
                type="submit"
                className="btn solid"
                value="ADD MEDICATION"
              />
            </div>
            <a className="popup__close" href="#">
              X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAdd;
