import React, { useRef, useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, ScreenWrapper } from "~components";
import AppColors from "~utills/AppColors";
import Swiper from "react-native-swiper";
import { height, width } from "~utills/Dimension";
import ScreenNames from "~routes/routes";
import { Swiper1, Swiper202, Swiper3 } from "~assets/images";
export default function Onboarding({ navigation, route }) {
  const dispatch = useDispatch();
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef = useRef();
  const SwiperComponent = ({ image, heading, subheading }) => {
    return (
      <View style={styles.swipercontainer}>
        <Image style={styles.swiperlogo} source={image} />
        <View style={styles.text1o1container}>
          <Text style={styles.text1}>{heading}</Text>
          <View style={styles.text1o2container}>
          <Text style={styles.text2}>{subheading}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.black} barStyle={"light-content"}>
      <View style={styles.mainViewContainer}>
        <Swiper
          ref={swiperRef}
          onIndexChanged={setSwiperIndex}
          loop={false}
          scrollEnabled={false}
          paginationStyle={{
            backgroundColor: "red",
            position: "relative",
            marginBottom: height(10),
          }}
           style={styles.swiper}
          activeDotStyle={styles.activedotcontainer}
          activeDotColor={AppColors.orange}
          dotColor={AppColors.white}
          dotStyle={styles.nondotcontainer}
        >
          <SwiperComponent
            image={Swiper1}
            heading={"Track your parcel"}
            subheading={
              "A postal service on demand - you get a fast and reliable 24/7 postal service at any time, any day of the week - all year round."
            }
          />
          <SwiperComponent
            image={Swiper202}
            heading={"Know what's nearby"}
            subheading={"An easy and safe way to post your items"  }
          />
          <SwiperComponent
            image={Swiper3}
            heading={"Never forget your plans"}
            subheading={"Guaranteed delivery time of up to 12 hours to your exact location"
             }
          /> 
        </Swiper>
        <View style={styles.btnconatiner1}>
          <Button
            containerStyle={[
              styles.btn1,
              {
                width: swiperIndex == 2 ? width(90) : width(42),
                backgroundColor:
                  swiperIndex == 2 ? AppColors.orange : AppColors.black,
              },
            ]}
            onPress={() => navigation.navigate(ScreenNames.LOGIN)}
            textStyle={[
              styles.btn1text,
              { color: swiperIndex == 2 ? AppColors.white : AppColors.orange },
            ]}
            title="Sign In"
          />
          {swiperIndex == 2 ? null : (
            <Button
              containerStyle={styles.btn2}
              onPress={() => swiperRef?.current?.scrollBy(1)}
              textStyle={{}}
              title="Next"
            />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
