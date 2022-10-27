import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:AppColors.black,
  },
  swiperlogo:{
    width:width(40),
    height:width(40),
  },
  btn1:{ 
    backgroundColor:AppColors.orange,
    borderRadius:0,
  },
  btn1text:{
    color:AppColors.white,
  },
  btnconatiner1:{
    backgroundColor:AppColors.black,
  },
});
export default styles;
