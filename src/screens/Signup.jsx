import { Image, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../assets/css/styles';
import CustomButton from '../components/CustomButton';
// import images from '../assets/images/';
import { Google, Facebook, } from '../components/svg';
import { SCREENS } from '../constants/Screens';
import { useNavigation } from '@react-navigation/native';

export default function Signup(props) {
  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [phone, SetPhone] = useState();
  const [password, SetPassword] = useState();
  const [submitdata, SetSubmitData] = useState(false);

  const submit = () => {
    SetSubmitData(true);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.bgimage} source={require('../assets/images/Logoabstract.png')} />
      <Text style={[styles.h1, styles.mb10]}>Create Account</Text>
      <Text style={[styles.paragraph1, styles.aligncenter, styles.mb10]}>Enter your name, email & password to continue.</Text>
      <View style={styles.form}>
            <Text style={[styles.label, styles.mb10]}>Your name</Text>
            <TextInput value={name} onChangeText={SetName} placeholder='Enter your name' style={[styles.txtfield, styles.mb20]} />

            <Text style={[styles.label, styles.mb10]}>Email address</Text>
            <TextInput value={email} onChangeText={SetEmail} placeholder='Enter your email' style={[styles.txtfield, styles.mb20]} />

            <Text style={[styles.label, styles.mb10]}>Phone</Text>
            <TextInput value={phone} onChangeText={SetPhone} keyboardType='phone-pad' placeholder='+923123456789' style={[styles.txtfield, styles.mb20]} />

            <Text style={[styles.label, styles.mb10]}>Password</Text>
            <TextInput value={password} onChangeText={SetPassword} secureTextEntry placeholder='Enter your password' style={[styles.txtfield, styles.mb20]} />
            <CustomButton title={"Sign up"} />
            {
                submitdata && (
                    <View>
                        <Text style={styles.txt}>Name: {name || '-'}</Text>
                        <Text style={styles.txt}>email: {email || '-'}</Text>
                        <Text style={styles.txt}>phone: {phone || '-'}</Text>
                    </View>
                )
            }
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
        <Text>Alreaady have an account?</Text><Text onPress={() => props.navigation.navigate(SCREENS.SIGNIN)} style={styles.blue}> Sign in</Text>
      </View>
    </View>
  )
}

