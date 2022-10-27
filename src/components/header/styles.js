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
        height:height(8), 
        justifyContent:'space-between'
    }
  
});
export default styles;
