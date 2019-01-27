import React from 'react';
import Aux from '../../Auxiliary/Auxs';
import './burger.css';
import {connect} from  'react-redux';
import { withRouter} from 'react-router-dom';




const Modal =(props)=>{

   return <Aux>{props.Authenticated?<button type="button" disabled={+props.total===4.2?"disabled":""} className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
   Order
 </button>:<button type="button" disabled={+props.total===4.2?"disabled":""} onClick={()=>props.Checkout("/login")} className="btn btn-primary btn-lg" >
   Sign in to Order
 </button>}



<div className="modal fade"  id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        
      </div>
      <div className="modal-body">
      <p>order your delecious Burger</p>
        <ul className="list-group list-group-flush">
                <li key={0} className="list-group-item">Salad: {props.ing[0]}</li>
                <li  key={1} className="list-group-item">Bacon: {props.ing[1]}</li>
                <li  key={2} className="list-group-item">Cheese: {props.ing[2]}</li>
                <li  key={3} className="list-group-item">Meat: {props.ing[3]}</li>



        </ul>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>props.Checkout("/checkout")}  data-dismiss="modal"  >Save changes</button>
      </div>
    </div>
  </div>
</div>

</Aux>
}

const mapStatetoprops=state=>{
  return {
      ing:state.builder.ingredient, total:state.builder.Total,Authenticated:state.control.idtoken
  }
}

const Sam= connect(mapStatetoprops)(Modal);
export default withRouter(Sam);










