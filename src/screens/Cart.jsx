import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../assets/css/styles'
import Header from '../components/Header'

export default function Cart(props) {
  return (
    <View style={styles.flex1}>
      <Header title={'Cart'} menu onPress={() => props.navigation.toggleDrawer()} />  
      <Text style={styles.h1} >Cart</Text>
    </View>
  )
}
