export const UpdateObject =(oldObj, nEwObj)=>{
    return {
        ...oldObj,
        ...nEwObj
    }
}