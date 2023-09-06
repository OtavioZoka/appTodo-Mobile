import { useState ,useEffect } from "react";

export const ToDo =()=>{
const [textToDoList, setTodos] = useState<Array<string>>([]);
const [textToDos, setTodo] = useState<string>();

  const createTextTodo = (task: string) => {
    setTodo(task);
  };
  const addTextTodoInList = (todo: string) => {
    setTodos((toDos) => [...toDos, todo]);
    setTodo("");

  };
useEffect(()=>{ })
  return {
    textToDos,
    textToDoList,
    createTextTodo,
    addTextTodoInList
  }
}
