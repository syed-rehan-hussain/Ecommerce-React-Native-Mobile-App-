import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../assets/css/styles'
import CustomButton from '../components/CustomButton'
import { SCREENS } from '../constants/Screens'
import Header from '../components/Header'
import Api from '../constants/Api'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Icon from '../components/Icons'
import { ElectronicsSvg, JewellerySvg, MenclothSvg, WomenclothSvg } from '../components/svg'


export default function Home(props) {
  const [products, setProducts] = useState()
  const [categories, setCategories] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  const getProducts = () => {
    const URL = Api.BASEURL + Api.GET_PRODUCTS;

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

  const getCategories = () => {
    const URL = Api.BASEURL + Api.GET_CATEGORIES;

    fetch(URL).then((response) => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((data) => {
        setCategories(data);
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

  const renderCategories = ({ item }) => {
    const renderSvgIcon = () => {
        if (item === "jewelery") {
            return <JewellerySvg width={50} height={50}/>;
        } else if (item === "men's clothing") {
            return <MenclothSvg width={50} height={50} />;
        } else if (item === "women's clothing") {
            return <WomenclothSvg width={50} height={50} />;
        } else {
            return <ElectronicsSvg width={50} height={50} />;
        }
    };
    return (
        <View style={styles.item}>
          <TouchableOpacity onPress={() => {
              props.navigation.navigate(SCREENS.Product_In_Category, { SelectedCategory: item })
          }} style={styles.productContainer}>
              <View style={styles.svgitem}>
              {renderSvgIcon()}
              </View>
              <Text style={styles.productTitle}>{item}</Text>
          </TouchableOpacity>
        </View>
    )
  }


  return (
    <View style={styles.flex1}>
      <Header title={'Shop'} menu onPress={() => props.navigation.toggleDrawer()} />  
      {/* <Text style={styles.h1} >Home</Text> */}
      {/* <CustomButton title={"goto"} onPress={() => navigation.navigate(SCREENS.BOTTOM_SCREEN.Account)}/> */}
      {loading ? (
          // Show loading spinner while data is being fetched
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : ( 
        <ScrollView>
          <View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <FlatList
                  data={categories}
                  numColumns={4}
                  keyExtractor={(item) => item} // Use product ID as key
                  renderItem={renderCategories} 
                  scrollEnabled= {false }
              />
            </ScrollView>

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
