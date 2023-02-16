import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
:root{
  //brand colors

  --brand1: #4529E6;
  --brand2: #5126EA;
  --brand3: #B0A6F0;
  --brand4: #EDEAFD;


  //grey scale

  --grey0: #0B0D0D;
  --grey1: #212529;
  --grey2: #495057;
  --grey3: #868E96;
  --grey4: #ADB5BD;
  --grey5: #CED4DA;
  --grey6: #DEE2E6;
  --grey7: #E9ECEF;
  --grey8: #F1F3F5;
  --grey9: #F8F9FA;
  --grey10: #FDFDFD;
  --whiteFixed: #FFFFFF;


  // feedback palete

  --alert1: #CD2B31;
  --alert2: #FDD8D8;
  --alert3: #FFE5E5;
  --sucess1: #18794E;
  --sucess2: #CCEBD7;
  --sucess3: #DDF3E4;


  // colors random profile

  --random1: #E34D8C;
  --random2: #C04277;
  --random3: #7D2A4D;
  --random4: #7000FF;
  --random5: #6200E3;
  --random6: #36007D;
  --random7: #349974;
  --random8: #2A7D5F;
  --random9: #153D2Ev;
  --random10: #6100FF;
  --random11: #5700E3;
  --random12: #30007D;


  // typogrady

  --Heading-1-700:
  --Heading-2-600:
  --Heading-3-600:
  --Heading-3-500:
  --Heading-4-600:
  --Heading-4-500:
  --Heading-5-600:
  --Heading-5-500:
  --Heading-6-600:
  --Heading-6-500:
  --Heading-7-600:
  --Heading-7-500:


  // colors buttons

  --button-black: #0B0D0D;
  --button-black-hover: #212529;

  --button-gray: #DEE2E6;
  --button-gray-hover: #CED4DA
  --button-gray-disable: #CED4DA


  --button-purple: #4529E6
  --button-purple-hover: #5126EA
  --button-purple-opacity: #EDEAFD
  --button-purple-disable: #B0A6F0

  --button-red: #FFE5E5
  --button-red-hover: #FDD8D8

  --button-green: #DDF3E4
  --button-green-hover: #CCEBD7

}

*{
    margin:0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;   
}

body{
    width: 100%;
    overflow-x: hidden;
}
`;

export default Global;
