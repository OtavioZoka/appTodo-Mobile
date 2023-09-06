import { View, Text } from "react-native";
import EmptyClipBoard from "../../../assets/EmptyClipBoard";
import { style } from "./style";

export const EmptyTodo = () => {
  return (
    <View style={style.container}>
      <Text style={style.clipboardPosition}><EmptyClipBoard /></Text>
      <Text style={style.firstText} >Você ainda não tem tarefas cadastradas</Text>
      <Text style={style.secondText}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
};
