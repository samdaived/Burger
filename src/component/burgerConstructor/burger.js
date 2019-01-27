import React from 'react';
import classes from './burger.css';
import {connect} from 'react-redux';
import { Wave } from 'react-animated-text';
 


const burger = (props)=>{

        var meal=[];
        
          for(var num=0;props.ing[0]>num;num++){
             
              meal.push(<div key={Math.random()} className={classes.Salad}>&nbsp;</div>)
          }
          

          for( num=0;props.ing[1]>num;num++){
             
            meal.push(<div  key={Math.random()} className={classes.Bacon}>&nbsp;</div>)
        }
       
        for( num=0;props.ing[2]>num;num++){
             
            meal.push(<div key={Math.random()} className={classes.Cheese}>&nbsp;</div>)
        }
        
        for( num=0;props.ing[3]>num;num++){
             
            meal.push(<div key={Math.random()} className={classes.Meat}>&nbsp;</div>)
            
        }
        if(meal.length===0){
            meal.push(<h4 style={{color:"#800000", fontWeight:"bold"}} key={Math.random()}><Wave effectChange={.1} text="Please start adding the ingridients" /></h4>)
        }
        
        
         
     
        
        
   



    
    return (<div className={classes.Divburger}>
        
        <div className={classes.BreadTop} >&nbsp;</div>

        {meal}
        

        <div className={classes.BreadBottom}> &nbsp;</div>
    
    
        </div>)
}


const mapStatetoprops=state=>{
    return {
        ing:state.builder.ingredient
    }
}

const newburger=connect(mapStatetoprops)(burger)
export default newburger;