import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const ManSvg = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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
        id="Mask_Group_94"
        data-name="Mask Group 94"
        transform="translate(0 -22)"
        clip-path="url(#clip-path)"
      >
        <G id="user_1_" data-name="user (1)" transform="translate(-1.6 20.4)">
          <Path
            id="Path_756"
            data-name="Path 756"
            d="M16,16.8V15.2A3.2,3.2,0,0,0,12.8,12H6.4a3.2,3.2,0,0,0-3.2,3.2v1.6"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
          <Circle
            id="Ellipse_21"
            data-name="Ellipse 21"
            cx="3.2"
            cy="3.2"
            r="3.2"
            transform="translate(6.4 2.4)"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
        </G>
      </G>
    </Svg>
  );
};

export default ManSvg;
