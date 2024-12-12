import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SCREENS } from '../constants/Screens'
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Wishlist from '../screens/Wishlist'
import Account from '../screens/Account'
import DrawerNavigation from './Drawer'
import Signup from '../screens/Signup'
import Signin from '../screens/Signin'
import SplashScreen from '../components/SplashScreen'
import ProductDetails from '../screens/ProductDetails'
import ProductInCategory from '../screens/ProductInCategory'
const Stack = createStackNavigator()


export default function MainNavigation() {
    return (
        <Stack.Navigator initialRouteName={SCREENS.SplashScreen} screenOptions={{ headerShown: false}}>
            <Stack.Screen name={SCREENS.SplashScreen} component={SplashScreen} />
            <Stack.Screen name={SCREENS.SIGNUP} component={Signup} />
            <Stack.Screen name={SCREENS.SIGNIN} component={Signin} />
            <Stack.Screen name={SCREENS.DRAWER_NAVIGATION} component={DrawerNavigation} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Home} component={Home} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Cart} component={Cart} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Wishlist} component={Wishlist} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Account} component={Account} options={{ headerShown: true }} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.ProductDetails} component={ProductDetails} />
            <Stack.Screen name={SCREENS.Product_In_Category} component={ProductInCategory} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})