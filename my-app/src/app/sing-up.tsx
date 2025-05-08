import { View, StyleSheet, Text, TouchableOpacity,  } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function SingUp(){

    const { mensagem } = useLocalSearchParams()

    function back(){
        router.back()
    }
    return(
        <View style={styles.container}>
            <h1>Criar Conta</h1>
            <Text style={styles.title}>{mensagem}</Text>
        
            <TouchableOpacity onPress={back}>
            <Text>Voltar</Text>

            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
        


    },
    title: {
        fontSize: 22,
        fontWeight:  "bold",
        color:"black",

    }, 
    
    
    
})