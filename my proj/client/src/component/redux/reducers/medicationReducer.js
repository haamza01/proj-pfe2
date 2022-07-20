import { GETMEDICATION, GETONEMEDICATION } from "../types/medicationTypes";

const initialStore={
    medication:[],
    editmedication:null,
    oneMedication:null
}
const MedicationReducer=(state = initialStore,{type,payload})=>{
    switch (type) {
        case GETMEDICATION:
            
            return {...state, medication:payload.medication }
            
        case GETONEMEDICATION :
            return {...state, oneMedication:payload.foundmedication}
        default:
            return state;
    }
    
}
export default MedicationReducer