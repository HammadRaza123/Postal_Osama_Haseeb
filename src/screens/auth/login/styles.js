import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    marginHorizontal:16,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  componnetcontainer:{
    height:height(28),
     justifyContent:'space-between',
    marginTop:height(6)
  },
  forgetcontainer:{
    marginTop:height(3),
    flexDirection:"row-reverse"
  },
  forgettext:{
     fontSize:15
  },
  btncontainer:{
    flexDirection:'row',
    width:width(52),
    // backgroundColor:AppColors.red,
    justifyContent:'space-between'
  },
  btn1container:{
    borderRadius:90,
    width:width(25),
    backgroundColor:AppColors.black
  },
  btn2container:{
    borderRadius:90,
    width:width(25),
    backgroundColor:AppColors.gray
  },
  btn1color:{
    color:AppColors.white
  },
  btn2color:{
    color:AppColors.black
  }

});
export default styles;
