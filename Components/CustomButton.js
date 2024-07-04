import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = (params) => {
  return (
    <View>
     <TouchableOpacity style={{height:params.height?params.height:null, width:params.width?params.width:null, alignSelf:'center', backgroundColor:params.bgcolor?params.bgcolor:null, justifyContent:params.justify?params.justify:null, borderRadius:10,}}>
    <Text style={{color:params.color?params.color:null, fontSize:params.Tsize?params.Tsize:18, fontWeight:"900", textAlign:params.Talign?params.Talign:null, width:params.Twidth?params.Twidth:null}}>{params.Text?params.Text:null}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})