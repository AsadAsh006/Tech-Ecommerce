import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputText from '../../../Components/InputText'
import CustomButton from '../../../Components/CustomButton'

const Login = () => {
  return (
  <SafeAreaView style={{flex:1, backgroundColor:'#5956E9', justifyContent:'center'}} >
  
      <Text style={{fontSize:60 , color:'white', fontWeight:'900',width:'70%', alignSelf:'center'}}>Welcome back</Text>
      <View style={{backgroundColor:'white', borderTopLeftRadius:25, borderTopRightRadius:25, flex:1, marginTop:40}}>
        <Text style={{color:'black', fontSize:17, alignSelf:'flex-start', margin:20}}>Login</Text>
        <InputText FText={'Email'} IonIcon={true} icon={'mail-outline'} IText={'Enter your Name'}/>
        <InputText FText={'Password'} SimpleIcon={true} icon={'lock'} IText={'Enter your Password'}/>
        <CustomButton Text={"Forgot passcode?"} color={'#5956E9'}  Tsize={16} justify={'flex-Start'}/>
    </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})