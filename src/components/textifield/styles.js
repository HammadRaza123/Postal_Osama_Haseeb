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
    textinput:{
        width:width(80),
    },
    text1:{
        color:AppColors.black,
        fontSize:15,
        fontWeight:'900'
    }
});
export default styles;
