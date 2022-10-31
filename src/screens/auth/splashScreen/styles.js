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
  postalogo:{
    width:width(75),
    height:width(75),
  },
  btnconatiner1:{
    backgroundColor:AppColors.black,
  },
  btn1:{ 
    backgroundColor:AppColors.orange,
    borderRadius:0,
  },
  btn1text:{
    color:AppColors.white,
  }
});
export default styles;
