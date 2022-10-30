import React from "react";
import { Text, View, Image, ScrollView, FlatList, Alert } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, CircleCheck, Header, ScreenWrapper, TextField } from "~components";
import ScreenNames from "~routes/routes";
import { CircleCheckSvg, ManSvg, MessageSvg, PhoneSvg } from "~assets/svg";
import AppColors from "~utills/AppColors";
import { width } from "~utills/Dimension";
 export default function Signup({ navigation, route }) {
  const dispatch = useDispatch();

  const driverfields = () =>{
    return(
      Alert.alert('nfgjd')
    )
  }

 let Vechiclearray =[
  {
  title:'Bike',
  isSelected:false
 },
  {
  title:'Car',
  isSelected:false
 },
  {
  title:'Mini Van',
  isSelected:false
 },
  {
  title:'Van',
  isSelected:false
 },
  {
  title:'BikCycle',
  isSelected:false
 },
]

const renderVechicles =({item}) =>{
  return(
    <CircleCheck text={item.title}/>
  )
}
  return (
    <ScrollView>
      <ScreenWrapper>
        <View style={styles.mainViewContainer}>
          <Header onPress={() => navigation.goBack()} text={"Sign Up"} />
          <View style={styles.nametextcontainer}>
            <TextField
              textfeildStyles={styles.namestyle}
              placeholder={"jhon"}
              text={"First Name"}
              firstIcon={<ManSvg />}
            />
            <TextField textfeildStyles={styles.namestyle}               placeholder={"Doe"}
 text={"Last Name"} />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField firstIcon={<MessageSvg />} text={"Email"}
                          placeholder={"johndoe@email.com"}

            />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField firstIcon={<PhoneSvg />} text={"Phone Number"} />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
              secureTextEntry={true}
              firstIcon={<PhoneSvg />}
               text={"Password"}
            />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
              secureTextEntry={true}
              firstIcon={<PhoneSvg />}
              text={"Confirm password"}
            />
          </View>
          {/* <View style={styles.textfeildstyle}>
            <TextField
              placeholder={"Select Licence Image"}
              firstIcon={<PhoneSvg />}
              text={" Licence Image"}
            />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
              placeholder={"Select Licence Image"}
              firstIcon={<PhoneSvg />}
              text={"Licence Image"}
            />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
              placeholder={"Select Proof of Address Image"}
              firstIcon={<PhoneSvg />}
              text={"Proof of Address"}
            />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
              placeholder={"Select Profile Image"}
              firstIcon={<PhoneSvg />}
              text={"Profile Image"}
            />
          </View>
          <View style={styles.checkstyle}>
            <FlatList
            data={Vechiclearray}
            keyExtractor={(_,i)=> i}
            numColumns={3}
            showsVerticalScrollIndicator={false}
             renderItem = {renderVechicles}
             columnWrapperStyle={{justifyContent:'space-evenly'}}
             contentContainerStyle={{width:width(85) }}
            />
           </View>
         <View>
          <View style={{flexDirection:"row"}}>
            <PhoneSvg/>
            <Text>Criminal Conviction</Text>
          </View>
         <View style={styles.textfeildstyle}>
            <TextField
              placeholder={"Black"}
              firstIcon={<PhoneSvg />}
              text={"Vehicel Color"}
            />
          </View>
         <View style={styles.textfeildstyle}>
            <TextField
              placeholder={"AB-RF-123"}
              firstIcon={<PhoneSvg />}
              text={"Registration Number"}
            />
          </View>
         <View style={styles.textfeildstyle}>
            <TextField
              placeholder={"Mercedes"}
              firstIcon={<PhoneSvg />}
              text={"Vehicle Manufacturer"}
            />
          </View>
         <View style={styles.textfeildstyle}>
            <TextField
              placeholder={"Cabriolet"}
              firstIcon={<PhoneSvg />}
              text={"Vehicle Modle Type"}
            />
          </View> */}
         {/* </View> */}

          <View style={styles.btncontaine1}>
            <Button containerStyle={styles.btn1color} title={"User"} />
            {
            <Button containerStyle={styles.btn2color} title={"Driver"}
            onPress={(driverfields)}
            />
          }
          </View>
          <View style={styles.btncontainertwo}>
            <Button
              onPress={() =>
                navigation.navigate(ScreenNames.ACCOUNTVARIFICATION)
              }
              containerStyle={styles.btn3}
              textStyle={styles.btn3text}
              title="Sign Up"
            />
            <Button
              containerStyle={styles.btn4}
              textStyle={styles.btn4text}
              title="Sign In with Google"
            />
            <Button
              containerStyle={styles.btn4}
              textStyle={styles.btn4text}
              title="Sign In with Facebook"
            />
          </View>
        </View>
      </ScreenWrapper>
    </ScrollView>
  );
}
