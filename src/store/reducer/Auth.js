import * as actiontypes from '../action/actiontypes';
import {UpdateObject} from '../utility';

const initialState={
    
    idtoken:null,
    error:null,
    success:null,
    showSpinner:false,
    localId:null
}


const Auth =(state=initialState,action) =>{
    switch(action.type){
        case actiontypes.AUTH_START:return UpdateObject(state, {showSpinner:true});
        case actiontypes.AUTH_SUCCESS:return UpdateObject(state, {showSpinner:false, success:"You are in!!",error:null,idtoken:action.idToken,localId:action.localId});
        case actiontypes.AUTH_FAIL:return UpdateObject(state, {showSpinner:false,success:null,error:action.error});
        case actiontypes.AUTH_LOGOUT:return UpdateObject(state, {showSpinner:false, success:null,error:"You are out!!",idtoken:null});
        default:return state
    }
    
}


export default Auth;