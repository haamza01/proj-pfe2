import React from "react";
import "../barerecherche/recherche.css";
import img from "../image/face-1.png"
import img1 from "../image/logo.png"

function Recharche({user}) {
  return (
    <div     >
    <nav className="siiide">
      <div className="sidebar-top">
        <span className="shrink-btn">
          <i className="bx bx-chevron-left" />
        </span>
        <img src={img1} className="logo" alt="" />
        <h1 className="hide">MyFarmacie.</h1>
      </div>
      <div className="admin-user tooltip-element" data-tooltip={1}>
          <div className="admin-profile hide">
            <img src={img} alt="" />
            <div className="admin-info">
              <h1>{user.username}</h1>
              <h4>{user.role}</h4>
            </div>
          </div>
          <a href="#" className="log-out">
            <i className="bx bx-log-out" />
          </a>
        </div>
        <div className="tooltip">
          {/* <span className="show">John Doe</span> */}
          <span>Logout</span>
        </div>
      {/* <div className="search">
        <i className="bx bx-search" />
        <input type="text" className="hide" placeholder="Quick Search ..." />
      </div> */}
      <div className="sidebar-links">
        <ul>
          {/* <div className="active-tab" /> */}
          
          <h1 >NAME :</h1>
          
          <h2 > {user.username} </h2>
          <br />
         
          <h1 >EMAIL:</h1>
          
          <h2> {user.email} </h2>
          <br />
          
          
           
          <h1 >NUMBER :</h1>
          
          <h2> {user.number} </h2>
          <br />
          
          
          {/* <div className="tooltip">
            <span >Dashboard</span>
            <span>Projects</span>
            <span>Messages</span>
            <span>Analytics</span>
          </div> */}
        </ul>
        {/* <h4 className="hide">Shortcuts</h4>
        <ul>
          <li className="tooltip-element" data-tooltip={0}>
            <a href="#" data-active={4}>
              <div className="icon">
                <i className="bx bx-notepad" />
                <i className="bx bxs-notepad" />
              </div>
              <span className="link hide">Tasks</span>
            </a>
          </li>
          <li className="tooltip-element" data-tooltip={1}>
            <a href="#" data-active={5}>
              <div className="icon">
                <i className="bx bx-help-circle" />
                <i className="bx bxs-help-circle" />
              </div>
              <span className="link hide">Help</span>
            </a>
          </li>
          <li className="tooltip-element" data-tooltip={2}>
            <a href="#" data-active={6}>
              <div className="icon">
                <i className="bx bx-cog" />
                <i className="bx bxs-cog" />
              </div>
              <span className="link hide">Settings</span>
            </a>
          </li>
          <div className="tooltip">
            <span className="show">Tasks</span>
            <span>Help</span>
            <span>Settings</span>
          </div>
        </ul> */}
      </div>
      <div className="sidebar-footer">
        <a href="#" className="account tooltip-element" data-tooltip={0}>
          <i className="bx bx-user" />
        </a>
        
      </div>
      <div className="buttons">
        <div className="container2">
          <a href="https://twitter.com/masuwa1018" className="btn12 effect04" data-sm-link-text="CLICK" target="_blank"><span>EDIT PROFIL</span></a>
        </div>
      </div>
      
    </nav>
    
  </div>
  );
}

export default Recharche;
