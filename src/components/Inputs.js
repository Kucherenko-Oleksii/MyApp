import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function Inputs(){
    return(
        <SafeAreaView style = {styles.container}>
            <TextInput 
                style={styles.Input}
                placeholder = "Enter your plans"

            
            
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Input:
    {
       //justifyContent: 'flex-start',
      // alignItems: 'flex-start',
       height: 40,
       width: 100,
       margin: 12,
       borderWidth: 1,
       padding: 10

    }

});