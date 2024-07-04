import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
const InputText = (params) => {
  return (
    <View>
        <View style={{flexDirection:'row', marginLeft:responsiveWidth(15), marginTop:responsiveHeight(7)}}>
    {params.IonIcon?<IonIcon name={params.icon?params.icon:null} color={'grey'} size={20}/>:null}
    {params.SimpleIcon?<SimpleIcon name={params.icon?params.icon:null} color={'grey'} size={20}/>:null}
     <Text style={{color:'grey', marginLeft:10}}>{params.FText?params.FText:null}</Text>
     </View>
     <TextInput secureTextEntry={params.secure?params.secure:null} placeholder={params.IText?params.IText:null} style={{borderBottomWidth:1, color:'black',  width:'70%',alignSelf:'center'}} placeholderTextColor={'grey'} />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({})