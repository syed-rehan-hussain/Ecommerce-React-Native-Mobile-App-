import React, { memo } from 'react';
import { Animated, Modal, View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import { responsiveFontSize as rf, widthPercentageToDP as wp, heightPercentageToDP as hp } from '../common/responsive_functions';
// import colors from '../constant/colors';
import { SCREENS } from '../constants/Screens';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
// import NavigationHandler from './navigation_handler';
// import fontfamily from '../constant/fontfamily';

export default function DrawerScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <DrawerItems
        onPress={() => props.navigation.navigate(SCREENS.BOTTOM_TAB, { screen: SCREENS.DRAWER_SCREEN.Home })}
        name={'Home'}
        // Icon={Home}
      />

      {/* <DrawerItems
        onPress={() => props.navigation.navigate(SCREENS.DRAWER_SCREEN.Home)}
        name={'Home'}
      /> */}
      <DrawerItems
        onPress={() => props.navigation.navigate(SCREENS.BOTTOM_TAB, { screen: SCREENS.DRAWER_SCREEN.Cart })}
        name={'Cart'}
      />
      <DrawerItems
        onPress={() => props.navigation.navigate(SCREENS.BOTTOM_TAB, { screen: SCREENS.DRAWER_SCREEN.Wishlist })}
        name={'Wishlist'}
      />
      <DrawerItems
        onPress={() => props.navigation.navigate(SCREENS.BOTTOM_TAB, { screen: SCREENS.DRAWER_SCREEN.Account })}
        name={'Account'}
      />
     
    </ScrollView>
  );
}


const DrawerItems = memo(({ onPress, name, Icon }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.drawerItem}
      onPress={onPress}
    >
      <View style={styles.itemContainer}>
        {/* {Icon()} */}
        <Text style={styles.itemText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    // paddingHorizontal: wp(5),
    // paddingBottom: hp(5),
  },
  logoContainer: {
    alignSelf: 'center',
    // marginBottom: hp(5),
    // marginTop: hp(1)
  },
  drawerItem: {
    // marginTop: hp('3%'),
  },
  itemContainer: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    color: 'black',
    // marginStart: wp('2%'),
    // fontFamily: fontfamily.Medium
  },
});