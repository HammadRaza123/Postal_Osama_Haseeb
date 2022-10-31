import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  nametextcontainer: {
    flexDirection: "row",
    marginTop: height(5.5),
    width: width(90),
    alignSelf: "center",
    justifyContent: "space-between",
    // backgroundColor:AppColors.red,
  },
  namestyle: {
    width: width(35),
  },
  namestyle1: {
    width: width(44),
  },
  textfeildstyle: {
    marginTop: height(3),
  },
  btncontaine1: {
    flexDirection: "row",
    width: width(90),
    marginTop: height(5),
  },
  btn1color: {
    backgroundColor: AppColors.black,
    width: width(20),
    borderRadius: 30,
  },
  btn1text: {
    color: AppColors.white,
  },
  btn2color: {
    backgroundColor: AppColors.gray,
    width: width(20),
    borderRadius: 30,
    marginLeft: 10,
  },
  btn2text: {
    color: AppColors.black,
  },
  btncontainertwo: {
    // backgroundColor:AppColors.red,
    height: height(22),
    justifyContent: "space-between",
    width: width(90),
    marginTop: 38,
  },
  btn3: {
    borderRadius: 0,
    backgroundColor: AppColors.orange,
  },
  btn3text: {
    color: AppColors.white,
  },
  btn4: {
    borderRadius: 0,
    backgroundColor: AppColors.gray,
  },
  btn4text: {
    color: AppColors.black,
  },
  checkstyle: {
    width: width(81.5),
    marginTop: height(2),
    marginBottom: height(2),
    // backgroundColor:AppColors.red
  },
  ciriminalcontainer: {
    marginTop: height(4),
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: AppColors.red,
  },
  criminaltext: {
    fontSize: 16,
    color: AppColors.black,
    fontWeight: "bold",
  },
  trackcolor: {
    false: AppColors.white,
    true: AppColors.white,
  },
  switchconatiner: {
    width: width(25),
    flexDirection: "row",
    marginLeft: width(21.5),
    alignItems: "center",
  },
});
export default styles;
