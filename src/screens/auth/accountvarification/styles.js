import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  btncontainer:{
    backgroundColor:AppColors.orange,
    borderRadius:0,
    marginTop:height(6.5)
  },
  btntext:{
    color:AppColors.white
  },
  text1:{
    marginTop:height(10),
    width:width(90)
  },
  text1style:{
    color:AppColors.black,
    fontSize:22,
    fontWeight:'bold',

  },
  text2style:{
    width:width(90),
    marginTop:height(3)
  },
  innerwidth:{
    width:width(20)
  },
  textfeildconatainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:height(10),
    width:width(85)
  }
});
export default styles;
