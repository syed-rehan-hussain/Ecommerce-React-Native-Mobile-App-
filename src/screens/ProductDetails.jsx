import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import styles from '../assets/css/styles';
import Header from '../components/Header';

export default function ProductDetails({ route }) {
    const { SelectedItem } = route.params;
  return (
    <View style={[styles.flex1, styles.bgwhite]}>
        <Header back productName={SelectedItem.title} />
        <Image style={styles.singleProductImage} source={{ uri: SelectedItem.image }} />
        <Text numberOfLines={1} style={styles.singeProductCategory}>{SelectedItem.category}</Text>
        <Text style={[styles.singleProductTitle]}>{SelectedItem.title}</Text>
        <Text style={styles.singleproductPrice}>Rs. {SelectedItem.price}</Text>
        <Text style={styles.singleProductdescription}>{SelectedItem.description}</Text>
    </View>
  )
}
