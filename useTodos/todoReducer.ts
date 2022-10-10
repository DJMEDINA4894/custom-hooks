import { I_ActionTodo, I_InitialTodo } from "./I-UseReducer";

export const todoReducer = ( initialState:I_InitialTodo[], action:I_ActionTodo ) => {

  switch( action.type ){
    case 'add todo':
      return [ ...initialState, action.payLoad ];
    case 'delete todo':
      return initialState.filter( (todo) => todo.id !== action.payLoad.id );
    case 'toggle todo':
      return initialState.map( todo => {
        if( todo.id === action.payLoad.id ){
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo;
      });
    default:
      return initialState;
  }

}
