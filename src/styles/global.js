import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
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
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
