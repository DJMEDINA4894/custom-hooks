
export interface I_InitialState {
  id: number,
  todo: string,
  done: boolean
}

export interface I_InitialTodo {
  id: number,
  description: string,
  done: boolean
}

export interface I_ActionTodo {
  type: string,
  payLoad: I_InitialTodo
}

