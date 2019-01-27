import React from 'react';
import ListMaker from './listMaker';
import classes from './listmaker.css';
import Burger from '../burgerConstructor/burger';
import Aux from '../../Auxiliary/Auxs';
import Modal from '../modal/modal';
import Spinner from '../spinner/spinner';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Handler,First_Data_order } from '../../store/action/index';


class Controler extends React.Component{
    state={ Name:["Salad","Bacon","Cheese","Meat"] }
    
  componentWillMount(){
    if(+this.props.total<=4.2){
      return this.props.FirstFetch()
  }
  return null};

  MovetoForm=(whereTo)=>{this.props.history.push(whereTo)};
  render(){
   
      let Total = this.props.total;
      let Switcher;


      if(this.props.show){
        Switcher=<Aux><Burger  total={this.Total}/><div className={classes.border}  >
        <h4 className="mt-2 bg-light" style={{width:"20%",marginLeft:"40%"}}>The Price:${Total}</h4>
          {[0,1,2,3].map((i)=>{
            return <ListMaker ke={i} check={Total}  key={i} name={this.state.Name[i]} number={this.props.ing[i]} Func={this.props.AmountHandler}/>})}
              <Modal  Checkout={this.MovetoForm}/>
            </div></Aux>}

      else {Switcher=<Spinner/>}
      


      
    return (<Aux>
                <Route path="/" exact render={()=>Switcher}/>
            </Aux>) } } 






const mapStateToProps=state =>{
      return {ing: state.builder.ingredient, show: state.builder.ShowSpinner, total:state.builder.Total}};

const mapdispatchToProps=dispatch=>{
  return {AmountHandler: (id,ev)=>{dispatch(Handler(id,ev))},
          FirstFetch: ()=>dispatch(First_Data_order())}};

const newControler= connect(mapStateToProps,mapdispatchToProps)( Controler);
export default withRouter( newControler );