import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
   flex:1,
    flexDirection:'column',
    padding:40
  },
  clipboardPosition: {
    textAlign:'center',
    padding:15, 
  },
  firstText:{
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    textAlign: "center",
    color: "#808080",
  },
  secondText:{
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    textAlign: "center",
    color: "#808080",
  }

});
