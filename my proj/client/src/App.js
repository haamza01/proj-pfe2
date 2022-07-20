import React  from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashbord from "./component/dashbordPharmacie/dashbord";
import DashbordAdmin from "./component/dashbordAdmin/dashbordAdmin";
import Login from "./component/login/login";
import PrivateRoute from "./component/profilclient/privateRoute";
import PrivateRouteadmin from "./component/dashbordAdmin/PrivateRouteadmin";
import PrivateRoutephar from "./component/dashbordPharmacie/PrivateRoutephar";
import Profil from "./component/profilclient/Profil";

import EditPharmacie from "./component/dashbordPharmacie/editPharmacie";
import EditAdmin from "./component/dashbordAdmin/EditAdmin";
import Home from './component/page home/Home';
import AddMedication from './component/dashbordPharmacie/AddMedication/AddMedication';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route  path='/'  element={<Home></Home>}   ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/profil"
          element={
            <PrivateRoute>
              <Profil></Profil>
            </PrivateRoute>
          }
        >
          {" "}
        </Route>
        <Route
          path="/dashbord/admin"
          element={
            <PrivateRouteadmin>
              <DashbordAdmin></DashbordAdmin>
            </PrivateRouteadmin>
          }
        ></Route>
        <Route
          path="/dashbord/pharmacie"
          element={
            <PrivateRoutephar>
              <Dashbord></Dashbord>
            </PrivateRoutephar>
          }
        ></Route>
                <Route  path="/addmedication/add"  element={<AddMedication/>}   ></Route>

        <Route path="/editpharmacie" element={<PrivateRoute> <EditPharmacie/></PrivateRoute>} />
        <Route path="/editadmin" element={<PrivateRoute><EditAdmin/></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
