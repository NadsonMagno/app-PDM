import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React, { useState } from "react"


import { Button } from "../components/button"
import { Input } from "../components/input"

import { router, Link } from "expo-router"





export default function Index(){

    const [name, setName] = useState("")

    function handleNavigate(){
        router.navigate("/home")
    }

    function signUp(){
        router.navigate("/sing-up")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            

            <Input  onChangeText={setName}/>


            <Button title="Continuar" onPress={handleNavigate}/>

        
                <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={styles.title}>Criar Conta</Text>

                </TouchableOpacity>

                <Link href={{pathname: "/sing-up", params: {mensagem: "Seu fudido"}}}>Envia parâmetro</Link>

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
        color: "red",
        fontSize: 24,
        fontWeight:  "bold",

    }, 
    button: {
        backgroundColor: "#000",
        borderRadius: 10,
        paddingHorizontal: 32,
        paddingVertical: 10,

    },
    label:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
    }
    
})