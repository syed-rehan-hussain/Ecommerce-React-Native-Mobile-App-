import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../constants/Api'
import styles from '../assets/css/styles';
import Header from '../components/Header';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function ProductInCategory({ route }, props) {
    const [products, setProducts] = useState()
    const { SelectedCategory } = route.params;
//   const [categories, setCategories] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getProductsInCategory()
  }, [])

  const getProductsInCategory = () => {
    const URL = Api.BASEURL + Api.GET_PRODUCT_in_CATEGORY + SelectedCategory;

    fetch(URL).then((response) => {
      if(!response.ok){ 
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((data) => {
        setProducts(data);
        setLoading(false);
    }).catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
    })
  }

  const renderItems = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate(SCREENS.BOTTOM_SCREEN.ProductDetails, { SelectedItem: item })
        }} style={styles.productContainer}>
            <Image style={styles.productImage} source={{ uri: item.image }} />
            <Text numberOfLines={1} style={styles.productCategory}>{item.category}</Text>
            <Text numberOfLines={1} style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>Rs. {item.price}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.flex1}>

      <Header back title={SelectedCategory} />
      {/* <Text style={styles.h1} >Home</Text> */}
      {/* <CustomButton title={"goto"} onPress={() => navigation.navigate(SCREENS.BOTTOM_SCREEN.Account)}/> */}
      {loading ? (
          // Show loading spinner while data is being fetched
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : ( 
        <ScrollView>
          <View>
            <Text style={[styles.h1, styles.padding10]}>Exclusive Offer</Text>
            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()} // Use product ID as key
                renderItem={renderItems} 
                scrollEnabled= {false }
            />
          </View>
        </ScrollView>
      )}
    </View>
  )
}
