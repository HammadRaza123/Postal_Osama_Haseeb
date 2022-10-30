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
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},

});
export default styles;
