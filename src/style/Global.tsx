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

  --Heading-1-700: 700;
  --Heading-2-600: 600;
  --Heading-3-500: 500;

  --body-1-400: 400;
  --body-2-500: 500;

  --input-placeholder: 400;
  --input-label: 500;
  --button-big-text: 600;
  --button-medium-text: 600;

  --heading: 'Lexend';
  --body: 'Inter';
  --button: 'Inter';
  --input: 'Inter';


}

*{
    margin:0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;   
}

body{
    background-color: var(--whiteFixed);
    color: var(--grey1);
    width: 100%;
    overflow-x: hidden;
    font-family: var(--body);

}

h1, h2, h3, h4, h5, h6, strong{
    font-family: var(--heading);
} 

button{
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-family: var(--button);
}

input, textarea {
  font-family: var(--input);
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
}


::-webkit-scrollbar{
    width: 10px;
}


`;

export default Global;
