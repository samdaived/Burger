import React, {Component} from 'react';
import Burger from '../../component/burgerConstructor/burger';
import {withRouter} from 'react-router-dom';
import Aux from '../../Auxiliary/Auxs';
import Form from '../../component/form/form';
import { Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/action';

class Checkitout extends Component {

Backhandle(){this.props.history.push("/")}
   
continuehandle(){ this.props.history.push(this.props.match.url +"/information" ) }

render(){
    const input=<Aux><input style={{margin:"15px"}} className="btn btn-secondary" onClick={this.Backhandle.bind(this)} type="button" value="Back"/>
    <input style={{margin:"15px"}} className="btn btn-primary" onClick={this.continuehandle.bind(this)}  type="submit" value="Sure, go"></input></Aux>;
 return <div style={{textAlign:"center"}}>
            {!this.props.idtoken?<Redirect to="/"/>:null}
            <h1 style={{color:"white",margin:"30px", marginTop:"60px"}}>Buy you tasty Burger!!!!</h1>
            <Route path="/checkout" exact component={Burger} />
            <Route path="/checkout" exact component={()=>input} />
            <Route path="/checkout/information" component={()=><Form post={()=>this.props.PostOrder(this.props.ing,this.props.total,this.props.idtoken,this.props.userId)}/>} />
         </div>
    }}

const mapStatetoprops=state=>{ return {ing:state.builder.ingredient,
    total:state.builder.Total,
     idtoken:state.control.idtoken,
    userId:state.control.localId }};
const mapDispatchToProps=()=>{
    return {PostOrder: (ingr,price,id,ip)=>{actions.PostOrderToserver(ingr,price,id,ip)}}}


const MyConnectedComponent =connect(mapStatetoprops,mapDispatchToProps)(Checkitout);
export default withRouter(MyConnectedComponent);