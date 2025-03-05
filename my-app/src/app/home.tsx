
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/button';
import { router, useRouter, useLocalSearchParams } from 'expo-router';
import { Header } from '../components/header/Header';

export default function Home(){
    const { name } = useLocalSearchParams();

    
    return(
        <View style={styles.container}>
        <Header title='Header'></Header>
         <Text style= {styles.title}>Olá, {name}</Text>
            
            <Button title="Voltar" onPress={() => router.back()}/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        gap: 16,
    },
    title: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",
    }
})
