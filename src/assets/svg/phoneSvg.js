import { View, Text } from "react-native";
import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const PhoneSvg = ({width="16",height="16",color="#000"}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 16 16"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_647"
            data-name="Rectangle 647"
            width="16"
            height="16"
            transform="translate(0 22)"
            fill="#d8d8d8"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_93"
        data-name="Mask Group 93"
        transform="translate(0 -22)"
        clip-path="url(#clip-path)"
      >
        <Path
          id="phone_1_"
          data-name="phone (1)"
          d="M16.051,12.345v2.189a1.459,1.459,0,0,1-1.59,1.459,14.439,14.439,0,0,1-6.3-2.24A14.227,14.227,0,0,1,3.787,9.375,14.439,14.439,0,0,1,1.547,3.05,1.459,1.459,0,0,1,3,1.459H5.187A1.459,1.459,0,0,1,6.647,2.714a9.368,9.368,0,0,0,.511,2.05A1.459,1.459,0,0,1,6.829,6.3L5.9,7.23a11.673,11.673,0,0,0,4.378,4.378l.927-.927a1.459,1.459,0,0,1,1.539-.328,9.368,9.368,0,0,0,2.05.511,1.459,1.459,0,0,1,1.255,1.481Z"
          transform="translate(-0.796 21.271)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
        
        />
      </G>
    </Svg>
  );
};

export default PhoneSvg;
