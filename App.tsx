import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './src/Assets/Navigation/Splash'
import Login from './src/Assets/Navigation/Login'
const App = () => {
  const Stack=createNativeStackNavigator()
  return (

      <NavigationContainer  >
      <Stack.Navigator screenOptions={{headerShown:false }} initialRouteName='Login'>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>
      </NavigationContainer>
  

  )
}

export default App

const styles = StyleSheet.create({})