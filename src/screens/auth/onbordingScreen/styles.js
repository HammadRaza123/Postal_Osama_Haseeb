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
    width:width(58),
    height:width(58),
  },
  btn1:{ 
    backgroundColor:AppColors.black,
    borderRadius:0,
    width:width(42)
  },
  btn1text:{
    color:AppColors.orange,
   },
  btnconatiner1:{
    backgroundColor:AppColors.black,
    flexDirection:"row",
    width:width(90),
    justifyContent:"space-between",
    marginBottom:35
  },
  btn2:{
    backgroundColor:AppColors.orange,
    borderRadius:0,
    width:width(42)
  },
  text1:{
    color:AppColors.white,
    fontSize:20,
    fontWeight:'bold',alignItems:'center',
  },
  text1container:{
    marginTop:height(9.5),
    height:height(12),
    justifyContent:"space-between",
    alignItems:'center',
    marginHorizontal:20
  },
  text1o1container:{
    marginTop:height(9.5),
    height:height(11),
    justifyContent:"space-between",
    alignItems:'center',
    marginHorizontal:20
  },
  text1o2container:{
    width:width(80),
    marginTop:height(4),
  },
  text2:{
    fontSize:16,
    color:AppColors.white,
    textAlign:'center'
  },
  activedotcontainer:{
    width:width(5),
    height:height(0.8),
    borderRadius:(0)
  },
  nondotcontainer:{
    width:width(5),
    height:height(0.5),
    borderRadius:(0)
  },
  swipercontainer:{
    alignItems:'center', 
    justifyContent:'center'
  },
  swiper:{
    marginTop:55
  }
});
export default styles;
