import React, {Component} from 'react';
import instance from '../../axios';
import Spinner from './../../component/spinner/spinner';
import {connect} from 'react-redux';
import * as action from '../../store/action/index';
import {Redirect} from 'react-router-dom';
import Aux from '../../Auxiliary/Auxs';

class MyOrder extends Component {


componentDidMount (){
    this.props.OrderDataFromServer(this.props.idtoken,this.props.localId)}

 Delete=(id)=>{
    instance.delete("/order/"+Object.keys(this.props.listOforders)[id]+".json?auth=" +this.props.idtoken)};

render(){
        let listoforder=[];
        if(this.props.showSpinner){
            listoforder= <Spinner marginLeft={"45%"}/>;
        }else {
            let list=[];
             list=Object.values(this.props.listOforders);
            console.log(list);
            if(list&&list.length>0){
           list.map((el,index)=>{
               return  listoforder.push(<div key={index} className="btn-group mt-3 col-lg-6 offset-lg-1" >
               <button type="button" className="btn btn-primary">Salad: <span style={{border:"1px solid black"}}>{el.ingredient[0]}</span></button>
               <button type="button" className="btn btn-primary">Cheese: <span style={{border:"1px solid black"}}>{el.ingredient[2]}</span></button>
               <button type="button" className="btn btn-primary">Bacon: <span style={{border:"1px solid black"}}>{el.ingredient[1]}</span></button>
               <button type="button" className="btn btn-primary">Meat: <span style={{border:"1px solid black"}}>{el.ingredient[3]}</span></button>
               <button type="button" className="btn btn-primary">Price: <span style={{border:"1px solid black"}}>{el.price}</span></button>
               <button type="button" className="btn btn-danger" onClick={()=>this.Delete(index)}>Delete</button>
               </div>)})
             } else{  listoforder=<div className="alert-danger mb-3" role="alert"><h3 style={{color:"red",marginTop:"20%",textAlign:"center"}}>There is an error<br/>{this.props.message}</h3></div>}  }

         return <Aux>
               {!this.props.idtoken?<Redirect to="/"/>:null}
               {listoforder}
                </Aux> }}


const mapStateToProps=state=>{
    return {listOforders: state.Order.orders,
    showSpinner:state.Order.ShowSpinner ,
        idtoken:state.control.idtoken,
        message:state.Order.MyOrderPageMeessage,
        localId:state.control.localId} }


const mapDispatchToProps=dispatch=>{
        return{
            OrderDataFromServer: (id,ip)=>dispatch(action.OrderFromServer(id,ip))
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(MyOrder);