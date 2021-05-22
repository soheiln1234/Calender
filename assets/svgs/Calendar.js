import * as React from "react";
import Svg, { Path,G,Text, TSpan } from "react-native-svg";


function Calendar({day,style}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={70}
      viewBox="0 0 447 535"
      style={style}
    >
      <G data-name="Group 4">
        <Path
          data-name="Path 1"
          d="M447 80v77H0V80a30.008 30.008 0 0130-30h387a30.008 30.008 0 0130 30z"
          fill="#303f78"
        />
        <Path
          data-name="Path 2"
          d="M120 50v56a10 10 0 01-10 10H64a10 10 0 01-10-10V50z"
          fill="#2f3f78"
        />
        <Path
          data-name="Path 3"
          d="M377 50v56a10 10 0 01-10 10h-46a10 10 0 01-10-10V50z"
          fill="#32437d"
        />
        <Path
          data-name="Path 4"
          d="M16 53.47V157H0V80a29.963 29.963 0 0116-26.53z"
          fill="#2f3e77"
        />
        <Path
          data-name="Path 17"
          d="M0 150v317a30 30 0 0030 30h387a30 30 0 0030-30V150z"
          fill="#f5f5f5"
        />
        <Path
          data-name="Path 18"
          d="M120 10v80a10 10 0 01-10 10H80a10 10 0 01-10-10V10A10 10 0 0180 0h30a10 10 0 0110 10z"
          fill="#50758d"
        />
        <Path
          data-name="Path 31"
          d="M377 10v80a10 10 0 01-10 10h-30a10 10 0 01-10-10V10a10 10 0 0110-10h30a10 10 0 0110 10z"
          fill="#50758d"
        />
        <Path
          data-name="Path 32"
          d="M0 150v317a30 30 0 0030 30h11.08a29.978 29.978 0 01-24.58-29.5V171.22A8 8 0 0124 166h423v-16z"
          fill="#e6e6e6"
        />
        <Path
          data-name="Path 33"
          d="M96 100H80a10 10 0 01-10-10V10A10 10 0 0180 0h6v90a10 10 0 0010 10z"
          fill="#2b597f"
        />
        <Path
          data-name="Path 34"
          d="M353 100h-16a10 10 0 01-10-10V10a10 10 0 0110-10h6v90a10 10 0 0010 10z"
          fill="#2b597f"
        />
        <Text
          data-name={22}
          transform="translate(116 394)"
          fill="#2b3763"
          fontSize={200}
          fontFamily="b-yekan"
          letterSpacing=".08em"
          fontWeight="bold"
          textAlign='center'
        >
          <TSpan  x={0} y={0}>
            {
              day <=10  ?  ' '+day : day
            }
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
};

export default Calendar;