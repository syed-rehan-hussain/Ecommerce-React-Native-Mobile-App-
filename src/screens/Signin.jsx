import { Image, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from '../assets/css/styles';
import CustomButton from '../components/CustomButton';
// import images from '../assets/images/';
import { Google, Facebook, } from '../components/svg';
import { SCREENS } from '../constants/Screens';

export default function Signin(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.bgimage} source={require('../assets/images/Logoabstract.png')} />
      <Text style={[styles.h1, styles.mb10]}>Log in</Text>
      <Text style={[styles.paragraph1, styles.aligncenter]}>Enter your email & password to continue.</Text>
      <View style={styles.form}>
            <Text style={[styles.label, styles.mb10]}>Email address</Text>
            <TextInput placeholder='Enter your email' style={[styles.txtfield, styles.mb20]} />

            <Text style={[styles.label, styles.mb10]}>Password</Text>
            <TextInput secureTextEntry placeholder='Enter your password' style={[styles.txtfield, styles.mb20]} />
            <CustomButton onPress={() => props.navigation.navigate(SCREENS.DRAWER_NAVIGATION)} title={"Sign in"} />
      </View>
      <View style={styles.svgbtn}>
        <View style={styles.iconrect}>
          <Google width={40} height={40} />
        </View>
        <View style={styles.iconrect}>
          <Facebook width={40} height={40} />
        </View>
      </View>
      <View style={styles.svgbtn}>
        <Text>Don’t have an account?</Text><Text style={styles.blue}> Sign up</Text>
      </View>
    </View>
  )
}

