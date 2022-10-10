import { useState } from "react";
import { I_CounterApp } from "./I-CounterApp";

export const useCounter = ( objCounterApp:I_CounterApp ) => {

  const [ state, setState ] = useState<I_CounterApp>( objCounterApp );

  const handleSum = ( value:number = 1 ):void => {

     state.number1 = state.number1 + 1; 
     state.number2 = state.number2 + 2; 
    //  state.number3 = state.number3 + 3; 

    setState( { ...state } );

  }

  const handleSubs = ( value:number = 1 ):void => {

     state.number1 = state.number1 - 1; 
     state.number2 = state.number2 - 2; 
    //  state.number3 = state.number3 - 3; 

    setState( { ...state } );

  }

  const handleReset = ():void => {

    setState( objCounterApp );

  }


  return {
    objCounter: state,  
    handleSum, 
    handleSubs, 
    handleReset
   }

}
