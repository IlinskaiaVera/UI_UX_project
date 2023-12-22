import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#D154A7", //changed, фон
  textColor: "#F5F5F5",
  infoIconColor: "#FFA0E8", //changed, иконка фильма
  iconColor: "#D82B9E",
  accentColor1: 'white', //changed
  accentColor2: 'white',
  shadowColor: 'white',

  textShadow: "2px 2px 2px black",
  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "#FFC6EE", //change, фон
  textColor: "black",
  infoIconColor: "#C92AA4", //changed, иконка фильма
  iconColor: "#FF87CF",
  accentColor1: 'black', //changed, тени
  accentColor2: 'black',
  shadowColor: 'black',

  textShadow: "2px 1px 2px white",
  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Monotype Corsiva'; 
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
    background-image: url('https://sun9-66.userapi.com/impg/jcAtd2HPvUVlNRtnYBEF-bi6fIHsfcyVUkORRw/2WJH5maS07s.jpg?size=1124x792&quality=96&sign=2a36afdbca0c06bc9edcac8fdc10dd74&type=album');
    background-blend-mode: screen;
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(2px);
  }
`;
    //background-blend-mode: screen;
    //backdrop-filter: blur(10px);
    //background-position: center;
