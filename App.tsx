import { StatusBar } from "expo-status-bar";
import { Home } from "./src/view/Home";
import {  useFonts,Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent  />
      <Home />
      
    </>
  );
}


