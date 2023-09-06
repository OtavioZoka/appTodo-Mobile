import { View,Text, FlatList, } from "react-native";
import { style } from "./style";
import { EmptyTodo } from "../emptyToDo";

interface IDashBoardToDo{
todoList:Array<string>
}

export const DashBoardTodo = ({todoList}:IDashBoardToDo) => {

  return (
    
    <View style={{padding:25,marginTop:50,justifyContent:'center',alignItems:'flex-start',}}>
      <View style={{width:'100%',alignContent:'space-between',flexDirection:"row" ,paddingBottom:30, borderBottomColor:'#333333', borderBottomWidth: 1}}>
         <View style={style.alignContext}><Text style={style.create}>Criadas</Text><Text style={style.count} >{todoList.length}</Text></View>        
         <View style={style.alignContext}><Text style={style.concluded}>Concluídas</Text><Text style={style.count}>0</Text></View>
      </View>
     
     <FlatList
     data={todoList}
     keyExtractor={(index)=>index.indexOf(index).toString()} 
     renderItem={({item})=>(
       <Text>{item}</Text>
     )} 
     ListEmptyComponent={<EmptyTodo/>}
     />
    </View>
  );
};

