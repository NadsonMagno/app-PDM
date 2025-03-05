import {View, Text, StyleSheet} from "react-native"
import React, { useState } from "react"

import { Button } from "../components/button"
import { Input } from "../components/input"

import { router } from "expo-router"





export default function Index(){

    const [name, setName] = useState("")

    function handleNavigate(){
        router.navigate("/home", { state: { name } })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            

            <Input  onChangeText={setName}/>


            <Button title="Continuar" onPress={handleNavigate}/>

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

    }
})