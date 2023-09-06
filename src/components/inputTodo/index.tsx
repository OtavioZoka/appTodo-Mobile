import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { ToDo } from "../../hooks/toDo";

interface ITodoInput{
  placeholder:string,
  labelButton:string,
  textTodo?:string,
  createTextToDos:(e:string)=>void,
  addTodoInList: (e:string)=>void,  
}

export const TodoInput = ({placeholder,labelButton,textTodo,createTextToDos,addTodoInList}:ITodoInput) => {

  return (
  
      <View style={style.form}>
      <TextInput
          style={style.input}
          placeholder={placeholder}
          onChangeText={(e)=>createTextToDos(e)}
          placeholderTextColor="#6b6b6b"
          value={textTodo}
        />

        <TouchableOpacity
          style={style.button}
          onPress={()=>textTodo && addTodoInList(textTodo)}
        >
          <Text style={style.buttonText}>{labelButton}</Text>
        </TouchableOpacity>
      </View>
   
  );
};
