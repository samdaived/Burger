import * as actiontypes from '../action/actiontypes';
import instance from '../../axios';


export const OrderToServer =(ing,price,id)=>{
    let post={
        userId:id,
        ingredient:ing, price: price ,info: {
        name:'Sam',
        email:"sam@sam.sam" }};
        
            return post}


    const OrderStart=()=>{
    return dispatch=>dispatch({type:actiontypes.DATA_ORDER_START})
    }


const SuccesOrder=(ordersData)=>{
    return dispatch=>dispatch({type:actiontypes.DATA_ORDER_SUCCESS, orders:ordersData})
}

const FailOrder=(err)=>{
    return dispatch=>dispatch({type:actiontypes.DATA_ORDER_FAIL, error:err})
}



export const PostOrderToserver=(ing,price,idtoken,id)=> {
    
        const post= OrderToServer(ing,price,id);
        console.log(post,idtoken);
    instance.post("/order.json?auth="+idtoken,post).then(res=>console.log(post,res))}

    export const OrderFromServer=(idtoken,id)=>{
        return dispatch=>{
            dispatch(OrderStart());
            const url="?auth="+idtoken+'&orderBy="userId"&equalTo="'+id+'"';
           return instance.get("/order.json"+url).then((res)=>{ return res.data?dispatch(SuccesOrder(res.data)):res
        }).catch(er=>dispatch(FailOrder( er.response.data.error)))
    }}