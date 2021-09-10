import React from "react";
import Routes from "./navigation/routes";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0 ;
  box-sizing: border-box;
}

body {
  margin-left: auto ;
  margin-right: auto;
  width: 70%;
  color: #000000;
}
 h1 {
   font-size: 24px;
 }
 a {
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
 }
 
`;

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
