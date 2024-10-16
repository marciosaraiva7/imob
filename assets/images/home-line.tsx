import React from "react";
import Svg, { Path } from "react-native-svg";

const Logo: React.FC = () => {
  return (
    <Svg
      id="home_line"
      data-name="home line"
      // xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 48 48"
    >
      <Path
        id="Path_18"
        data-name="Path 18"
        d="M44.95,23.05l-20-20a1.346,1.346,0,0,0-1.88,0l-20,20a1.333,1.333,0,0,0,1.88,1.88L24,5.88,43.05,24.95a1.339,1.339,0,0,0,1.81-.07,1.319,1.319,0,0,0,.07-1.81Z"
        fill="#fff"
      />
      <Path
        id="Path_19"
        data-name="Path 19"
        d="M37.33,42.67H30.67V29.33H17.33V42.67H10.67V24L8,26.67v16a2.661,2.661,0,0,0,2.67,2.66H20V32h8V45.33h9.33A2.661,2.661,0,0,0,40,42.67V26.35l-2.67-2.67Z"
        fill="#fff"
      />
      <Path id="Path_21" data-name="Path 21" d="M0,0H48V48H0Z" fill="none" />
    </Svg>
  );
};

export default Logo;
