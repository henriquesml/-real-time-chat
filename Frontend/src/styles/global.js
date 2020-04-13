import { createGlobalStyle } from 'styled-components'

import 'react-perfect-scrollbar/dist/css/styles.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline:0;
  }
  html, body, #root{
    height:100%;
    background: #333;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 14px 'Roboto', sans-serif;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button{
     cursor: pointer;
  }

  ::-webkit-scrollbar
  {
    width: 10px !important;
    height: 10px !important;
  }

  ::-webkit-scrollbar-track
  {
    background: none !important;
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 20px;
    background: #333 !important;
  }
`;
