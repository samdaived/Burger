import axios from 'axios';
import * as actiontypes from './actiontypes';


const AuthStart=()=>{
    return {
        type:actiontypes.AUTH_START
    }
};
const AuthSuccess=(token,id)=>{
    
    return {
        type:actiontypes.AUTH_SUCCESS,
        idToken:token,
        localId:id
    }
};
const AuthFail=(er)=>{
     return {
        type:actiontypes.AUTH_FAIL,
        error:er.message }};

export const AuthLogout=()=>{
    localStorage.removeItem("idtoken");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiredTime");
     return {
        type:actiontypes.AUTH_LOGOUT,
        }};

const logouttimer=(time)=>{
    return dispatch=>
    setTimeout(()=>dispatch(AuthLogout()),1000*time);
}




export const AuthSignUp=(email, password,type)=>{
    let url;
    type==="signup"?url="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDoU7u4Jpkx-T8afSWAa3vpsODoROnCGSE"
    :url="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDoU7u4Jpkx-T8afSWAa3vpsODoROnCGSE";
    const Data={email:email,password:password,returnSecureToken:true};
    return dispatch=>{
    dispatch(AuthStart());
   return axios.post(url,Data)

    .then((response)=>{
        
        localStorage.setItem("idtoken",response.data.idToken);
        localStorage.setItem("userId",response.data.localId);
        localStorage.setItem("expiredTime",response.data.expiresIn*1000+new Date().getTime());
        dispatch(logouttimer(response.data.expiresIn)) ;
        dispatch(AuthSuccess(response.data.idToken,response.data.localId))})
        
        .catch(err=>dispatch(AuthFail(err.response.data.error)))}}


    export const CheckIfuserCanStayIn=()=>{
        const token=localStorage.getItem("idtoken");
        const expireDate=localStorage.getItem("expiredTime");
        const userId=localStorage.getItem("userId");
        return dispatch=>{
            if(new Date()> new Date(expireDate)){return dispatch(AuthLogout())}
            else{ dispatch(logouttimer((expireDate-new Date().getTime())/1000));
                return dispatch(AuthSuccess(token,userId))

            }
        }
    }