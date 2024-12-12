import React, {memo, useEffect} from 'react';
import {StyleSheet, View, Image, Modal, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';
// import {
//   heightPercentageToDP as hp,
//   responsiveFontSize as rf,
//   widthPercentageToDP as wp,
// } from '../common/responsive_functions';
// import colors from '../constant/colors';
import { SCREENS } from '../constants/Screens';
import styles from '../assets/css/styles';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: SCREENS.SIGNUP}],
        }),
      );
    }, 3000);
  }, []);
  return (
    <View style={innerstyles.animationContainer}>
      {/* <Text style={styles.txt}>Shopping</Text>
      <Text style={styles.txt}>Now</Text> */}
      <Image style={styles.bgimage} source={require('../assets/images/Logoabstract.png')} />
      {/* <Image width={200} height={100} source={images.BackGround}/> */}
    </View>
  );
}

const innerstyles = StyleSheet.create({
  animationContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    // fontFamily: FONTFAMILY.Bold,
    // fontSize: rf(5),
    color: 'black',
  },
});