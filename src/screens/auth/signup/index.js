import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Alert,
  Switch,
} from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import {
  Button,
  CircleCheck,
  FilePickerModal,
  Header,
  ImageField,
  ScreenWrapper,
  TextField,
} from "~components";
import ScreenNames from "~routes/routes";
import { CircleCheckSvg, ManSvg, MessageSvg, PhoneSvg } from "~assets/svg";
import { height, width } from "~utills/Dimension";
import AppColors from "~utills/AppColors";
import ImagePicker from 'react-native-image-crop-picker';
export default function Signup({ navigation, route }) {
  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [showPassword, setShowPassword] = React.useState(true);
  const togglesecureTextEntry = () =>
    setShowPassword((previousState) => !previousState);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(true);
  const togglesecureTextEntryOne = () =>
    setShowConfirmPassword((previousState) => !previousState);
  const [user, setUser] = useState("user");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] =useState("");
  const [password, setPassword] =useState("");
  const [confirmpassword, setConfirmPassword] =useState("");
  const [licenceimage, setLicenceImage] = useState("");
  const [proofofaddress, setProofOfAddress] =useState("");
  const [profileimage, setProfileImage] =useState("");
  const [vehicelcolor , setVehicelColor] =useState("");
  const [registrationnumber,setRegistrationNumber] =useState("");
  const [manufacturervehicel, setManufactureVehicel] =useState("");
  const [vehicelmodel, setVehicelModel] =useState("");
  const [showmodal, setShowMoal] = useState(false);
  const [getLicenceImage, setGetLicenceImage] =useState('')

  const [vehicleArray, setVehicleArray] = useState([
    {
      title: "Bike",
      isSelected: false,
    },
    {
      title: "Car",
      isSelected: false,
    },
    {
      title: "Mini Van",
      isSelected: false,
    },
    {
      title: "Van",
      isSelected: false,
    },
    {
      title: "Bicycle",
      isSelected: false,
    },
  ]);

  const renderVechicles = ({ item, index }) => {
    return (
      <CircleCheck
        text={item.title}
        selected={item.isSelected}
        onPress={() => {
          let temp = [...vehicleArray];
          temp[index].isSelected = !temp[index].isSelected;
          setVehicleArray(temp);
        }}
      />
    );
  };
  return (
    <ScrollView>
      <ScreenWrapper>
        <View style={styles.mainViewContainer}>
          <Header onPress={() => navigation.goBack()} text={"Sign Up"} />
          <View style={styles.nametextcontainer}>
            <TextField
              onChangeText={setFirstName}
              value={firstName}
              textfeildStyles={styles.namestyle}
              textfeildconatinerStyles={styles.namestyle}
              placeholder={"jhon"}
              text={"First Name"}
              firstIcon={<ManSvg />}
            />
            <TextField
            onChangeText={setLastName}
            value={lastName}
              textfeildconatinerStyles={styles.namestyle1}
              textfeildStyles={styles.namestyle1}
              placeholder={"Doe"}
              text={"Last Name"}
            />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
            onChangeText={setEmail}
            value={email}
              firstIcon={<MessageSvg />}
              text={"Email"}
              placeholder={"johndoe@email.com"}
            />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
            onChangeText={setPhonenumber}
            value={phonenumber} 
            firstIcon={<PhoneSvg />} 
            text={"Phone Number"} />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
            onChangeText={setPassword}
            value={password}
              secureTextEntry={showPassword}
              onSecondIconPress={() => togglesecureTextEntry()}
              firstIcon={<PhoneSvg />}
              text={"Password"}
              secondIcon={<PhoneSvg />}
            />
          </View>
          <View style={styles.textfeildstyle}>
            <TextField
            onChangeText={setConfirmPassword}
            value={confirmpassword}
              secureTextEntry={showConfirmPassword}
              onSecondIconPress={() => togglesecureTextEntryOne()}
              firstIcon={<PhoneSvg />}
              text={"Confirm password"}
              secondIcon={<PhoneSvg />}
            />
          </View>
          {user == "driver" && (
            <>
              <View style={styles.textfeildstyle}>
                <ImageField
                onPress={() =>setShowMoal(true)}
                imageText={'Select Licence image'}
                firstIcon={<PhoneSvg />}
                  text={"Licence Image"}
                  image={getLicenceImage}
                  // image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8IQrpci_lb0KcKSoTutxeFX25kDxHk2SfcDguEUp&s'
                />

              </View>
              <FilePickerModal modalVisible={showmodal}
              onImageSelect={setGetLicenceImage}
              onClose={() => setShowMoal(false)}
              />
              {/* <View style={styles.textfeildstyle}>
                <TextField
                  placeholder={"Select Licence Image"}
                  firstIcon={<PhoneSvg />}
                  text={"Licence Image"}
                />
              </View> */}
              <View style={styles.textfeildstyle}>
                <TextField
                onChangeText={setProofOfAddress}
                value={proofofaddress}
                  placeholder={"Select Proof of Address Image"}
                  firstIcon={<PhoneSvg />}
                  text={"Proof of Address"}
                />
              </View>
              <View style={styles.textfeildstyle}>
                <TextField
                onChangeText={setProfileImage}
                value={profileimage}
                  placeholder={"Select Profile Image"}
                  firstIcon={<PhoneSvg />}
                  text={"Profile Image"}
                />
              </View>
              <View style={styles.checkstyle}>
                <FlatList
                  data={vehicleArray}
                  keyExtractor={(_, i) => i}
                  numColumns={3}
                  showsVerticalScrollIndicator={false}
                  renderItem={renderVechicles}
                  columnWrapperStyle={{ justifyContent: "flex-start" }}
                  contentContainerStyle={{ width: width(85) }}
                />
              </View>
              <View>
                <View style={styles.ciriminalcontainer}>
                  <PhoneSvg />
                  <Text style={styles.criminaltext}>Criminal Conviction</Text>
                  <View style={styles.switchconatiner}>
                    <Text>No</Text>
                    <Switch
                      trackColor={styles.trackcolor}
                      thumbColor={isEnabled ? "#000000" : "#D3D3D3"}
                      ios_backgroundColor="White"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                    <Text>Yes</Text>
                  </View>
                </View>
                <View style={styles.textfeildstyle}>
                  <TextField
                  onChangeText={setVehicelColor}
                  value={vehicelcolor}
                    placeholder={"Black"}
                    firstIcon={<PhoneSvg />}
                    text={"Vehicel Color"}
                  />
                </View>
                <View style={styles.textfeildstyle}>
                  <TextField
                  onChangeText={setRegistrationNumber}
                  value={registrationnumber}
                    placeholder={"AB-RF-123"}
                    firstIcon={<PhoneSvg />}
                    text={"Registration Number"}
                  />
                </View>
                <View style={styles.textfeildstyle}>
                  <TextField
                  onChangeText={setManufactureVehicel}
                  value={manufacturervehicel}
                    placeholder={"Mercedes"}
                    firstIcon={<PhoneSvg />}
                    text={"Vehicle Manufacturer"}
                  />
                </View>
                <View style={styles.textfeildstyle}>
                  <TextField
                  onChangeText={setVehicelModel}
                  value={vehicelmodel}
                    placeholder={"Cabriolet"}
                    firstIcon={<PhoneSvg />}
                    text={"Vehicle Modle Type"}
                  />
                </View>
              </View>
            </>
          )}

          <View style={styles.btncontaine1}>
            <Button
              containerStyle={[
                styles.btn1color,
                {
                  backgroundColor:
                    user == "user" ? AppColors.black : AppColors.gray,
                },
              ]}
              title={"User"}
              onPress={() => setUser("user")}
            />
            <Button
              containerStyle={[
                styles.btn2color,
                {
                  backgroundColor:
                    user == "driver" ? AppColors.black : AppColors.gray,
                },
              ]}
              title={"Driver"}
              onPress={() => setUser("driver")}
            />
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
