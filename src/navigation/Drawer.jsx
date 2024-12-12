import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SCREENS } from '../constants/Screens';
import BottomTab from './BottomTab';
import DrawerScreen from './DrawerScreen';
import Account from '../screens/Account';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Wishlist from '../screens/Wishlist';


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
  <Drawer.Navigator  screenOptions={{
    headerShown: false,
    drawerType: 'slide',
  }}
  drawerContent={props => <DrawerScreen {...props} />}
  >
    <Drawer.Screen name={SCREENS.BOTTOM_TAB} component={BottomTab}/>
    {/* <Drawer.Screen name={SCREENS.BOTTOM_SCREEN.Home} component={Home}/>
    <Drawer.Screen name={SCREENS.BOTTOM_SCREEN.Cart} component={Cart}/>
    <Drawer.Screen name={SCREENS.BOTTOM_SCREEN.Wishlist} component={Wishlist}/>
    <Drawer.Screen name={SCREENS.BOTTOM_SCREEN.Account} component={Account}/> */}
  </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})