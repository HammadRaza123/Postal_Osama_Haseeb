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
  text1style:{
    width:width(57), 
    marginTop:19
  },
  textfieldconatiner:{ 
    marginTop:59
  },
  btncontainer:{
    backgroundColor:AppColors.orange,
    borderRadius:0,
    marginTop:height(6.5)
  },
  btntext:{
    color:AppColors.white
  }
});
export default styles;
