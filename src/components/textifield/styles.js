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
        // backgroundColor:AppColors.red,
        flexDirection:'row',
        alignItems:'center'
    },
    textinput1:{
        borderBottomWidth:2,
        width:width(84),
        height:height(6)
    }
});
export default styles;
