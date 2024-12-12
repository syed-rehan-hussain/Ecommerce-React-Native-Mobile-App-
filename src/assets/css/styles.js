import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    flex1: {
        flex: 1,
    },
    bgwhite:{
        backgroundColor:'white'
    },
    h1:{
        fontSize: 26,
        fontWeight: 700,
    },
    paragraph1:{
        fontSize: 16,
        fontWeight: 'semibold',
        paddingHorizontal: 100,
    },
    aligncenter:{
        textAlign: 'center',
    },
    padding10:{
        padding: 10
    },
    m10:{
        marginBottom: 10
    },
    mb20:{
        marginBottom: 20
    },
    mb10:{
        marginBottom: 10
    },
    form:{
        width: '100%',
        paddingHorizontal: 30,
    },
    label:{
        fontSize: 16,
        fontWeight: 'semibold'
    },
    txtfield:{
        width: '100%',
        height: 40,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        color: '#555',
        backgroundColor:'#fafafa',
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 6,
    },
    bgimage:{
        width: '120',
        height: '180',
        resizeMode: 'contain'
    },
    svgbtn:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    iconrect:{
        padding:10,
        marginHorizontal:10,
        marginVertical:20,
        backgroundColor:'#fafafa',
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 6,
    },
    blue:{
        color:'blue',
    },
    productImage:{
        width: 180,
        height: 180,
        borderRadius: 8,
        textAlign: 'center'
    },
    singleProductImage:{
        width: '100%',
        height: '300',
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    productTitle:{
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center'
    },
    singleProductTitle:{
        fontSize: 22,
        lineHeight: 28,
        paddingHorizontal: 20,
        fontWeight:600
        // textAlign: 'center'
    },
    singeProductCategory:{
        fontSize: 18,
        lineHeight: 35,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight:500,
        color:'red'
    },
    productCategory:{
        fontSize: 14,
        lineHeight: 25
    },
    singleProductdescription:{
        fontSize: 16,
        lineHeight: 25,
        paddingHorizontal: 20 
    },
    productPrice:{
        fontSize: 18,
        color: 'blue',
        lineHeight: 25,
        marginBottom: 10,
    },
    singleproductPrice:{
        lineHeight: 25,
        fontSize: 18,
        fontWeight:700,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: 'red'
    },
    item: {
        // backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        margin: 5,
        // height: 150, // Adjust for row height
        // borderWidth: 1,
        // borderColor: '#ddd',
        // borderRadius: 8,
        paddingHorizontal: 10,
    },

    svgitem: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        margin: 5,
    },
})

export default styles;