import React from 'react';
import { Link} from 'react-router-dom';

const Form =(props)=>{


return(
   <form style={{border: "3px solid grey", marginBottom:"20px" }} className="col-sm-8 col-lg-6 offset-sm-2 offset-lg-3" >
    <div className="form-row">
      <div className="form-group col-md-6">
        <label sma="inputEmail4">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
      </div>
      <div className="form-group col-md-6">
        <label sma="inputPassword4">Password</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
      </div>
    </div>
    <div className="form-group">
      <label sma="inputAddress">Address</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    
    <div className="form-row">
      <div className="form-group col-md-6">
        <label sma="inputCity">City</label>
        <input type="text" className="form-control" id="inputCity"/>
      </div>
      <div className="form-group col-md-4">
        <label sma="inputState">State</label>
        <select id="inputState" className="form-control">
          <option defaultValue>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="form-group col-md-2">
        <label >Zip</label>
        <input type="text" className="form-control" id="inputZip"/>
      </div>
    </div>
    
    <button  style={{ marginBottom:"20px" }} type="button" className="btn btn-primary" onClick={props.post}><Link to="/">Order</Link></button>
  </form>)
}

export default Form;