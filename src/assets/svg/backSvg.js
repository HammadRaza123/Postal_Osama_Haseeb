import { View, Text } from "react-native";
import React from "react";
import Svg, { ClipPath, Defs, G, Line, Path, Rect } from "react-native-svg";

const BackSvg = ({width="16",height="16",color="#000"}) => {
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
            id="Rectangle_646"
            data-name="Rectangle 646"
            width="16"
            height="16"
            transform="translate(8 8)"
            fill="#e8e8e8"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_82"
        data-name="Mask Group 82"
        transform="translate(-8 -8)"
        clip-path="url(#clip-path)"
      >
        <G
          id="arrow-left_1_"
          data-name="arrow-left (1)"
          transform="translate(4.591 4.591)"
        >
          <Line
            id="Line_59"
            data-name="Line 59"
            x1="13.311"
            transform="translate(4.754 11.409)"
            fill="none"
            stroke="#000" 
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <Path
            id="Path_748"
            data-name="Path 748"
            d="M11.409,18.065,4.754,11.409l6.655-6.655"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </G>
      </G>
    </Svg>
  );
};

export default BackSvg;
