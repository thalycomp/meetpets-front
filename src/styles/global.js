import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  :root {
    --amarelo-color: #F2C849;
    --rosa-color:  #F28F79;
    --azul-color: #487ABD;
    --branco-color: #FFFFFF;
  }

  body {
    background: var(--azul-color);
    height: 100vh;
    width: 100%;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
