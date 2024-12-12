import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomButton({title, btnstyle,txtstyle, onPress, icon, iconstyle}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.btn, btnstyle]}>
        <Icon name={icon} size={20} color="blue" style={[styles.socialicon, iconstyle]} />
        <Text style={[styles.txt, txtstyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#3B3551',
        borderRadius: 6,
        // width: '50%',
        height: 40,
        // width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        // borderWidth: 1, 
        // borderColor: '#ccc',
        // marginHorizontal: 'auto',
    },
    // btn: {
    //   // backgroundColor: 'blue',
    //   display: 'flex', 
    //   // marginBottom: 0, 
    //   // fontWeight: '400',
    //   // textAlign: 'center', 
    //   alignItems: 'center', 
    //   justifyContent: 'center', 
    //   borderWidth: 1, 
    //   borderColor: '#ccc',
    //   // paddingVertical: 6, 
    //   // paddingHorizontal: 12,
    //   // lineHeight: 20,
    //   borderRadius: 6,
    // },
    txt:{
        // textAlign: 'center',
        // marginVertical: 'auto',
        // marginHorizontal: 'auto',
        fontWeight: '600',
        color: 'white',
        fontSize: 18,
    },
    socialicon:{
      // width: 50,
      // backgroundColor: 'white',
        marginVertical: 'auto',
      // padding: 10,
      // paddingLeft: 10,
      // borderRadius: 100,
      // backgroundColor:'#ffffff',
      // borderWidth: 1, 
      // borderColor: 'blue', 
    }
})