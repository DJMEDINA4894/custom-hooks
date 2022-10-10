import { useState } from "react";
import { I_Form } from "../helpers/I-FormApp";

export const useForm = ( objForm:I_Form ) =>{

  const [ formState, setFormState ] = useState<I_Form>( objForm )

  const onInputChange = ( { target }:React.ChangeEvent<HTMLInputElement> ) => {

    setFormState( {
      ...formState,
      [ target.name ]: target.value
    }  );

  }

  const handlerReset = () => {

    setFormState( objForm );

  }

  return {
    formState,
    onInputChange,
    handlerReset
  }

}
