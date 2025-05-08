import { Slot, Stack } from "expo-router";
import { View } from "react-native";
export default function Layout(){
    return(
       
        <Stack screenOptions={{headerShown: true}}>

            <Stack.Screen name="index" options={{headerShown: true}}/>
            <Stack.Screen name="home" options={{headerShown: false}}/>
            <Stack.Screen name="sing-up" options={{headerShown: false}}/>

        </Stack>
        
    );
    
}