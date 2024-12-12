import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { SCREENS } from '../constants/Screens';
import Home from '../screens/Home';
import { AccountSvg, CartSvg, HomeSvg, WishlistSvg } from '../components/svg';
import Cart from '../screens/Cart';
import wishlist from '../screens/Wishlist';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ 
            tabBarActiveTintColor: '#53B175', 
            tabBarInactiveTintColor: '#181725',
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#fff', 
                position: 'absolute',
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15,
                height: 70, 
                shadowColor: '#000', 
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.2,
                shadowRadius: 3.84,
                elevation: 5, 
                justifyContent: 'center',
                paddingTop: 15, 
            },
            tabBarHideOnKeyboard: true,
            headerShown: false,
        }}>
        <Tab.Screen 
            name={SCREENS.BOTTOM_SCREEN.Home} 
            component={Home}  
            options={{ 
                tabBarIcon: ({color}) => (
                    <HomeSvg width={24} height={24} color={color} />
                )
            }}
        />

        <Tab.Screen 
            name={SCREENS.BOTTOM_SCREEN.Cart} 
            component={Cart}  
            options={{ 
                tabBarIcon: ({color}) => (
                    <CartSvg width={24} height={24} color={color} />
                )
            }}
        />

        <Tab.Screen 
            name={SCREENS.BOTTOM_SCREEN.Wishlist} 
            component={wishlist}  
            options={{ 
                tabBarIcon: ({color}) => (
                    <WishlistSvg width={24} height={24} color={color} />
                )
            }}
        />

        <Tab.Screen 
            name={SCREENS.BOTTOM_SCREEN.Account} 
            component={Account}  
            options={{
                tabBarIcon: ({color}) => (
                    <AccountSvg width={24} height={24} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#fff', // Tab bar background color
        position: 'absolute', // Makes the tab bar floating
        borderTopLeftRadius: 25, // Rounded corner for top-left
        borderTopRightRadius: 25, // Rounded corner for top-right
        height: 70, // Adjust tab bar height
        shadowColor: '#000', // Shadow for a floating effect
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5, // For Android shadow
    },
})