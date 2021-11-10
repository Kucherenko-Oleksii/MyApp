import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import Inputs from './src/components/Inputs';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.view}>
        <Text style = {styles.text}>To do List</Text>
        <Inputs />
      </View>
      <StatusBar barStyle = 'dark-content' />
      <ScrollView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:
  {
    flex: 1,
    justifyContent: 'flex-start'
  },
  text:
  {
    fontSize: 30,

  }
});
