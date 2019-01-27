import React from 'react';



const ListMaker = (props)=>{

  
  let Dable;
  if(props.number===0){
      Dable="disabled"
     
        } else{
          Dable=""
  }

 


    return <div className="mt-0 mb-2">
  
      <div className="btn-group" role="group" aria-label="Basic example">
        <button disabled={Dable} onClick={()=>props.Func(props.ke,"-")}   type="button" className="btn btn-secondary">-</button>
        <button type="button" className="btn btn-light">{props.name}: {props.number}</button>
        <button onClick={()=>props.Func(props.ke,"+")}  type="button" className="btn btn-secondary">+</button>
      </div>
     </div>



}

export default ListMaker;