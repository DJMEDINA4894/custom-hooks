import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todReducer";
import { I_ActionTodo, I_InitialTodo } from "../helpers/I-UseReducer";

const initialTodo:I_InitialTodo[] = []

const init = ():I_InitialTodo[] => {
  return JSON.parse(localStorage.getItem('todos') || "") || [];
};

export const useTodos = () => {
  
  const [ todos, dispatchTodo ] = useReducer( todoReducer, initialTodo, init )
  
  const todosCount:number = todos.length;
  const pendingTodosCount:number = todos.filter( (todo) => !todo.done ).length;

  useEffect(() => {
    console.log(todos);
    localStorage.setItem( 'todos', JSON.stringify( todos ) );
  }, [todos]);


  const onNewTodo = ( newTodo:I_InitialTodo ) => {
    
    const actionTodo:I_ActionTodo = {
      type: 'add todo',
      payLoad: newTodo
    }

    dispatchTodo( actionTodo );

  }; 

  const onDeleteTodo = ( todo:I_InitialTodo) => {

    dispatchTodo({
      type: 'delete todo',
      payLoad: todo
    });

  }

  const onToggleTodo = ( todo:I_InitialTodo ) => {

    dispatchTodo({
      type: 'toggle todo',
      payLoad: todo
    });

  };
  
  return {
    todos,
    todosCount,
    pendingTodosCount,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo
  }
}
