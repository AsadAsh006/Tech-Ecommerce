import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../../Components/CustomButton'

const Splash = () => {
  return (
    <View style={{flex:1, backgroundColor:'#5956E9', }}>
        <View style={{paddingVertical:20, }}>
      <Text style={{color:'white', fontSize :50, textAlign:'center', fontWeight:'bold'}}>Find your Gadget</Text>
      <Image source={require('../Images/Cir.png')} style={{height:430, width:350, alignSelf:'center'}}/>
    </View>
    <CustomButton height={50} width={'80%'} bgcolor={'white'} color={'#5956E9'} Text={'Get Started'} justify={'center'} Talign={'center'}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})