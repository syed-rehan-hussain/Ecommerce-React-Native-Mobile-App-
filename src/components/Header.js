import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Entypo from 'react-native-vector-icons/Entypo';
// import colors from '../constant/colors';
import Icon, { Icons } from './Icons';
// import {
//   heightPercentageToDP as hp,
//   responsiveFontSize as rf,
//   widthPercentageToDP as wp,
// } from '../common/responsive_functions';
import { useNavigation } from '@react-navigation/native';
import { NavigationSvg } from './svg';

export default function Header({menu, onPress, title, back}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
        {menu && (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={onPress ? 0.8 : 1}
            style={styles.backButton}>
            <NavigationSvg width={24} height={17} />
          </TouchableOpacity>
        )}
        {back && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name={'left'}
              type={Icons.AntDesign}
              size={28}
              color={'Black'}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.icon}>-</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   height: '8%',
  //   // backgroundColor: 'white',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   height: 60,
  //   paddingHorizontal: 15,
  //   backgroundColor: '#f8f8f8',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ddd',
  // },
  // row: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   // justifyContent: 'space-between',
  // },
  // header:{
  //   paddingHorizontal: 10,
  // },
  // title: {
  //   // fontSize: 22,
  //   // color: 'black',
  //   // textAlign: 'center',
  //   // justifyContent:'center',
  //   // fontWeight: '700'
  //   flex: 3,
  //   textAlign: 'center',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   color: '#333',
  // },
  // backButton: {
  //   flex: 1,
  //   justifyContent: 'flex-start',
  // },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    // flex: 1,
    // justifyContent: 'flex-start',
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  title: {
    flex: 12,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: -35,
  },
  icon:{
    justifyContent: 'flex-end',
  }
});