import React, { useState }  from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { EditPharmacie } from '../redux/actions/pharmacieAction';
import "../dashbordAdmin/editadmin.css"



const EditAdmin = () => {
    const   editOne = useSelector(state=>state.PharmacieReducer.onePharmacie)
    const [name, setName] = useState(editOne && editOne.name);
  const [username, setusername] = useState(editOne && editOne.username);
  const [email, setemail] = useState(editOne && editOne.email);
  // const [password, setpassword] = useState();
  const dispatch = useDispatch ();

    
  return (
    <div>
      <div className="wrapper">
        <div className="title">
          EDIT FORM
        </div>
        <div className="form">
          <div className="inputfield">
            <label>UserName</label>
            <input type="text" className="input" />
          </div>  
          <div className="inputfield">
            <label>Name</label>
            <input type="text" className="input" />
          </div>  
          <div className="inputfield">
            <label>Email Address</label>
            <input type="text" className="input" />
          </div> 
          <div className="inputfield">
            <label>Phone Number</label>
            <input type="text" className="input" />
          </div> 
          <div className="inputfield terms">
            <label className="check">
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <p>Agreed to terms and conditions</p>
          </div> 
          <div className="inputfield">
            <input type="submit" defaultValue="Register" className="btn" />
          </div>
        </div>
      </div>
        {/* <h1>hi admin</h1>
      

      <h3>name</h3>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />
      <h3>username</h3>
      <input
        onChange={(e) => setusername(e.target.value)}
        value={username}
        type="text"
      />
    
      <h3>email</h3>
      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type="text"
      />
      <br />
      
      <button onClick={()=>dispatch(EditPharmacie(editOne._id,{name,username,email}))} >EDIT MEDICATION</button>  */}
    </div>
  )
}

export default EditAdmin