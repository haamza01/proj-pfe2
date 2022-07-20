import axios from "axios"
import { GETMEDICATION, GETONEMEDICATION } from "../types/medicationTypes"

export const get_medication=()=>async(dispatch)=>{

    try {
        const res=await axios.get('/medication')
        dispatch({type:GETMEDICATION, payload:res.data    })
    } catch (error) {
        console.log(error)
    }

}
export const addMedication=(newmedication)=> async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
      headers: { authorisation: token },
    };
    try {
        await axios.post('/medication/addmedication',newmedication,config)
dispatch(get_medication())
    } catch (error) {
        console.log(error)
        
    }
}
export const deletemedication =(id)=>async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
      headers: { authorisation: token },
    }
    try {
        await axios.delete(`/medication/deletemedication/${id}`,config)
        dispatch(get_medication())
    } catch (error) {
        console.log(error)
        
    }
}
export const Editmedicaton=(id,data)=>async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
      headers: { authorisation: token }}
    try {
        await axios.put(`/medication/updatemedication/${id}`,data,config)
        dispatch(get_medication())
    } catch (error) {
      console.log(error)  
    }
}
export const getone =(id)=>async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
      headers: { authorisation: token }}
    try {
      const res=  await axios.get(`/medication/${id}`, config)      
        dispatch({ type :GETONEMEDICATION , payload: res.data   })  
    } catch (error) {
        
        console.log(error)
    }
}