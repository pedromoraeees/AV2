import * as React from 'react';
import { Text, View, StyleSheet,Image, TextInput, TouchableOpacity, onPress } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';




export default function App() {
  return (
    <View style={styles.container}>

 
   <Text style={styles.paragraph}>
     Home
      </Text>

     <TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text style={styles.login}>Proxima tela</Text>
      </TouchableOpacity>
 
  <br></br>
<br></br>



