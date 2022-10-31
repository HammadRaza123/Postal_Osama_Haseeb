import App from 'App';
import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';
const styles = StyleSheet.create({
    text1:{
        fontSize:18,
        color:AppColors.black,
        fontWeight:'bold'
    },
    headerconatiner:{
        width:width(90),
         height:height(8), 
        justifyContent:'space-between'
    },
    modalStyles:{
        alignSelf:'center',
     },
     modaltext:{
        fontSize:width(6.3),
        fontWeight:'bold'
     },
     modaltextconatiner:{
        justifyContent:"center",
        alignItems:"center"
     },
     modalbtn:{
        backgroundColor:AppColors.orange,
        height:height(12),
        width:width(26),
        borderRadius:(10),
        alignItems:"center",
        justifyContent:"center",
        marginTop:height(5)
     },
     modalbtntext:{
        fontSize:width(4.5),
        fontWeight:"bold",
        color:AppColors.black,
        textAlign:'center',
        width:width(15.9),
      },
     modalbtncontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:35
     },
    mainView:{
        height:height(40),
        width:width(80),
        backgroundColor:AppColors.white,
        borderRadius:width(4.5),
        shadowColor: "#000",
        justifyContent:'center',
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    }
  
});
export default styles;
