import { View, Text } from "react-native";
import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const MessageSvg = ({width="16",height="16",color="#000"}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
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
        id="Mask_Group_83"
        data-name="Mask Group 83"
        transform="translate(0 -22)"
        clip-path="url(#clip-path)"
      >
        <G
          id="mail_2_"
          data-name="mail (2)"
          transform="translate(-0.426 21.574)"
        >
          <Path
            id="Path_749"
            data-name="Path 749"
            d="M2.809,2.809H14.044a1.409,1.409,0,0,1,1.4,1.4V12.64a1.409,1.409,0,0,1-1.4,1.4H2.809a1.409,1.409,0,0,1-1.4-1.4V4.213A1.409,1.409,0,0,1,2.809,2.809Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <Path
            id="Path_750"
            data-name="Path 750"
            d="M15.448,4.213,8.426,9.129,1.4,4.213"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </G>
      </G>
    </Svg>
  );
};

export default MessageSvg;
