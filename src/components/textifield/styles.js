import { StyleSheet } from 'react-native';
import App from '~index';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';
const styles = StyleSheet.create({
    text1:{
        fontSize:18,
        color:AppColors.black,
        fontWeight:'bold'
    },
    textfeildconatiner:{
        // backgroundColor:AppColors.white,
        width:width(90),
        flexDirection:'row',
        alignItems:'center'
    },
    secondView:{
        borderBottomWidth:width(.3),
        flexDirection:'row',
        alignItems:'center',
    },
    textinput1:{
        width:width(78),
        height:height(6)
    },
    icons:{
        justifyContent:'center',
        width:width(6),
        alignItems:'center'
    }
});
export default styles;
