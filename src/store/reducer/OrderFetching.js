import * as actiontypes from '../action/actiontypes';
import {UpdateObject} from '../utility';

const initialState = {
    orders:[],
    ShowSpinner:false,
    MyOrderPageMeessage:"Sorry, you  have no order yet "
    }

const Reducer =(state=initialState, action)=>{
    switch(action.type){
        case actiontypes.DATA_ORDER_SUCCESS:return UpdateObject(state,{orders:action.orders,ShowSpinner:false,MyOrderPageMeessage:""});
        case actiontypes.DATA_ORDER_FAIL:return UpdateObject(state,{ShowSpinner:false,MyOrderPageMeessage:action.error});
        case actiontypes.DATA_ORDER_START:return UpdateObject(state,{ShowSpinner:true});
        
        
        default:return state ;

    }}


export default Reducer;