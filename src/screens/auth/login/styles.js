import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    marginHorizontal:16,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  componnetcontainer:{
    height:height(22.5),
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
  },
  btncontainertwo:{
    // backgroundColor:AppColors.red,
    height:height(22),
    justifyContent:"space-between",
    width:width(90),
    marginTop:38
  },
  btn3:{
    borderRadius:0,
    backgroundColor:AppColors.orange
  },
  btn3text:{
    color:AppColors.white
  },
  btn4:{
    borderRadius:0,
    backgroundColor:AppColors.gray
  },
  btn4text:{
    color:AppColors.black
  },
  signupcontainer:{ 
    height:height(12.7),
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:45
  },
  accounttextcolor:{
    color:AppColors.black,
    fontWeight:"bold"
  }
});
export default styles;
