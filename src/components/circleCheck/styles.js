import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';
const styles = StyleSheet.create({
    headerconatiner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between"
    },
    circle:{
        width:width(5),
        height:width(5),
        borderRadius:width(5),
        backgroundColor:AppColors.black,
        marginRight:width(2),
        alignItems:'center',
        justifyContent:'center'
    },
    text1style:{
        color:AppColors.black,
        fontSize:16
    }
});
export default styles;
