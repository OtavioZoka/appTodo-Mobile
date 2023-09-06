import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
 input: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical:"top",
    textAlign:'center',
    width: 26,
    height: 26,
    color: "#fff",
    fontSize: 18,
    borderWidth: 2,
    borderRadius:18,
    borderColor:"#fff",
  },
  form: {
    top:'21%',
    position:'absolute',
    right:0,
    left:0,
    flexDirection: "row",
    paddingHorizontal:20,
    backgroundColor:'transparent',
    alignItems:'center'    
  },
 
});
