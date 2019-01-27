import * as actiontypes from '../action/actiontypes';

const initialState = {
 ingredient:[0,0,0,0],
 Total:4.2,
 ShowSpinner:false};

const CalculateTotal=(ar)=>{let cal=ar[0]*.2+ar[1]*.4+ar[2]*.5+ar[3]*.7+4.2
            let calfi=cal-cal%1+"."+ Math.floor((cal%1*100)); 
            return calfi};

const Reducer =(state=initialState, action)=>{

    switch(action.type){
        case actiontypes.HANDLER:
        let total;
            if(action.event==="+"){
                const newState = [...state.ingredient];
                newState[action.num]= newState[action.num]+1;
                total=CalculateTotal(newState);
                return{
                    ...state,
                    ingredient:newState, Total:total}}
            if(action.event==="-"){
                
                const newState = [...state.ingredient];
                newState[action.num]= newState[action.num]-1;
                total=CalculateTotal(newState);
                return{
                    ...state,
                    ingredient:newState,Total:total}};
                    break;
        case actiontypes.FirstFetching:
            const FirstIngr=[action.response.Salad,action.response.Bacon,action.response.Cheese,action.response.Meat];
            return {
                ...state,
                ingredient:FirstIngr,
                ShowSpinner:true
            };
            
            default:return state }}

export default Reducer;