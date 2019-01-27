import React from 'react';
import classes from '../spinner/spinner.css'


const Spinner=(props)=>{
    let Left=props.marginLeft;
    return <div className={classes.ldsRing} style={{marginLeft:Left}}><div></div><div></div><div></div><div></div></div>
}

export default Spinner;