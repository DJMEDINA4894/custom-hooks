import { useState, useEffect } from 'react';
import { I_BreakingBad, I_ObjCustomHook } from '../helpers/I-MultipleCustomHooks';

export const useFetch = ( objEmptyBreakingBad:I_BreakingBad[], url:string ) => {

  const objCustomHook:I_ObjCustomHook = {
      data: objEmptyBreakingBad,
      isLoading: true,
      hasError: null
  }

  const [state, setState] = useState<I_ObjCustomHook>( objCustomHook );

  const getData = async () => {

    setState( {
      ...state,
      isLoading: true
    } );

    const resp = await fetch(url);
    const data:I_BreakingBad[] = await resp.json();

    //Por si la data esta vacia
    (
      data.length === 0
        ?
          setState( {
            data: objEmptyBreakingBad,
            isLoading: false,
            hasError: true
          } )
        :
          setState( {
            data,
            isLoading: false,
            hasError: null
          } )
    )

    

  }

  useEffect( () => {
    getData();
  }, [ url ] )

  return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError
  }

}
