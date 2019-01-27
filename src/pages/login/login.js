import React ,{Component} from 'react';
import {AuthSignUp} from '../../store/action/index';
import {connect} from 'react-redux';
import Spinner from '../../component/spinner/spinner';
import Aux from '../../Auxiliary/Auxs';
import {Redirect} from 'react-router-dom';


class Login extends Component {

state={email:null,password:null};

ChangHandler=(ev,type)=>{
 type==="email"? this.setState({email:ev.target.value}):this.setState({password:ev.target.value});

}




    render(){
        let showHide=(<Aux><div style={{color:"white"}} className="form-group">
        <label >Email address</label>
        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" onChange={(ev)=>this.ChangHandler(ev,"email")} placeholder="Enter email"/>
       
      </div>
      <div className="form-group">
        <label style={{color:"white"}} >Password</label>
        <input type="password" className="form-control" id="InputPassword1" onChange={(ev)=>this.ChangHandler(ev,"pass")} placeholder="Password"/>
      </div>
      <div className="alert-danger mb-3" role="alert">{this.props.error}</div>
      <div className="alert-success mb-3" role="alert">{this.props.success}</div>
      <button type="button" className="btn btn-primary"  onClick={()=>this.props.signup(this.state.email,this.state.password,"signup")} >Sign up</button>
      <button type="button" className="btn ml-2 btn-primary"  onClick={()=>this.props.signup(this.state.email,this.state.password,"signin")}  >Log in</button></Aux>);
        if(this.props.showSpinner){
        showHide=<Spinner marginLeft={"45%"}/>}
        

        return (<form className="col-sm-6 offset-sm-3 mt-3 p-3 border">
                {this.props.idtoken?<Redirect to="/"/>:null}
               {showHide}
          </form>)
    }
}


const mapStateToProps=state=>{
    return{idtoken:state.control.idtoken,
            showSpinner:state.control.showSpinner,
            error:state.control.error,
        success:state.control.success}};

const mapDispatchtoPtops=dispatch=>{return {
    signup: (em,pass,typ)=>dispatch(AuthSignUp(em,pass,typ))
    
}}

        
export default connect(mapStateToProps, mapDispatchtoPtops)(Login); 