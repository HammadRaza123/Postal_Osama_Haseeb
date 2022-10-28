import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const CircleCheckSvg = ({width="16", height="16",color="#c9c9c9"}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 16 16"
    >
      <Path
        id="Icon_ionic-ios-checkmark-circle"
        data-name="Icon ionic-ios-checkmark-circle"
        d="M11.375,3.375a8,8,0,1,0,8,8A8,8,0,0,0,11.375,3.375Zm4.1,5.788-5.142,5.165h0a.7.7,0,0,1-.446.212.673.673,0,0,1-.45-.219L7.275,12.167a.153.153,0,0,1,0-.219l.685-.685a.149.149,0,0,1,.215,0l1.708,1.708,4.692-4.727a.152.152,0,0,1,.108-.046h0a.14.14,0,0,1,.108.046l.673.7A.152.152,0,0,1,15.471,9.163Z"
        transform="translate(-3.375 -3.375)"
        fill={color}
      />
    </Svg>
  );
};

export default CircleCheckSvg;
