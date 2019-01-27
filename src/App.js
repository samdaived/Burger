import React, { Component } from 'react';
import Header from './component/Navbar/Header';
import Myorder from './pages/myorder/myorder';
import {Route,  Switch, withRouter } from 'react-router-dom';  
import Aux from './Auxiliary/Auxs';
import Login from './pages/login/login';
import {connect} from 'react-redux';
import Builder from './pages/mainpage/builder';
import Checkout from './pages/checkout/checkout';
import classes from './app.css';
import {CheckIfuserCanStayIn} from './store/action/index';

class App extends Component {
state={SideDrower:false}
componentDidMount(){
  this.props.checkIfUserCanStayOn()
}

 listHandler=()=>{
   const opposit =!this.state.SideDrower; 
   this.setState({
    SideDrower:opposit
   })
  
 }


  render() {

return (<Aux><div className={classes.bg}></div>
            
      <Header idtoken={this.props.id}  listHandler={this.listHandler.bind(this)} SDcontrol={this.state.SideDrower}/>
     
       <Switch>
<Route path="/"  exact render={()=><Builder/>} />
        <Route path="/checkout"   render={()=><Checkout/>} />
         <Route path="/myorder" component={Myorder} /> 
           <Route path="/login"  component={Login} />
            <Route render={()=><h1 style={{textAlign:"center",color:"white", margin: "20px "}}>Sorry Not found</h1>}/>
            </Switch>
        
      </Aux>
       ); }}


const mapStatetoProps=state=>{
 return{ id:state.control.idtoken}
}
const mapDispatchtoProps=dispatch=>{
  return {
    checkIfUserCanStayOn: ()=>dispatch(CheckIfuserCanStayIn())
  }
}

const newApp=withRouter( connect(mapStatetoProps,mapDispatchtoProps)(App) );
export default  newApp;
