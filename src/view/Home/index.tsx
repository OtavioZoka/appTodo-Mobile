import { DashBoardTodo } from "../../components/dashboardTodo";
import { TodoInput } from "../../components/inputTodo";
import { TitleToDo } from "../../components/titleToDo";
import { style } from "./style";
import { View } from "react-native";
import { ToDo } from "../../hooks/toDo";

export const Home = () => {
  const { addTextTodoInList,createTextTodo,textToDoList,textToDos } = ToDo();
  
  const handleClickAddToDo = ()=>{
    console.log(textToDos,textToDoList)
   
  }   
   handleClickAddToDo()
  return (
    
    <View style={style.container}>
      <View style={style.formContainer}>
        <View style={style.containerUp}>
          <TitleToDo/>
        </View>
        <View style={style.containerDown} >
        <DashBoardTodo
        todoList={textToDoList}
        />
        </View>
    
        <TodoInput
          labelButton="+"
          placeholder="Adicione uma nova tarefa"
          createTextToDos={(e) => createTextTodo(e)}
          addTodoInList={() => textToDos  &&  addTextTodoInList(textToDos)}
          textTodo={textToDos}

        />
      </View>
    </View>
  );
};
