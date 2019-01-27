import React from 'react';
import classes from './header.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthLogout} from '../../store/action/index';

function Header (props){ 
    let HideShow=[]; let hSo=[];
    if(props.SDcontrol){
        HideShow=[classes.lowhead, classes.show]
        hSo=[classes.dropdown, classes.show]
       
    }  else{
        HideShow=[classes.lowhead, classes.hide];
        hSo=[classes.dropdown, classes.hide]    }

    return ( <div className={classes.header}>
     
     <div className={hSo.join(" ")} onClick={props.listHandler}></div>
     
     <p className={classes.open} onClick={props.listHandler}> &#x2630;</p>


     <div  className={HideShow.join(" ")}> 


         <p className={classes.close} onClick={props.listHandler}> &#x26CC;</p>
       
        <div className={classes.Monoton}><NavLink activeClassName={classes.active} exact to="/">Builder</NavLink></div>
        
        <div className={classes.menuH}>
         
          {!props.idtoken?<div className={classes.menu} ><NavLink activeClassName={classes.active}  to="/login">Log in </NavLink></div>:null}
          <div className={classes.menu} ><NavLink activeClassName={classes.active} exact to="/">Builder</NavLink></div>
          {props.idtoken? <div className={classes.menu} ><NavLink activeClassName={classes.active}  to="/myorder">My orders</NavLink></div>:null}
          {props.idtoken?<div className={classes.menu} onClick={()=>props.logout()} ><NavLink to="/">Logout</NavLink></div>:null}
          
          </div>
       

     
        </div>
    </div>
)
}

const mapDipatchtoProps=dispatch=>{
    return {
        logout: ()=>dispatch(AuthLogout())
    }
}

export default connect(null,mapDipatchtoProps)(Header);