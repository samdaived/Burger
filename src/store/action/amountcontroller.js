import * as actiontypes from './actiontypes';
import axios from '../../axios';

export const Handler =(id,ev)=>{return {type: actiontypes.HANDLER ,num:id, event:ev}}

const Firstfetching=(res)=>{
 return ({type:actiontypes.FirstFetching,response: res.data})
};
export const First_Data_order =()=>{
    return dispatch=>{
        axios.get('/ingredients.json').then((res)=>{
            return dispatch(Firstfetching(res))})}}
   
