import { combineReducers } from "redux";
import authReducer from "./authReducer";
import MedicationReducer from "./medicationReducer";
import PharmacieReducer from "./pharmacieReducer"
const rootReducer = combineReducers({ authReducer, MedicationReducer,PharmacieReducer });
export default rootReducer;
